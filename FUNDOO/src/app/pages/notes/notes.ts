import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { IconToolbarComponent } from '../icons/icons';
import { NoteService } from '../../services/note/note';
import { ViewService } from '../../services/viewService/view-service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IconToolbarComponent,
    AsyncPipe, NgClass
  ],
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class NotesComponent {

  colorPalette: string[] = [
  '#ffffff',
  '#f28b82',
  '#fbbc04',
  '#fff475',
  '#ccff90',
  '#a7ffeb',
  '#cbf0f8',
  '#aecbfa',
  '#d7aefb',
  '#fdcfe8',
  '#e6c9a8',
  '#e8eaed'
];

  isListView$;
  
  constructor(
    private noteService: NoteService,
    private fb: FormBuilder,
    private viewService: ViewService
  ) {    this.isListView$ = this.viewService.isListView$;
}

  isExpanded = false;
  notes: any[] = [];
  noteForm!: FormGroup;

  editingNoteId: string | null = null;

  ngOnInit() {
     this.viewService.isListView$.subscribe(val => {
    console.log('NOTES VIEW MODE:', val);
  });
    this.noteForm = this.fb.group({
      title: [''],
      description: [''],
      color: ['']
    });

    this.getNotes();
  }

  // CREATE
  expandNote() {
    this.isExpanded = true;
  }

  closeNote() {
    const value = this.noteForm.value;

    if (value.title?.trim() || value.description?.trim()) {
      this.noteService.addNote(value).subscribe(() => {
        this.getNotes();
      });
    }

    this.resetNote();
  }

  resetNote() {
    this.isExpanded = false;
    this.noteForm.reset({
      title: '',
      description: '',
      color: ''
    });
  }

  // FETCH
  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (res: any) => {
        const allNotes = res?.data?.data || res?.data?.notes || [];

        this.notes = allNotes.filter(
          (note: any) => !note.isArchived && !note.isDeleted
        );
      },
      error: (err: any) => console.error(err)
    });
  }

  // EDIT MODE
  startEdit(note: any) {
    this.editingNoteId = note.id;
  }

  stopEdit() {
    this.editingNoteId = null;
  }


  createNote() {
  const value = this.noteForm.value;

  if (!value.title?.trim() && !value.description?.trim()) {
    this.isExpanded = false;
    return;
  }

  this.noteService.addNote(value).subscribe({
    next: () => {
      this.getNotes();
      this.resetNote();
    },
    error: (err) => console.error(err)
  });
}
  // UPDATE
  updateNote(note: any) {
    const payload = {
      noteIdList: [note.id],
      title: note.title,
      description: note.description,
      color: note.color
    };

    this.noteService.updateNote(payload).subscribe({
      next: () => {
        this.getNotes();
        this.stopEdit();
      },
      error: (err: any) => console.error(err)
    });
  }

  // ARCHIVE
  onArchive(noteId: string) {
    this.noteService.archiveNote(noteId).subscribe(() => {
      this.getNotes();
    });
  }

  // COLOR
  changeColor(note: any, color: string) {
    note.color = color;
    this.noteService.changeColorNotes(note.id, color)
      .subscribe(() => this.getNotes());
  }

  // DELETE
  deleteForever(note: any) {
    this.noteService.deleteForeverNotes(note.id)
      .subscribe(() => this.getNotes());
  }
  toggleView() {
  this.viewService.toggleView();
}
}
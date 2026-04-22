import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconToolbarComponent } from '../icons/icons';
import { NoteService } from '../../services/note/note';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, IconToolbarComponent],
  templateUrl: './notes.html',
  styleUrls: ['./notes.css']
})
export class NotesComponent {

  constructor(private noteService: NoteService) {}

  isExpanded = false;

  notes: any[] = [];

  newNote: any = {
    id:null,
    title: '',
    description: '',
    color:''
  };

  editingNote: any = null;



  ngOnInit() {
    this.getNotes();
  }

//   getNotes() {
//   this.noteService.getNotes().subscribe({
//     next: (res: any) => {
//         console.log("API RESPONSE:", res); // 👈 ADD THIS
//       this.notes = res?.data || res?.notes || res || [];
      
//     },
//     error: (err) => {
//       console.error('Error fetching notes', err);
//     }
//   });
// }


getNotes() {
  this.noteService.getNotes().subscribe({
    next: (res: any) => {
      console.log("FULL RESPONSE:", res);

      this.notes = res?.data?.data || res?.data?.notes || [];

      console.log("FINAL NOTES:", this.notes);
    },
    error: (err) => {
      console.error('Error fetching notes', err);
    }
  });
}

  expandNote() {
    this.isExpanded = true;
  }

  closeNote() {
   
    if (this.newNote.title?.trim() || this.newNote.description?.trim()) {

      if (this.editingNote) {
        this.editingNote.title = this.newNote.title;
        this.editingNote.description = this.newNote.description;
        this.editingNote.color=this.newNote.color;
      } else {
         this.noteService.addNote(this.newNote).subscribe(() => {
    
          this.getNotes();
        });
      }
    }

    this.resetNote();
  }

  resetNote() {
    this.isExpanded = false;
    this.newNote = {  title: '',description:'',color:''};
    this.editingNote = null;
  }

  editNote(note: any) {
    this.isExpanded = true;
    this.newNote = { ...note };
    this.editingNote = note;
  }
}
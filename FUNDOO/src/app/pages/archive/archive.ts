import { Component } from '@angular/core';
import { NoteService } from '../../services/note/note';
import { CommonModule } from '@angular/common';
import { IconToolbarComponent } from '../icons/icons';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule, IconToolbarComponent],
  templateUrl: './archive.html',
  styleUrls: ['./archive.css'],
})
export class Archive {

  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe((res: any) => {
      const allNotes = res.data.data;

      this.notes = allNotes.filter(
        (note: any) => note.isArchived && !note.isDeleted
      );

      console.log('ARCHIVE NOTES:', this.notes);
    });
  }

 
}
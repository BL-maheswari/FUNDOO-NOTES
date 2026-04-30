import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from '../services/note/note';
import { IconToolbarComponent } from '../pages/icons/icons';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [CommonModule, IconToolbarComponent],
  templateUrl: './trash.html',
  styleUrls: ['./trash.css'],
})
export class Trash {

  notes: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe((res: any) => {
      const allNotes = res?.data?.data || [];

      this.notes = allNotes.filter(
        (note: any) => note.isDeleted
      );

      console.log('TRASH NOTES:', this.notes);
    });
  }
}
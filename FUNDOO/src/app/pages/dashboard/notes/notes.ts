import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface NoteItem {
  id: number;
  text: string;
  completed: boolean;
}

interface Note {
  id: number;
  title: string;
  items: NoteItem[];
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.html',
  styleUrls: ['./notes.css'],
})
export class Notes {

  // 🔹 Input field value
  newNoteText: string = '';

  // 🔹 Notes list
  notes: Note[] = [];

  // 🔹 Create new note when user presses Enter
  createNote(): void {
    const text = this.newNoteText.trim();

    if (!text) return;

    const newNote: Note = {
      id: Date.now(),
      title: text,

      // sample checklist (you can remove later)
      items: [
        {
          id: 1,
          text: 'Discussion with the team for attendance',
          completed: true
        },
        {
          id: 2,
          text: 'Second task',
          completed: true
        }
      ]
    };

    // Add new note at top
    this.notes.unshift(newNote);

    // Clear input
    this.newNoteText = '';
  }

  // 🔹 Count completed checklist items
  getCompletedCount(note: Note): number {
    return note.items.filter(item => item.completed).length;
  }
}
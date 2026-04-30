import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note/note';

@Component({
  selector: 'app-icon-toolbar',
  standalone: true,
  templateUrl: './icons.html',
  styleUrls: ['./icons.css']
})
export class IconToolbarComponent {
  @Output() colorChange = new EventEmitter<string>();

 
 
  @Input() note: any; // ✅ receive note
  @Input() context: 'note' |'archive' |'trash' = 'note';
  @Output() refresh = new EventEmitter<void>();
  @Input() mode: 'card' | 'dialog' = 'card';

  constructor(private noteService: NoteService) {}




  colorPalette: string[] = [
  '#ffffff','#f28b82','#fbbc04','#fff475',
  '#ccff90','#a7ffeb','#cbf0f8','#aecbfa',
  '#d7aefb','#fdcfe8','#e6c9a8','#e8eaed'
];

showPalette = false;

togglePalette() {
  this.showPalette = !this.showPalette;
}

selectColor(color: string) {
  this.showPalette = false;

  // 🔥 IMPORTANT: send color to parent
  this.colorChange.emit(color);
}
  archive() {
    console.log('Archiving:', this.note?.id);

    this.noteService.archiveNote(this.note.id).subscribe(() => {
      this.refresh.emit(); // tell parent to reload
    });
  }


  unarchive() {
  this.noteService.unarchiveNote(this.note.id).subscribe({
    next: () => {
      console.log("UNARCHIVED");
      this.refresh.emit();
    },
    error: (err) => console.error(err)
  });
}

deleteNote() {
  console.log('Deleting:', this.note.id);

  this.noteService.trashNote(this.note.id).subscribe(() => {
    this.refresh.emit();
  });
}

changeColor(color: string) {
  console.log('Changing color:', this.note?.id, color);

  this.noteService.changeColorNotes(this.note.id, color)
    .subscribe(() => {
      this.refresh.emit(); // reload notes
    });
}

onColorPick(event: any) {
  const color = event.target.value;
  this.changeColor(color);
}

deleteForever() {
  console.log('Deleting forever:', this.note.id);

  this.noteService.deleteForeverNotes(this.note.id)
    .subscribe(() => {
      this.refresh.emit(); // reload notes
    });
}
reminder() { console.log("reminder"); }

collaborator() { console.log("collaborator"); }

image() { console.log("image"); }

more() { console.log("more"); }

undo() { console.log("undo"); }

redo() { console.log("redo"); }


restore() {
  console.log("RESTORE CLICKED:", this.note.id);

  this.noteService.restoreFromTrash(this.note.id).subscribe({
    next: () => {
      this.refresh.emit(); // refresh trash page
    },
    error: (err) => console.error(err)
  });
}
}
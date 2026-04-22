import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-icon-toolbar',
  standalone: true,
  templateUrl: './icons.html',
  styleUrls: ['./icons.css']
})
export class IconToolbarComponent {

  @Output() action = new EventEmitter<string>();

  onClick(actionName: string) {
    this.action.emit(actionName);
  }
}
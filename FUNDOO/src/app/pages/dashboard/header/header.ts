import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ViewService } from '../../../services/viewService/view-service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    AsyncPipe, NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {

  @Output() menuClick = new EventEmitter<void>();

  isListView$; // just declare

  constructor(private viewService: ViewService) {
    this.isListView$ = this.viewService.isListView$; // ✅ safe here
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  toggleView() {
    this.viewService.toggleView();
  }
}
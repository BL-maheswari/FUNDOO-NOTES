import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.css']
})
export class SidenavComponent {

  @Input() expanded = true;

  active = 'notes';

  @Output() menuChange = new EventEmitter<string>();

  navItems = [
    { name: 'notes', label: 'Notes', icon: 'lightbulb', route: '/dashboard/notes' },
    { name: 'reminders', label: 'Reminders', icon: 'notifications', route: '/dashboard/remainders' },
    { name: 'labels', label: 'Labels', icon: 'label', route: '/dashboard/labels' },
    { name: 'archive', label: 'Archive', icon: 'archive', route: '/dashboard/archive' },
    { name: 'trash', label: 'Trash', icon: 'delete', route: '/dashboard/trash' }
  ];

  select(menu: string) {
    this.active = menu;
    this.menuChange.emit(menu);
  }
}
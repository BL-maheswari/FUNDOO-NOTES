// import { Component } from '@angular/core';
// import { Header } from './header/header';
// // import { Notes } from './notes/notes';

// @Component({
//   selector: 'app-dashboard',
//   standalone:true,
//   imports: [Header],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.css',
// })
// export class Dashboard {}




import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { SidenavComponent } from '../sidenav/sidenav'; // adjust path if needed

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Header, SidenavComponent, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}

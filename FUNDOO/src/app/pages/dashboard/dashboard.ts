import { Component } from '@angular/core';
import { Header } from './header/header';
import { Notes } from './notes/notes';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [Header,Notes],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}

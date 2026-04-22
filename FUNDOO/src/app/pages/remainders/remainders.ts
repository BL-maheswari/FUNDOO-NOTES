import { Component, OnInit } from '@angular/core';

interface Remainder {
  id: number;
  title: string;
  date: string;
}

@Component({
  selector: 'app-remainders',
  templateUrl: './remainders.html',
  styleUrls: ['./remainders.css']
})
export class RemaindersComponent implements OnInit {

  remainders: Remainder[] = [];

  ngOnInit(): void {
    this.remainders = [
      { id: 1, title: 'Team meeting', date: '2026-04-23' },
      { id: 2, title: 'Project submission', date: '2026-04-25' }
    ];
  }

  addRemainder(title: string, date: string) {
    if (!title || !date) return;

    this.remainders.push({
      id: Date.now(),
      title,
      date
    });
  }

  deleteRemainder(id: number) {
    this.remainders = this.remainders.filter(r => r.id !== id);
  }
}
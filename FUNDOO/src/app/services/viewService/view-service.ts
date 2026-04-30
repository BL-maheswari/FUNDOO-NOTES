
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewService {

  // 🔹 holds current view state
  private isListViewSubject = new BehaviorSubject<boolean>(false);

  // 🔹 observable for components to subscribe
  isListView$ = this.isListViewSubject.asObservable();

  constructor() {
    // 🔥 restore saved view (optional but recommended)
    const saved = localStorage.getItem('viewMode');
    if (saved) {
      this.isListViewSubject.next(saved === 'list');
    }
  }

  // 🔹 toggle between grid & list
  toggleView() {
    const newValue = !this.isListViewSubject.getValue();
    this.isListViewSubject.next(newValue);

    // 🔥 save preference
    localStorage.setItem('viewMode', newValue ? 'list' : 'grid');
  }
}
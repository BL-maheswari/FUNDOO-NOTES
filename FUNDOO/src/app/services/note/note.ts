import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../httpclient/httpclient';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http: HttpService) {}

 private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization':token,
      'Content-Type': 'application/json'
    });
  }




  // GET all notes
  getNotes(): Observable<any> {
    return this.http.getMethod(`notes/getNotesList`,this.getAuthHeaders());
  }


  

  // ADD new note
  addNote(note: any): Observable<any> {
    console.log(note);
    return this.http.postMethod(`notes/addNotes`, note,this.getAuthHeaders());
  }



}
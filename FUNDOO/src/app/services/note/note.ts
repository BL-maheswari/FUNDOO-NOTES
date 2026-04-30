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
     'Authorization': token,
      'Content-Type': 'application/json'    });
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

  archiveNote(noteId: string): Observable<any> {
  const body = {
    noteIdList: [noteId], // ✅ dynamic ID
    isArchived: true
  };
  return this.http.postMethod('notes/archiveNotes', body, this.getAuthHeaders());
}

unarchiveNote(noteId: string) {
  return this.http.postMethod('notes/archiveNotes', {
    noteIdList: [noteId],
    isArchived: false   // ✅ reverse
  }, this.getAuthHeaders());
}

trashNote(noteId: string) {
  return this.http.postMethod('notes/trashNotes', {
    noteIdList: [noteId],
    isDeleted: true
  }, this.getAuthHeaders());
}

changeColorNotes(noteId: string, color: string): Observable<any> {
  const body = {
    noteIdList: [noteId],
    color: color
  };
  return this.http.postMethod(
    'notes/changesColorNotes',
    body,
    this.getAuthHeaders()
  );
}

deleteForeverNotes(noteId: string): Observable<any> {
  const body = {
    noteIdList: [noteId]
  };

  return this.http.postMethod(
    'notes/deleteForeverNotes',
    body,
    this.getAuthHeaders()
  );
}

updateNote(data: any) {
  return this.http.postMethod(
    'notes/updateNotes',
    data,
    this.getAuthHeaders()
  );
}

restoreFromTrash(noteId: string) {
  return this.http.postMethod('notes/trashNotes', {
    noteIdList: [noteId],
    isDeleted: false
  }, this.getAuthHeaders());
}
}
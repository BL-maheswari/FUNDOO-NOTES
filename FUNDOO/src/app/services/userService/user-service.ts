import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpService } from '../httpclient/httpclient';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(private api: HttpService) {}

//   login(payload: any) {
//   return this.api.postMethod('/user/login', payload).pipe(
//     tap((response: any) => {
//       console.log('FULL RESPONSE 👉', response); // 🔥 debug here

//       if (response?.id) {
//         localStorage.setItem('token', response.id);
//       }

//       localStorage.setItem('userData', JSON.stringify(response));
//     })
//   );
// }

login(payload: any) {
  console.log('kkk', payload);
  return this.api.postMethod('user/login', payload);
}

  register(payload: any): Observable<any> {
    return this.api.postMethod('user/userSignUp', payload);
  }
}
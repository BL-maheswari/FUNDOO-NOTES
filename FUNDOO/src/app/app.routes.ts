import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Registration } from './pages/registration/registration';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthGuard } from './services/authGuard/auth-guard';
import { NotesComponent } from './pages/notes/notes';
import { IconToolbarComponent } from './pages/icons/icons';
import { SidenavComponent } from './pages/sidenav/sidenav';
import { RemaindersComponent } from './pages/remainders/remainders';
import { Archive } from './pages/archive/archive';
import { Trash } from './trash/trash';
import { Labels } from './pages/labels/labels';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'signup', component: Registration },
//   {path:'notes',component:NotesComponent},
//   {path:'icons',component:IconToolbarComponent},
//   {path:'sidenav',component:SidenavComponent},
 {
    path: 'dashboard',
    component: Dashboard,canActivate:[AuthGuard],

    children:[
      { path:'',redirectTo:'notes',pathMatch:'full'},
      { path:'notes',component:NotesComponent},
      {path:'remainders',component:RemaindersComponent},
      {path:'archive',component:Archive},
      {
        path:'trash',component:Trash
      },
      {path:'labels',component:Labels}
]
 }
];





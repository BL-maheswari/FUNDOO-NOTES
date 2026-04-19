import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,  MatToolbarModule,MatTooltipModule,MatMenuModule,
  MatDividerModule,
  MatButtonModule ],
  templateUrl: './header.html',
   styleUrl: './header.css',
})
export class Header {



}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashbordComponent } from "./PAGES/dashbord/dashbord.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DashbordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashbordSurMesure';
}

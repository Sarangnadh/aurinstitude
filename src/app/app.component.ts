import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarrComponent } from "./Pages/navbarr/navbarr.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aurinstitude';
}

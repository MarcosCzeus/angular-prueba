import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';
import { ImportsModule } from './components/barra/imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraComponent, ImportsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dashboard';

  constructor(private router: Router) {}

  // Método para navegar a /barra
  goToBarra() {
    this.router.navigate(['/barra']);
  }

}

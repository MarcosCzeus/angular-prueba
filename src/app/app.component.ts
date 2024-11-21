import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraComponent } from './components/barra/barra.component';
import { ImportsModule } from './components/barra/imports';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportingComponent } from './components/reporting/reporting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraComponent, ImportsModule,SettingsComponent, ReportingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Dashboard';
}

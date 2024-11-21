import { Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { BarraComponent } from './components/barra/barra.component';

export const routes: Routes = [
    
  { path: 'settings', component: SettingsComponent },
  { path: 'reporting', component: ReportingComponent},
  { path: 'barra', component: BarraComponent},
];

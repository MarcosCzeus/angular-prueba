import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ImportsModule } from './imports';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [ImportsModule, MenuModule, BadgeModule, RippleModule, AvatarModule, CommonModule, RouterModule],
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'PLANINNG',
        items: [
          {
            label: 'RoadMap',
            icon: 'pi pi-objects-column',
          },
          {
            label: 'BackLog',
            icon: 'pi pi-database',
          },
          {
            label: 'Board',
            icon: 'pi pi-clipboard',
          },
          {
            label: 'Reports',
            icon: 'pi pi-chart-line',
            routerLink: '/reporting'
          },
        ],
      },
      {
        label: 'DEVELOPMENT',
        items: [
          {
            label: 'Code',
            icon: 'pi pi-code',
          },
          {
            label: 'Release',
            icon: 'pi pi-folder-open',
          },
        ],
      },
      {
        label: 'OPERATIONS',
        items: [
          {
            label: 'Deployments',
            icon: 'pi pi-cloud-upload',
          },
        ],
      },
      {
        separator: true,
      },
      {
        items: [
          {
            label: 'Proyect pages',
            icon: 'pi pi-receipt',
          },
          {
            label: 'Timesheet',
            icon: 'pi pi-verified',
          },
          {
            label: 'Add shotcut',
            icon: 'pi pi-file-plus',
          },
          {
            label: 'Project settings',
            icon: 'pi pi-cog',
            routerLink: '/settings',
          },
        ],
      },
    ];
  }
}
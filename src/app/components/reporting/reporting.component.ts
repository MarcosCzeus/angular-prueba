import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImportsModule } from '../barra/imports';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [ ImportsModule, MenuModule, BadgeModule, RippleModule, AvatarModule, CommonModule, RouterModule, ButtonModule ],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.scss'
})
export class ReportingComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Back to menu',
        icon: 'pi pi-chevron-circle-left',
        routerLink: '/barra'
      },
      {
        separator: true,
      },
            {
              label: 'Reports',
            },
                {
                  label: 'Overview',
                },
                {
                  label: 'Burnup report',
                },
                {
                  label: 'Sprint burndown chat',
                },
                {
                  label: 'Velocity report',
                },
                {
                  label: 'Cumulative flow diagram',
                },
                {
                  label: 'Cicle time report',
                },
                {
                  label: 'Deployment frequency report',
                },
              ];
            }
  }


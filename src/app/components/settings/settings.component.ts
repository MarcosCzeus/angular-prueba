import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImportsModule } from '../barra/imports';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ImportsModule, MenuModule, BadgeModule, RippleModule, AvatarModule, CommonModule, RouterModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
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
                  label: 'Details',
                },
                {
                  label: 'Access',
                },
                {
                  label: 'Notifications',
                },
                {
                  label: 'Automation',
                },
                {
                  label: 'Isues types',
                },
                {
                  label: 'Features',
                },
                {
                  label: 'Board',
                  items: [
                    {
                        label: 'Document',
                        icon: 'pi pi-file'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video'
                    }
                ]
                },
                {
                  label: 'Toolchain',
                },
                {
                  label: 'Apps',
                  items: [
                    {
                        label: 'Document',
                        icon: 'pi pi-file'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video'
                    }
                ]
                },
              ];
  }
}

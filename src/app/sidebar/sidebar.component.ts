// Copyright © 2018-2019 Тепляшин Сергей Васильевич. Contacts: <sergio.teplyashin@gmail.com>
// License: https://opensource.org/licenses/GPL-3.0

import { Component } from '@angular/core';
import { TemplateRef, ViewChild} from '@angular/core';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { MenuService } from '../_services/menu.service'

@Component({ 
   selector: 'sidebar',
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.css'],
   providers: [MenuService]
})
export class SidebarComponent {
   @ViewChild('menuItemTemplate') readOnlyTemplate: TemplateRef<any>;

   faTachometer = faTachometerAlt;
   faSignOut = faSignOutAlt;

   users = [];

   constructor(private menuService: MenuService) {}

   ngOnInit() {
      this.menuService.getMenu().subscribe(data => this.users = data);
   }
}
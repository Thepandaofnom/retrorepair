import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-side-menu',
  imports: [
    MenuModule
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu implements OnInit{
  menuItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Repair Serivices', icon: 'pi pi-wrench'},
      {label: 'Mod Services', icon: 'pi pi-microchip'},
      {label: 'Store', icon: 'pi pi-shop'},
      {label: 'Faq', icon: 'pi pi-question-circle'},
      {label: 'Service Agreement', icon: 'pi pi-file-edit'},
      {label: 'contact', icon: 'pi pi-globe'},
    ]
    
  }
}

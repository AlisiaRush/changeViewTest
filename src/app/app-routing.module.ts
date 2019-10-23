import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngIndexComponent } from './ang-index/ang-index.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TablesComponent } from './tables/tables.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'angIndex', component: AngIndexComponent },
  { path: 'dropdownMenus', component: DropdownMenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tables', component: TablesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

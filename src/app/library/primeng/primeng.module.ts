import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SlideMenuModule } from 'primeng/slidemenu';
import { PanelModule } from 'primeng/panel';

 

@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbModule,
    CalendarModule,
    DropdownModule,
    SlideMenuModule,
    PanelModule
  ],

  exports : [
    CalendarModule,
    SlideMenuModule,
    PanelModule
  ],

})

export class PrimengModule { }

 
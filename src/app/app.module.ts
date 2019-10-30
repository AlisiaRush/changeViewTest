//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngIndexComponent } from './ang-index/ang-index.component';
import { DialogAngIndexComponent } from './ang-index/dialog-ang-index/dialog-ang-index.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TablesComponent } from './tables/tables.component';
//SERVICES
import { EmployeeService } from './employee.service';
import { SearchPipe } from './pipes/search.pipe';
import { MenuComponent } from './menu/menu.component';

import { MaterialModule } from './library/material/material.module';
import { PrimengModule } from './library/primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AngIndexComponent,
    DialogAngIndexComponent,
    DropdownMenuComponent,
    SearchPipe,
    TablesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    PrimengModule
  ],
  exports: [

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [DialogAngIndexComponent],
  providers: [
    MatDialog,
    EmployeeService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

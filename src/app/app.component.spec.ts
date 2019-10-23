//MODULES
import { EmployeeService } from '../app/employee.service';
import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AngIndexComponent } from './ang-index/ang-index.component';
import { DialogAngIndexComponent } from './ang-index/dialog-ang-index/dialog-ang-index.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { TablesComponent } from './tables/tables.component';
import { SearchPipe } from '../app/pipes/search.pipe';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        AngIndexComponent,
        DialogAngIndexComponent,
        DropdownMenuComponent,
        TablesComponent,
        SearchPipe
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MaterialModule,
        MatDialogModule,
        RouterTestingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        RouterTestingModule
      ],

      providers:[HttpClientModule,EmployeeService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'The Machine'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('The Machine');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('The Machine');
  });
});

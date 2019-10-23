import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { EmployeeService } from '../employee.service';
import { AppComponent } from '../app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      DropdownMenuComponent,AppComponent],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

      providers:[EmployeeService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

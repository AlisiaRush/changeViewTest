import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngIndexComponent } from './ang-index.component';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule} from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AngIndexComponent', () => {
  let component: AngIndexComponent;
  let fixture: ComponentFixture<AngIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngIndexComponent ],
      imports:[MatMenuModule],
      providers: [
        {provide: MatDialog, useValue: {}},
     ],
     schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it(`should have as title 'Angular Index'`, () => {
    const fixture = TestBed.createComponent(AngIndexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Index');
  });

});

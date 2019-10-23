import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAngIndexComponent } from './dialog-ang-index.component';

describe('DialogAngIndexComponent', () => {
  let component: DialogAngIndexComponent;
  let fixture: ComponentFixture<DialogAngIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAngIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAngIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

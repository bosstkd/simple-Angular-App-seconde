import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduiComponent } from './edit-produi.component';

describe('EditProduiComponent', () => {
  let component: EditProduiComponent;
  let fixture: ComponentFixture<EditProduiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProduiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProduiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

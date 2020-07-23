import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacuationListComponent } from './evacuation-list.component';

describe('EvacuationListComponent', () => {
  let component: EvacuationListComponent;
  let fixture: ComponentFixture<EvacuationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvacuationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacuationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

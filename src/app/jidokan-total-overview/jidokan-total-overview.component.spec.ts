import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JidokanTotalOverviewComponent } from './jidokan-total-overview.component';

describe('JidokanTotalOverviewComponent', () => {
  let component: JidokanTotalOverviewComponent;
  let fixture: ComponentFixture<JidokanTotalOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JidokanTotalOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JidokanTotalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

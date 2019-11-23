import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JidokanPresenceOverviewComponent } from './jidokan-presence-overview.component';

describe('JidokanPresenceOverviewComponent', () => {
  let component: JidokanPresenceOverviewComponent;
  let fixture: ComponentFixture<JidokanPresenceOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JidokanPresenceOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JidokanPresenceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JidokanContainerComponent } from './jidokan-container.component';

describe('JidokanContainerComponent', () => {
  let component: JidokanContainerComponent;
  let fixture: ComponentFixture<JidokanContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JidokanContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JidokanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

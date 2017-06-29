import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteViewComponent } from './paste-view.component';

describe('PasteViewComponent', () => {
  let component: PasteViewComponent;
  let fixture: ComponentFixture<PasteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

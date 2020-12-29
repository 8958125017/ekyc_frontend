import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkycDocumentComponent } from './ekyc-document.component';

describe('EkycDocumentComponent', () => {
  let component: EkycDocumentComponent;
  let fixture: ComponentFixture<EkycDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkycDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkycDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

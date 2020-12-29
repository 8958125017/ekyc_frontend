import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchEkycComponent } from './fetch-ekyc.component';

describe('FetchEkycComponent', () => {
  let component: FetchEkycComponent;
  let fixture: ComponentFixture<FetchEkycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchEkycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchEkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

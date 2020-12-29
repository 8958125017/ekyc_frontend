import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchkycResultComponent } from './fetchkyc-result.component';

describe('FetchkycResultComponent', () => {
  let component: FetchkycResultComponent;
  let fixture: ComponentFixture<FetchkycResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchkycResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchkycResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitrecipeComponent } from './submitrecipe.component';

describe('SubmitrecipeComponent', () => {
  let component: SubmitrecipeComponent;
  let fixture: ComponentFixture<SubmitrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitrecipeComponent]
    });
    fixture = TestBed.createComponent(SubmitrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

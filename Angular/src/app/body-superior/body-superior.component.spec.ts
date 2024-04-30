import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySuperiorComponent } from './body-superior.component';

describe('BodySuperiorComponent', () => {
  let component: BodySuperiorComponent;
  let fixture: ComponentFixture<BodySuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodySuperiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodySuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVenteSectionComponent } from './top-vente-section.component';

describe('TopVenteSectionComponent', () => {
  let component: TopVenteSectionComponent;
  let fixture: ComponentFixture<TopVenteSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopVenteSectionComponent]
    });
    fixture = TestBed.createComponent(TopVenteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

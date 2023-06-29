import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniPage } from './uni.page';

describe('UniPage', () => {
  let component: UniPage;
  let fixture: ComponentFixture<UniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaHandlesComponent } from './social-media-handles.component';

describe('SocialMediaHandlesComponent', () => {
  let component: SocialMediaHandlesComponent;
  let fixture: ComponentFixture<SocialMediaHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaHandlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

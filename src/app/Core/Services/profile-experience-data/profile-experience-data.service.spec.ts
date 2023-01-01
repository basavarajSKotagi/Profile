import { TestBed } from '@angular/core/testing';

import { ProfileExperienceDataService } from './profile-experience-data.service';

describe('ProfileExperienceDataService', () => {
  let service: ProfileExperienceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileExperienceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

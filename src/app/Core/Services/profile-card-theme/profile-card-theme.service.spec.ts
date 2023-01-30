/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileCardThemeService } from '../profile-card-theme/profile-card-theme.service';

describe('Service: ProfileCardTheme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileCardThemeService],
    });
  });

  it('should ...', inject(
    [ProfileCardThemeService],
    (service: ProfileCardThemeService) => {
      expect(service).toBeTruthy();
    }
  ));
});

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '../../Constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileCardThemeService {
  constructor() {}
  activeSection = new BehaviorSubject<string>(Constants.Summary.id);
  setSectionData(section: any) {
    this.activeSection.next(section.id);
  }
}

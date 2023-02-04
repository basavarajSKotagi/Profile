import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Constants } from '../../Constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileCardThemeService {
  constructor() {}
  defalutSelection: any = Constants.Summary;

  activeSection = new BehaviorSubject<any>({});

  setSectionData(section: any) {
    this.activeSection.next(section);
  }

  initializeSubject(): void {
    this.defalutSelection.All = false;
    this.setSectionData(this.defalutSelection);
  }
}

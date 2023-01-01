import { Injectable } from '@angular/core';
import { PersonalType } from '../../Interface/Point';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalDataService {
  pointsList: PersonalType[] = [];

  constructor() {}

  getPersonalData() {
    this.pointsList.push(
      {
        imgUrl: 'assets/images/common/smartphone_filled.png',
        text: '+91 8549860540',
      },
      {
        imgUrl: 'assets/images/common/mail.png',
        text: 'kotagi.basavaraj1@gmail.com',
      },
      {
        imgUrl: 'assets/images/common/address.png',
        text: '#83, Srinivasam Nilaya, 4th main, GDR layout, Naganathapura, Bengaluru - 560100',
      }
    );
    return of(this.pointsList);
  }
}

import { Injectable } from '@angular/core';
import { Point, PointsType } from 'src/app/Core/Interface/Point';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AcademicDataService {
  pointsList: PointsType[] = [];

  getAcademicData() {
    var summaryPoints: Point[] = [
      {
        text: 'B.E. (Information Science) from Dr. Ambedkar Institute of Technology, Bengaluru, Visvesvaraya Technological University (VTU) in 2012; secured 72.70%',
      },
      {
        text: '12th from JSSB PU College, Dharwar, Pre-University Board, Karnataka PUC) in 2008; secured 82.66%',
      },
      {
        text: '10th from VBES High School, Savanur, Karnataka Secondary Education Examination Board in 2006; secured 90.72%',
      },
    ];
    this.pointsList.push({ header: 'ACADEMIC DETAILS', items: summaryPoints });

    return of(this.pointsList);
  }
}

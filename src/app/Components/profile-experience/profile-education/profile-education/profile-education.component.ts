import { AfterContentInit, Component } from '@angular/core';
import { PointsType } from 'src/app/Core/Interface/Point';
import { AcademicDataService } from 'src/app/Core/Services/profile-academic-data/academic-data.service';
import { UnSubscribeTemplate } from 'src/app/Core/shared/unSubscribeTemplate';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile-education',
  template: `
    <ng-container *ngFor="let list of pointsList">
      <app-group-list-template
        [HeaderFont]="'fs-6 text-uppercase'"
        [header]="list.header"
        [pointsList]="list.items"
        [dividerRequired]="false"
      >
      </app-group-list-template>
    </ng-container>
  `,
  styles: [],
})
export class ProfileEducationComponent
  extends UnSubscribeTemplate
  implements AfterContentInit
{
  pointsList: PointsType[] = [];
  constructor(private academicDataService: AcademicDataService) {
    super();
  }
  ngAfterContentInit() {
    this.getAcademicData();
  }

  getAcademicData() {
    this.academicDataService
      .getAcademicData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: PointsType[]) => {
        this.pointsList = data;
      });
  }
}

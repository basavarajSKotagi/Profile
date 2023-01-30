import { AfterContentInit, Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { PointsType } from 'src/app/Core/Interface/Point';
import { UnSubscribeTemplate } from 'src/app/Core/shared/unSubscribeTemplate';
import { ProfileDataService } from 'src/app/Core/Services/profile-data/profile-data.service';

@Component({
  selector: 'app-profile-summary',
  template: ` <ng-container *ngFor="let list of pointsList">
    <app-group-list-template
      [HeaderFont]="'fs-6 text-uppercase'"
      [header]="list.header"
      [pointsList]="list.items"
      [dividerRequired]="false"
    >
    </app-group-list-template>
  </ng-container>`,
  styles: [],
})
export class ProfileSummaryComponent
  extends UnSubscribeTemplate
  implements AfterContentInit
{
  pointsList: PointsType[] = [];
  constructor(private profileDataService: ProfileDataService) {
    super();
  }
  ngAfterContentInit() {
    this.getSummayData();
  }

  getSummayData() {
    this.profileDataService
      .getSummaryData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: PointsType[]) => {
        this.pointsList = data;
      });
  }
}

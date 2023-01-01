import { Component } from '@angular/core';
import { ProjectType } from 'src/app/Core/Interface/Point';
import { ProfileExperienceDataService } from 'src/app/Core/Services/profile-experience-data/profile-experience-data.service';
import { UnSubscribeTemplate } from 'src/app/Core/shared/unSubscribeTemplate';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile-project-details',
  template: `
    <ng-container *ngFor="let list of pointsList">
      <app-group-list-template
        [dividerRequired]="false"
        [header]="list.header"
        [pointsList]="list.items"
      >
        <div>
          <span>Title: </span><span class="fw-bold">{{ list.Project }}</span>
          <span class="fst-italic fw-light" style="font-size: .7rem;">
            ({{ list.Period }})</span
          >
        </div>
        <div>Client: {{ list.Client }}</div>
        <div>Role: {{ list.Role }}</div>
        <div style="height: .7rem;"></div>
      </app-group-list-template>
    </ng-container>
  `,
  styles: [],
})
export class ProfileProjectDetailsComponent extends UnSubscribeTemplate {
  pointsList: ProjectType[] = [];
  constructor(private expDataService: ProfileExperienceDataService) {
    super();
  }
  ngAfterContentInit() {
    this.getExperienceData();
  }

  getExperienceData() {
    this.expDataService
      .getExperienceData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: ProjectType[]) => {
        this.pointsList = data;
      });
  }
}

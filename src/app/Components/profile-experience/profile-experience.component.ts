import { Component } from '@angular/core';
import { Constants } from 'src/app/Core/Constants/constants';

@Component({
  selector: 'app-profile-experience',
  template: `
    <div class="text-uppercase fs-6">{{ experience }}</div>
    <div class="fw-bold" [innerHTML]="companyName"></div>
    <hr />
    <div class="text-uppercase fs-6">{{ projectDetails }}</div>
    <div class="ms-3">
      <app-profile-project-details></app-profile-project-details>
    </div>
  `,
  styles: [``],
})
export class ProfileExperienceComponent {
  experience: string = Constants.Experience.displayName;
  companyName: string =
    '<span class="fw-light">Since Oct’12: </span><span class="ps-1"> Kantar Anlytics Practice (Formerly: Analytics Quotient Services India Private Ltd.), Bengaluru as Lead Engineer</span>';
  projectDetails: string = Constants.Projects.displayName;
}

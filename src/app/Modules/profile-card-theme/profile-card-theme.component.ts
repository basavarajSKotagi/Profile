import { Component } from '@angular/core';
import { Constants } from 'src/app/Core/Constants/constants';
import { ProfileCardThemeService } from 'src/app/Core/Services/profile-card-theme/profile-card-theme.service';

@Component({
  selector: 'app-profile-card-theme',
  template: `
    <header class="width-20 header-section h-100">
      <div class="nav-section">
        <app-slider-image class="d-none d-md-block py-3"></app-slider-image>
        <app-profile-navbar></app-profile-navbar>
      </div>
    </header>
    <main class="d-block main-section h-100">
      <section
        class="widget-section shadow  m-3 p-3 bg-body rounded"
        [id]="summary"
        [ngClass]="activeSection == summary ? '' : 'd-none'"
      >
        <app-profile-summary></app-profile-summary>
      </section>
      <section
        class="widget-section shadow  m-3 p-3 bg-body rounded"
        [id]="Experience"
        [ngClass]="activeSection == Experience ? '' : 'd-none'"
      >
        <app-profile-experience> </app-profile-experience>
      </section>
      <section
        class="widget-section shadow  m-3 p-3 bg-body rounded"
        [id]="Academic"
        [ngClass]="activeSection == Academic ? '' : 'd-none'"
      >
        <app-profile-education></app-profile-education>
      </section>
    </main>
  `,
  styles: [``],
})
export class ProfileCardThemeComponent {
  summary: string;
  Experience: string;
  Academic: String;
  activeSection: string = '';
  constructor(private profileCardThemeService: ProfileCardThemeService) {
    this.summary = Constants.Summary.id;
    this.Experience = Constants.Experience.id;
    this.Academic = Constants.Academic.id;
    this.profileCardThemeService.activeSection.subscribe((result) => {
      this.activeSection = result;
    });
  }
}

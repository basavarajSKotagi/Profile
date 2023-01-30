import { Component } from '@angular/core';
import { Constants } from 'src/app/Core/Constants/constants';
import { ProfileCardThemeService } from 'src/app/Core/Services/profile-card-theme/profile-card-theme.service';

@Component({
  selector: 'app-profile-card-theme',
  template: `
    <header class="width-20 header-section h-100">
      <div class="nav-section pt-md-3">
        <div
          class="m-auto mb-3 d-none d-md-block d-sm-none"
          style="width:8vw; height:8vw;"
        >
          <img
            style="border-radius: 50%;width:8vw; height:8vw;"
            src="assets/images/slideshow/photo_2.jpg"
            alt=""
          />
        </div>
        <app-social-media-handles
          class="d-none d-md-block d-sm-none"
        ></app-social-media-handles>
        <app-profile-navbar></app-profile-navbar>
      </div>
    </header>
    <main class="d-block main-section h-100">
      <section
        class="widget-section shadow m-3 p-3 bg-body rounded flex-column"
        [id]="summary"
        [ngClass]="activeSection == summary ? '' : 'd-none'"
      >
        <div class="position-relative">
          <h5>Basavaraj Kotagi:</h5>
          <div class="fs-8"><i>Lead Engineer</i></div>
          <hr />
          <div
            class="d-sm-block d-md-none position-absolute top-0 end-0"
            style="width:15vw; height:15vw;"
          >
            <img
              style="border-radius: 50%;width:15vw; height:15vw;"
              src="assets/images/slideshow/photo_2.jpg"
              alt=""
            />
          </div>
        </div>
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

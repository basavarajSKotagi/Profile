import { Component, OnInit } from '@angular/core';

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
        class="widget-section flex-column"
        [id]="summary"
        [ngClass]="
          activeSection.All ? '' : activeSection.id == summary ? '' : 'd-none'
        "
      >
        <div
          class="widget-shadow m-3 p-3 bg-body rounded w-100"
          [ngClass]="
            activeSection.All
              ? activeSection.id == summary
                ? 'highlight-section'
                : ''
              : ''
          "
        >
          <div class="position-relative">
            <h5>Basavaraj Kotagi:</h5>
            <div class="fs-8"><i>Lead Engineer</i></div>
            <div class="li-item"></div>
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
        </div>
      </section>
      <section
        class="widget-section  flex-column"
        [id]="Experience"
        [ngClass]="
          activeSection.All
            ? ''
            : activeSection.id == Experience
            ? ''
            : 'd-none'
        "
      >
        <div
          class="widget-shadow m-3 p-3 bg-body rounded w-100"
          [ngClass]="
            activeSection.All
              ? activeSection.id == Experience
                ? 'highlight-section'
                : ''
              : ''
          "
        >
          <app-profile-experience> </app-profile-experience>
        </div>
      </section>
      <section
        class="widget-section  flex-column"
        [id]="Academic"
        [ngClass]="
          activeSection.All ? '' : activeSection.id == Academic ? '' : 'd-none'
        "
      >
        <div
          class="widget-shadow m-3 p-3 bg-body rounded w-100"
          [ngClass]="
            activeSection.All
              ? activeSection.id == Academic
                ? 'highlight-section'
                : ''
              : ''
          "
        >
          <app-profile-education></app-profile-education>
        </div>
      </section>
    </main>
  `,
  styles: [``],
})
export class ProfileCardThemeComponent implements OnInit {
  ngOnInit(): void {
    this.profileCardThemeService.activeSection.subscribe((result) => {
      this.activeSection = result;
    });
  }
  summary: string;
  Experience: string;
  Academic: String;
  activeSection: any = [];
  constructor(private profileCardThemeService: ProfileCardThemeService) {
    this.summary = Constants.Summary.id;
    this.Experience = Constants.Experience.id;
    this.profileCardThemeService.initializeSubject();
    this.Academic = Constants.Academic.id;
  }
}

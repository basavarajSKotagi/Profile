import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderImageComponent } from './Components/slider-image/slider-image.component';
import { ProfileSummaryComponent } from './Components/profile-summary/profile-summary.component';
import { ProfileProjectDetailsComponent } from './Components/profile-experience/profile-project-details/profile-project-details.component';
import { ProfileComponent } from './Modules/profile/profile.component';
import { ProfileExperienceComponent } from './Components/profile-experience/profile-experience.component';
import { GroupListTemplateComponent } from './Components/shared/group-list-template/group-list-template.component';
import { ProfileEducationComponent } from './Components/profile-experience/profile-education/profile-education/profile-education.component';
import { ProfileCardThemeComponent } from './Modules/profile-card-theme/profile-card-theme.component';
import { ProfileNavbarComponent } from './Components/profile-navbar/profile-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SliderImageComponent,
    ProfileSummaryComponent,
    ProfileProjectDetailsComponent,
    ProfileExperienceComponent,
    GroupListTemplateComponent,
    ProfileEducationComponent,
    ProfileCardThemeComponent,
    ProfileNavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
})
export class AppModule {}

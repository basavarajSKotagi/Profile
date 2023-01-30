import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardThemeComponent } from './Modules/profile-card-theme/profile-card-theme.component';
import { ProfileComponent } from './Modules/profile/profile.component';

const routes: Routes = [
  {
    path: 'ProfileDetailedView',
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'Profile',
    component: ProfileCardThemeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: ProfileCardThemeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ProfileCardThemeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/Core/Constants/constants';
import { ProfileCardThemeService } from 'src/app/Core/Services/profile-card-theme/profile-card-theme.service';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css'],
})
export class ProfileNavbarComponent implements OnInit {
  ConstantList: any = [];

  constructor(private profileCardThemeService: ProfileCardThemeService) {}

  ngOnInit() {
    this.ConstantList.push({ ...Constants.Summary, active: true });
    this.ConstantList.push({ ...Constants.Experience, active: false });
    this.ConstantList.push({ ...Constants.Academic, active: false });
  }

  displaySection(section: any) {
    this.ConstantList.map(function (value: any) {
      if (value.id === section.id) value.active = true;
      else value.active = false;
    });
    this.profileCardThemeService.setSectionData(section);
  }
}

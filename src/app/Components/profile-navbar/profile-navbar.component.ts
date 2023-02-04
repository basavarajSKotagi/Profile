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
  showAllScetions: boolean = false;
  currectSection: any = [];
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

    let data = section;
    data.All = this.showAllScetions;
    this.currectSection = data;
    this.profileCardThemeService.setSectionData(data);
  }

  displayAllSection() {
    this.showAllScetions = !this.showAllScetions;
    let data = this.ConstantList[0];
    data.All = this.showAllScetions;
    this.displaySection(data);
  }
}

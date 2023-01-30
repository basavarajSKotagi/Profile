import { Component, AfterContentInit } from '@angular/core';
import { PersonalDataService } from 'src/app/Core/Services/profile-persoan-data/personal-data.service';
import { takeUntil } from 'rxjs';
import { PersonalType } from 'src/app/Core/Interface/Point';
import { UnSubscribeTemplate } from 'src/app/Core/shared/unSubscribeTemplate';

@Component({
  selector: 'app-profile',
  template: `
    <div
      class="row h-100 d-flex flex-row justify-content-center cl-profile ms-md-5 me-md-5 ms-sm-1 me-sm-1"
    >
      <div
        class="col-md-4 pt-md-3 pt-sm-2 bg-color section-left"
        style="min-height: 100vh;"
      >
        <div class="d-flex flex-row">
          <div style="width:10vw;margin:auto 1vw;">
            <app-slider-image></app-slider-image>
          </div>
          <div style="width:calc(100% - 12vw)">
            <div class="text-uppercase fs-6 fw-bold">{{ name }}</div>
            <div style="height: .7rem;"></div>
            <div>
              <ng-container *ngFor="let perData of personalData">
                <div class="d-flex" style="min-height: 1.4rem;">
                  <img [src]="perData.imgUrl" class="img-fluid img-prop" />
                  <span
                    class="ps-2 text-break"
                    [innerHTML]="perData.text"
                  ></span>
                </div>
              </ng-container>
            </div>
          </div>
        </div>
        <app-profile-summary></app-profile-summary>
      </div>
      <div
        class="col-md-8 pt-md-3  pt-sm-2 section-right"
        style="min-height: 100vh;"
      >
        <app-profile-experience> </app-profile-experience>
        <app-profile-education></app-profile-education>
      </div>
    </div>
  `,
  styles: [
    `
      .bg-color {
        /* background: linear-gradient(0deg, #522db8 0%, #1c7ce0 100%); */
        background: #22405c;
        color: white;
      }

      .img-prop {
        width: 1vw;
        height: 1vw;
        min-height: 1rem;
        min-width: 1rem;
      }
    `,
  ],
})
export class ProfileComponent
  extends UnSubscribeTemplate
  implements AfterContentInit
{
  name: string = 'Basavaraj Kotagi';
  personalData: PersonalType[] = [];

  constructor(private personalDataService: PersonalDataService) {
    super();
  }
  ngAfterContentInit() {
    this.getPersonalData();
  }

  getPersonalData() {
    this.personalDataService
      .getPersonalData()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: PersonalType[]) => {
        this.personalData = data;
      });
  }
}

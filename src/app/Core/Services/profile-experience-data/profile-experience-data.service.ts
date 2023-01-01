import { Injectable } from '@angular/core';
import { Point, ProjectType } from 'src/app/Core/Interface/Point';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileExperienceDataService {
  pointsList: ProjectType[] = [];
  getExperienceData() {
    var project1: Point[] = [
      {
        text: 'Accountable for developing web application using Angular and Asp.net Core',
      },
      {
        text: 'Communicating to different stakeholders for defect management, providing solutions and guiding with the correct analytical approach for faster resolution/conclusion',
      },
      {
        text: 'Guiding team of 7 person',
      },
    ];
    this.pointsList.push({
      Project: 'Hair Demand Space',
      Period: 'Since June 2021',
      Client: 'A leading global consumer goods company',
      Role: 'Lead Engineer',
      Tech: 'Angular 14, .Net 6, SQL Server, Azure Devops, Azure Services',
      header: 'Key Result Areas:',
      items: project1,
    });

    this.pointsList.push({
      Project: 'Advantage',
      Period: 'May 2020 - June 2021',
      Client: 'A leading global consumer goods company',
      Role: 'Senior Software Engineer',
      Tech: 'Angular 8, .Net core 3.1, SQL Server, Tortoise SVN, Azure Services',
      header: '',
      items: [],
    });

    this.pointsList.push({
      Project: 'Package Visualization',
      Period: 'January 2019 - May 2020',
      Client: 'A leading global consumer goods company',
      Role: 'Senior Software Engineer',
      Tech: '.Net MVC, SQL Server, Tortoise SVN',
      header: '',
      items: [],
    });

    this.pointsList.push({
      Project:
        'Consumer Tracking Dashboard, Beverages Habits and Experiences Dashboard, Hair Habits and Experiences Portal and more',
      Period: 'December 2012 - December 2018',
      Client:
        'Education services start-up, A leading global consumer goods company',
      Role: 'Software Engineer',
      Tech: '.Net MVC, ASP .NET 4.5, SQL Server, Tortoise SVN',
      header: '',
      items: [],
    });

    return of(this.pointsList);
  }
}

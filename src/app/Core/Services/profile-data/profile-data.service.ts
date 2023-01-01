import { Injectable } from '@angular/core';
import { Point, PointsType } from 'src/app/Core/Interface/Point';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  pointsList: PointsType[] = [];

  getSummaryData() {
    var summaryPoints: Point[] = [
      {
        text: 'Over <strong>10+ years</strong> of experience in Project Execution, Software Development, Software Testing and Implementation using .NET and Angular related frameworks',
      },
      {
        text: 'Experience in <strong>ASP.Net MVC, Angular 8+, WEB API, .Net Core</strong>, JavaScript, jQuery, HTML, CSS, <strong>SQL Server, Azure Offerings</strong>',
      },
      {
        text: 'Well versed in <strong>Design Patterns, SOLID Principles</strong>. Awareness of cross-browser compatibility issues and client-side performance considerations',
      },
    ];
    this.pointsList.push({ header: 'Summary', items: summaryPoints });

    var SkillPoints: Point[] = [
      {
        text: 'Angular 8+, C#.NET MVC, .Net Core',
      },
      {
        text: 'HTML, JavaScript/jQuery, Type Script, CSS 3',
      },
      {
        text: 'SQL Server, Azure',
      },
      {
        text: 'Azure DevOps, GitHub and TortoiseSVN',
      },
    ];

    this.pointsList.push({ header: 'Skills', items: SkillPoints });

    return of(this.pointsList);
  }
}

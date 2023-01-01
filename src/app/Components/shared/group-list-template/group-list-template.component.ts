import { Component, Input, OnInit } from '@angular/core';
import { Point } from 'src/app/Core/Interface/Point';

@Component({
  selector: 'app-group-list-template',
  template: `
    <hr *ngIf="dividerRequired" />
    <ng-content></ng-content>
    <ng-container *ngIf="header.length">
      <div class="{{ HeaderFont }}" [innerHTML]="header"></div>
    </ng-container>
    <ng-container *ngIf="pointsList.length">
      <ul>
        <li *ngFor="let point of pointsList" [innerHTML]="point.text"></li>
      </ul>
    </ng-container>
  `,
  styles: [],
})
export class GroupListTemplateComponent implements OnInit {
  @Input() pointsList: Point[] = [];
  @Input() header: string = '';
  @Input() HeaderFont?: string = '';
  @Input() dividerRequired?: boolean = true;
  ngOnInit(): void {}
}

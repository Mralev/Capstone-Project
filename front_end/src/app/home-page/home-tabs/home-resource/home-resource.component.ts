import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {CollapseComponent} from 'angular-bootstrap-md';

@Component({
  selector: 'app-home-resource',
  templateUrl: './home-resource.component.html',
  styleUrls: ['./home-resource.component.scss']
})
export class HomeResourceComponent implements OnInit, AfterViewInit {

  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  isAdmin;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.collapses.forEach((collapse: CollapseComponent) => {
        collapse.toggle();
      });
    });
  }
}

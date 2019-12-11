import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-comp-header-one',
  templateUrl: './header-one.component.html',
})
export class HeaderOneComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.isOpen = !this.isOpen;
  }

}

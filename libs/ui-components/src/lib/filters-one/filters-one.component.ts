import { Component } from '@angular/core';

@Component({
  selector: 'ui-comp-filters-one',
  templateUrl: './filters-one.component.html',
})
export class FiltersOneComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}

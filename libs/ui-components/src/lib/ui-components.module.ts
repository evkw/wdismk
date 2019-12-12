import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from './header-one/header-one.component';
import { FiltersOneComponent } from './filters-one/filters-one.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderOneComponent, FiltersOneComponent],
  exports: [HeaderOneComponent, FiltersOneComponent],
})
export class UiComponentsModule {}

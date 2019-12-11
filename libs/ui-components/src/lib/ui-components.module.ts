import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from './header-one/header-one.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderOneComponent],
  exports: [HeaderOneComponent],
})
export class UiComponentsModule {}

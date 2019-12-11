import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMapboxGLModule, MAPBOX_API_KEY } from 'ngx-mapbox-gl';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [CommonModule, NgxMapboxGLModule],
  declarations: [MapComponent],
  exports: [MapComponent],
})
export class MapboxModule {
  static forRoot(accessToken): ModuleWithProviders {
    console.log(accessToken);
    return {
      ngModule: MapboxModule,
      providers: [{provide: MAPBOX_API_KEY, useValue: accessToken}]
    }
  }
}

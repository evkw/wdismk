import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MapboxModule} from '@evan-dev/mapbox';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MapboxModule.forRoot(environment.mapbox.accessToken)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

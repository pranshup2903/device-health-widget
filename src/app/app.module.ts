import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeviceHealthComponent } from './device-health/device-health.component';
import { TestComponentComponent } from './components/test-component/test-component.component';


@NgModule({
  declarations: [AppComponent, DeviceHealthComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

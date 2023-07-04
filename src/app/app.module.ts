import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MyService } from './my.service';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MyService],
  bootstrap: [AppComponent],
})
export class AppModule {}

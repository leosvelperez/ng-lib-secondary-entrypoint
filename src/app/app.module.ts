import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from 'lib1';
import { FeatureModule } from 'lib1/feature';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib1Module, FeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

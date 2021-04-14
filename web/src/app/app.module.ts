import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { MainModule } from './main/main.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, LayoutsModule, MainModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

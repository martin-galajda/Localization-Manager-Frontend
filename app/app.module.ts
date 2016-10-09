import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProjectDetailComponent } from './js/components/project-detail.component';
import { ProjectListComponent } from './js/components/project-list.component';
import { ProjectEditComponent } from './js/components/project-edit.component';
import { ProjectFetcherService } from './js/services/project-fetcher.service';
import { FilterPipe } from './js/filters/filter.pipe';

import { routing } from './app.routing';

@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	declarations: [
		AppComponent,
		ProjectDetailComponent,
		ProjectListComponent,
		ProjectEditComponent,
		FilterPipe
	],
	providers: [
		ProjectFetcherService
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }

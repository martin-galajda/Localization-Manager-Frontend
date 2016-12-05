import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { AppComponent }				from './app.component';
import { FormsModule } 				from '@angular/forms';
import {HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy}    from '@angular/http';

import { ProjectDetailComponent } 	from './js/components/project-detail.component';
import { ProjectListComponent } 	from './js/components/project-list.component';
import { ProjectEditComponent } 	from './js/components/project-edit.component';
import { ProjectAddComponent } 		from './js/components/project-add.component';
import { SignInModalComponent } 	from './js/components/sign-in-modal.component';
import { LoginComponent } 			from "./js/components/login.component";

import { FilterPipe } 				from './js/filters/filter.pipe';

import { routing } 					from './app.routing';

import { AuthService } 				from "./js/services/auth.service";
import { ProjectFetcherService } 	from './js/services/project-fetcher.service';
import { AuthGuard } 				from "./js/services/auth-guard.service";


@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		routing
	],
	declarations: [
		AppComponent,
		ProjectDetailComponent,
		ProjectListComponent,
		ProjectEditComponent,
		ProjectAddComponent,
		SignInModalComponent,
		LoginComponent,
		FilterPipe
	],
	providers: [
		ProjectFetcherService,
		AuthService,
		AuthGuard,
		{
			provide: XSRFStrategy,
			useValue: new CookieXSRFStrategy('csrfToken', 'X-CSRFToken')
		}
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }

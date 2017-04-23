import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { AppComponent }				from './app.component';
import { FormsModule } 				from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy, RequestOptions } from '@angular/http';
import { InfiniteScrollModule } from "angular2-infinite-scroll";

import { ProjectDetailComponent } 	from './js/components/project-detail.component';
import { ProjectListComponent } 	from './js/components/project-list.component';
import { ProjectEditComponent } 	from './js/components/project-edit.component';
import { ProjectAddComponent } 		from './js/components/project-add.component';
import { LoginComponent } 			from "./js/components/login.component";
import { UserListComponent } 			from "./js/components/user-list.component";
import { ConverterListComponent } 			from "./js/components/converters-list.component";
import { ConverterAddComponent } 			from "./js/components/converter-add.component";
import { ConverterDetailComponent } 			from "./js/components/converter-detail.component";
import { ConverterEditComponent } 			from "./js/components/converter-edit.component";
import { SignInBoxComponent } from "./js/components/sign-in-box.component";
import { HistoryPanelComponent } from "./js/components/history-panel.component";
import { NotConfirmedComponent } from "./js/components/not-confirmed.component";

import { FilterPipe } 				from './js/filters/filter.pipe';

import { routing } 					from './app.routing';

import { AuthService } 				from "./js/services/auth.service";
import { ProjectFetcherService } 	from './js/services/project-fetcher.service';
import { AuthGuard } 				from "./js/services/auth-guard.service";
import { ConverterService } 				from "./js/services/converter.service";
import { UserService } 				from "./js/services/user.service";
import { AdminGuard } from "./js/services/admin-guard.service";
import { CustomRequestOptions } from "./js/CustomRequestOptions";

const cookieStrategyFactory = () => {
	return new CookieXSRFStrategy('PLAY_SESSION', 'X-Requested-With');
};

@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		HttpModule,
		JsonpModule,
		routing,
		InfiniteScrollModule
	],
	declarations: [
		AppComponent,
		ProjectDetailComponent,
		ProjectListComponent,
		ProjectEditComponent,
		ProjectAddComponent,
		ConverterListComponent,
		ConverterAddComponent,
		ConverterDetailComponent,
		ConverterEditComponent,
		LoginComponent,
		UserListComponent,
		FilterPipe,
		SignInBoxComponent,
		HistoryPanelComponent,
		NotConfirmedComponent
	],
	providers: [
		ProjectFetcherService,
		AuthService,
		ConverterService,
		UserService,
		AuthGuard,
		AdminGuard,
		{
			provide: XSRFStrategy,
			useValue: cookieStrategyFactory()
		},
		{
			provide: RequestOptions,
			useClass: CustomRequestOptions
		}
	],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }

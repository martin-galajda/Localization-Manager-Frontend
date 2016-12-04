import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './js/components/project-detail.component';
import { ProjectListComponent } from './js/components/project-list.component';
import { ProjectEditComponent } from './js/components/project-edit.component';
import { ProjectAddComponent } from './js/components/project-add.component';
import {AuthGuard} from "./js/services/auth-guard.service";
import {LoginComponent} from "./js/components/login.component";

const appRoutes: Routes = [
	{
		path: 'project-list',
		canActivate: [AuthGuard],
		component: ProjectListComponent
	},
	{
		path: 'project/detail/:id',
		canActivate: [AuthGuard],
		component: ProjectDetailComponent
	},
	{
		path: 'project/add',
		canActivate: [AuthGuard],
		component: ProjectAddComponent
	},
	{
		path: '',
		redirectTo: '/project-list',
		pathMatch: 'full'
	},
	{
		path: 'login',
		pathMatch: 'full',
		component: LoginComponent
	},
	{
		path: 'project/edit/:id',
		canActivate: [AuthGuard],
		component: ProjectEditComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

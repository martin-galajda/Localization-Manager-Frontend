import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './js/components/project-detail.component';
import { ProjectListComponent } from './js/components/project-list.component';
import { ProjectEditComponent } from './js/components/project-edit.component';
import { ProjectAddComponent } from './js/components/project-add.component';
import { ConverterListComponent } from './js/components/converters-list.component';
import { ConverterAddComponent } from './js/components/converter-add.component';
import { AuthGuard } from "./js/services/auth-guard.service";
import { LoginComponent } from "./js/components/login.component";
import { UserListComponent } from "./js/components/user-list.component";
import { ConverterDetailComponent } from "./js/components/converter-detail.component";
import { ConverterEditComponent } from "./js/components/converter-edit.component";
import {AdminGuard} from "./js/services/admin-guard.service";

const appRoutes: Routes = [
	{
		path: 'project-list',
		canActivate: [AuthGuard],
		component: ProjectListComponent
	},
	{
		path: 'converter-list',
		canActivate: [AuthGuard],
		component: ConverterListComponent
	},
	{
		path: 'converter/add',
		canActivate: [AuthGuard],
		component: ConverterAddComponent
	},
	{
		path: 'converter/detail/:id',
		canActivate: [AuthGuard],
		component: ConverterDetailComponent
	},
	{
		path: 'converter/edit/:id',
		canActivate: [AuthGuard],
		component: ConverterEditComponent
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
		path: 'user-list',
		canActivate: [AdminGuard],
		component: UserListComponent
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
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

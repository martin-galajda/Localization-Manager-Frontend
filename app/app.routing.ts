import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailComponent } from './js/components/project-detail.component';
import { ProjectListComponent } from './js/components/project-list.component';
import { ProjectEditComponent } from './js/components/project-edit.component';

const appRoutes: Routes = [
	{
		path: 'project-list',
		component: ProjectListComponent
	},
	{
		path: 'project/detail/:id',
		component: ProjectDetailComponent
	},
	{
		path: '',
		redirectTo: '/project-list',
		pathMatch: 'full'
	},
	{
		path: 'project/edit/:id',
		component: ProjectEditComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
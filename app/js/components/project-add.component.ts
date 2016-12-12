import { Project } from '../model/entity/Project';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
@Component({
	selector: 'project-add',
	templateUrl: 'app/view/project-add.component.html'
})

export class ProjectAddComponent
{
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private projectService: ProjectFetcherService)
		{
			this.model = new Project();
		}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	addProject(): void {
		this.projectService.addProject(this.model).subscribe(project => this.model = project,
		error => console.log(error));
	}

	model: Project;
	formats = [
		{id: 'XML', name:'XML'},
		{id: 'JSON', name:'JSON'},
		{id: 'CSV', name:'CSV'},
		{id: 'po', name:'po'}
		];
	disabled: boolean = false;
}

import { Project } from '../model/entity/Project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';

@Component({
	selector: 'project-edit',
	templateUrl: 'app/view/project-edit.component.html'
})

export class ProjectEditComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private route: ActivatedRoute,
		private router: Router) {

	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = params['id'];
			this.projectFetcher.getProject(id)
				.then(project => this.model = project);
		});
	}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	model: Project = null;
	title: "Web application for management of localization resources.";
}

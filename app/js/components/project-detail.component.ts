import { Project } from '../model/entity/Project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';

@Component({
	selector: 'project-detail',
	templateUrl: 'app/view/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private route: ActivatedRoute,
		private router: Router) {

	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.projectFetcher.getProject(id)
				.then(project => this.project = project);
		});
	}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	edit(): void {
		this.router.navigate(['project/edit', this.project.id])
	}

	project: Project = null;
	title: "Web application for management of localization resources.";
}

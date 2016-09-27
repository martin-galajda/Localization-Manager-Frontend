import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import { Project } from '../model/entity/Project';
import { FilterPipe } from '../filters/filter.pipe';

@Component({
	selector: 'project-list',
	templateUrl: 'app/view/project-list.component.html'
})

export class ProjectListComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private router: Router) {
	}

	ngOnInit(): void {
		this.projects = [];
		this.getProjects();
	}

	getProjects(): void {
		this.projectFetcher.getProjects().then(projects => this.projects = projects);
	}

	goToDetail(project: Project): void {
		let link = ['/project/detail', project.id];
		this.router.navigate(link);
	}

	projects: Project[];
	query: string;
	title: "Web application for management of localization resources.";
}

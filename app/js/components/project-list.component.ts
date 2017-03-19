import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import { Project } from '../model/entity/Project';
import { FilterPipe } from '../filters/filter.pipe';

@Component({
	moduleId: __filename,
	selector: 'project-list',
	templateUrl: '../../view/project-list.component.html',
	styleUrls: ['../../styles/project-list.component.css']
})

export class ProjectListComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private router: Router) {
	}

	ngOnInit(): void {
		this.showSignInModal = false;
		this.projects = [];
		this.getProjects();
	}

	getProjects(): void {
		this.projectFetcher.getProjects().subscribe(projects => this.projects = projects,
			error => console.log(error)
		);
	}

	goToDetail(project: Project): void {
		let link = ['/project/detail', project.id];
		this.router.navigate(link);
	}

	goToAddNewProject(): void {
		let link = ['/project/add'];
		this.router.navigate(link);
	}

	getReadableProjectStatus(status: Number): string {
		switch (status) {
			case 1:
				return "In progress";
			case 2:
				return "Completed"
			default:
				return "None"
		}
	}

	showSignInModal: boolean;
	projects: Project[];
	query: string = '';
}

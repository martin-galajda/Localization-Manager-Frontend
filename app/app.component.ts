import { Component, OnInit } from '@angular/core';
import { User } from './js/model/entity/User';
import { Project } from './js/model/entity/Project';
import { ProjectDetailComponent } from './js/components/project-detail.component';
import { ProjectListComponent } from './js/components/project-list.component'
import { ProjectFetcherService } from './js/services/project-fetcher.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/view/layout.html'
})

export class AppComponent implements OnInit {
	constructor(private projectFetcherService: ProjectFetcherService) {}

	ngOnInit(): void {
		this.getProjects();
	}

	getProjects(): void {
		this.projectFetcherService.getProjects().subscribe(projects => this.projects = projects);
	}

	getSelectedProject(): Project {
		if (this.projects && this.projects[0]) {
			return this.projects[0];
		} else {
			return null;
		}
	}

	openSignInModal(): void {
		this.showSignInModal = true;
		console.log(this);
	}

	showSignInModal: boolean = false;
	title = 'Web application for managing localization resources.';
	version = 'Prototype';
	projects: Project[] = [];
}

import { Component, OnInit } from '@angular/core';
import { User } from './js/model/entity/User';
import { Project } from './js/model/entity/Project';
import { ProjectDetailComponent } from './js/components/project-detail.component';
import { ProjectListComponent } from './js/components/project-list.component'
import { ProjectFetcherService } from './js/services/project-fetcher.service';
import {Router} from "@angular/router";
import {AuthService} from "./js/services/auth.service";
import 'rxjs/Rx';

@Component({
	selector: 'my-app',
	templateUrl: 'app/view/layout.html'
})

export class AppComponent implements OnInit {
	constructor(private projectFetcherService: ProjectFetcherService, private router: Router, private authService: AuthService) {}

	ngOnInit(): void {
		this.getLoggedUser();
	}

	getLoggedUser(): void {
		this.authService.getLoggedUser().subscribe(user => {
			this.loggedUser = user;
		});
	}


	getSelectedProject(): Project {
		if (this.projects && this.projects[0]) {
			return this.projects[0];
		} else {
			return null;
		}
	}

	openSignInModal(): void {
		this.router.navigate(['/login']);
	}

	showSignInModal: boolean = false;
	title = 'Web application for managing localization resources.';
	version = 'Prototype';
	loggedUser: User = null;
	projects: Project[] = [];
}

import { Injectable } from '@angular/core';
import { Project } from '../model/entity/Project';
import { PROJECTS } from '../mock/mock-projects';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

let url = 'https://private-48ddb2-prototyp.apiary-mock.com/projects';

@Injectable()
export class ProjectFetcherService {
	constructor(private http: Http) { }

	getProjects(): Promise<Project[]> {
		return this.http.get(url).toPromise().then(response => response.json().data as Project[])
			.catch(this.handleError)
	}

	getProject(id: number): Promise<Project> {
		return this.getProjects().then(projects => projects.find(project => project.id === id));
	}

	handleError(response: any) {
		console.log('error', response);
	}
}

import { Injectable } from '@angular/core';
import { Project } from '../model/entity/Project';
import { PROJECTS } from '../mock/mock-projects';
import { Headers, Http } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectFetcherService {
	constructor(private http: Http) { }

	getProjects(): Promise<Project[]> {
		return this.http.get(AppConfig.GET_PROJECTS_API_ENDPOINT).toPromise().then(response => {
			console.log(response.json());
			return response.json() as Project[];
		})
			.catch(this.handleError)
	}

	getProject(id: number): Promise<Project> {
		return this.getProjects().then(projects => projects.find(project => project.id === id));
	}

	handleError(response: any) {
		console.log('error', response);
	}
}

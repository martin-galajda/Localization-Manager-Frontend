import { Injectable } from '@angular/core';
import { Project } from '../model/entity/Project';
import { PROJECTS } from '../mock/mock-projects';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';

import 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectFetcherService {
	constructor(private http: Http) { }

	getProjects(): Observable<Project[]> {
		return this.http.get(AppConfig.GET_PROJECTS_API_ENDPOINT)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getProject(id: string): Observable<Project> {
		return this.getProjects().map(projects => projects.find(project => project.id === id));
	}

	deleteProject(id: string): Observable<any> {
		return this.http.delete(AppConfig.DELETE_PROJECT_API_ENDPOINT + '/' + id)
			.map(res => res.json());
	}

	addProject(project: Project): Observable<Project> {
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});

		return this.http.post(AppConfig.POST_PROJECTS_API_ENDPOINT, project, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || { };
	}

	private handleError(response: any) {
		console.log('error', response);

		return Observable.throw('error');
	}
}

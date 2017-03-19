import { Injectable } from '@angular/core';
import { Project } from '../model/entity/Project';
import { PROJECTS } from '../mock/mock-projects';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { AppConfig } from '../Constants/AppConfig';

import 'rxjs/Rx';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Observable } from 'rxjs/Observable';
import { ProjectHistory } from "../model/entity/ProjectHistory";
import { FieldChange } from "../model/FieldChange";

@Injectable()
export class ProjectFetcherService {
	constructor(private http: Http) {}

	getProjects(): Observable<Project[]> {
		this.http.get(AppConfig.GET_PROJECTS_API_ENDPOINT)
			.map(this.extractData)
			.catch(this.handleError)
			.subscribe(this.updateDataSource.bind(this));


		return this.dataSource.asObservable();
	}

	updateDataSource(projects: Project[]) {
		this.dataSource.next(projects);
	}

	getProject(id: string): Observable<Project> {
		return this.getProjects().map(projects => projects.find(project => project.id === id));
	}

	deleteProject(id: string): Observable<any> {
		return this.http.delete(AppConfig.DELETE_PROJECT_API_ENDPOINT + '/' + id);
	}

	addProject(project: Project): Observable<Project> {
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers, withCredentials: true});

		return this.http.post(AppConfig.POST_PROJECTS_API_ENDPOINT, project, options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getProjectHistory(projectId: string, lastLoadedId: string): Observable<Array<ProjectHistory>> {

		let url = AppConfig.GET_PROJECT_HISTORY_API_ENDPOINT + "/" + projectId + "?limit=6";

		if (lastLoadedId !== null) {
			url += "&endAtId=" + lastLoadedId;
		}

		return this.http.get(url, null)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response): any {
		let body = res.json();
		return body || { };
	}

	private handleError(response: any) {
		console.log('error', response);

		return Observable.throw('error');
	}

	dataSource: ReplaySubject<Project[]> = new ReplaySubject<Project[]>(2);;
}

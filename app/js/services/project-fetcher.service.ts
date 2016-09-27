import { Injectable } from '@angular/core';
import { Project } from '../model/entity/Project';
import { PROJECTS } from '../mock/mock-projects';

@Injectable()
export class ProjectFetcherService {
	getProjects(): Promise<Project[]> {
		return Promise.resolve(PROJECTS);
	}

	getProject(id: number): Promise<Project> {
		return this.getProjects().then(projects => projects.find(project => project.id === id));
	}
}

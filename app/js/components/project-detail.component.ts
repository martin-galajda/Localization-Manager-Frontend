import { Project } from '../model/entity/Project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import {FieldChange} from "../model/FieldChange";
import {Observable} from "rxjs";
import {ProjectHistory} from "../model/entity/ProjectHistory";

@Component({
	moduleId: module.id,
	selector: 'project-detail',
	templateUrl: '../../view/project-detail.component.html',
	styleUrls: ['../../styles/detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private route: ActivatedRoute,
		private router: Router) {

	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = params['id'];
			this.projectFetcher.getProject(id)
				.subscribe(project => this.project = project);
		});
	}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	edit(): void {
		this.router.navigate(['project/edit', this.project.id])
	}

	delete(): void {
		this.projectFetcher.deleteProject(this.project.id).subscribe(res => {
			console.log(res);
			this.router.navigate(['project-list']);
		});
	}

	computeChangedValuesForProject(lastLoadedId: string): Observable<Array<ProjectHistory>> {
		return this.projectFetcher.getProjectHistory(this.project.id, lastLoadedId);
	}

	project: Project = null;
	computeChangedValues = this.computeChangedValuesForProject.bind(this);
}

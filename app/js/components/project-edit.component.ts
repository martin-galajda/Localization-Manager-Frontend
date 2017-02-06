import { Project } from '../model/entity/Project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';

@Component({
	selector: 'project-edit',
	templateUrl: 'app/view/project-edit.component.html'
})

export class ProjectEditComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private route: ActivatedRoute,
		private router: Router) {

	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = params['id'];
			this.id = id;
			this.projectFetcher.getProject(id)
				.subscribe(project => this.model = project);
		});
	}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	addBranch(): void {
		this.model.branches.push(this.tmpBranchesInput);
		this.tmpBranchesInput = "";
	}

	removeBranch(i : number): void {
		this.model.branches.splice(i, 1);
	}

	updateProject(): void {
		this.projectFetcher
			.addProject(this.model)
			.subscribe(
				() => this.router.navigate(['project/detail', this.id]),
				(err) => console.log(err)
			);
	}

	model: Project = null;
	tmpBranchesInput: string = "";
	id: string;
}

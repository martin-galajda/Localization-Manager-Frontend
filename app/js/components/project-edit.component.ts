import { Project } from '../model/entity/Project';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import { UserService } from "../services/user.service";
import { User } from "../model/entity/User";
import { Converter } from "../model/entity/Converter";
import { ConverterService } from "../services/converter.service";

@Component({
	moduleId: __filename,
	selector: 'project-edit',
	templateUrl: '../../view/project-edit.component.html',
	styleUrls: ['../../styles/form.component.css']
})

export class ProjectEditComponent implements OnInit {
	constructor(
		private projectFetcher: ProjectFetcherService,
		private route: ActivatedRoute,
		private router: Router,
		private userService: UserService,
		private converterService: ConverterService
	) {

	}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = params['id'];
			this.id = id;
			this.getProject(id);
		});
		this.getUsers();
		this.getConverters();
	}

	getProject(projectId: string): void {
		this.projectFetcher
			.getProject(projectId)
			.subscribe(project => {
				if (project) {
					this.model = project;
					this.model.branches = this.model.branches ? this.model.branches : [];
					this.selectedUser = project.assignee ? project.assignee.name : null;
					this.selectedConverter = project.converter ? project.converter.name : null;
				}
			});
	}

	getConverters(): void {
		this.converterService.getConverters().subscribe(
			converters => {
				this.assignableConverters = converters;
			},
			() => {
				throw "Error fetching converters";
			}
		)
	}

	getUsers(): void {
		this.userService
			.getUsers()
			.subscribe(users => {
				this.assignableUsers = users.filter(user => user.isAssignable);
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

		if (!this.updating) {
			this.updating = true;
			this.projectFetcher
				.addProject(this.model)
				.subscribe(
					() => {
						this.router.navigate(['project/detail', this.id]);
					},
					(err) => {
						this.updating = false;
						console.log(err)
					}
				);
		}

	}

	onAssigneeSelected(id: string): void {
		this.model.assignee = this.assignableUsers.find(user => user.id === id);
		this.selectedUser = this.model.assignee.name;
	}

	onConverterSelected(converterId : string): void {
		this.model.converter = this.assignableConverters.find(converter => converter.id === converterId);
	}

	model: Project = null;
	tmpBranchesInput: string = "";
	id: string;
	assignableUsers: User[] = [];
	selectedUser: string = null;
	selectedConverter: string = null;
	updating: boolean = false;
	assignableConverters: Converter[] = [];
}

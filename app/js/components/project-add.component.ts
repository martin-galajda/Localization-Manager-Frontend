import { Project } from '../model/entity/Project';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import { UserService } from "../services/user.service";
import { User } from "../model/entity/User";
import { ConverterService } from "../services/converter.service";
import {Converter} from "../model/entity/Converter";
@Component({
	moduleId: module.id,
	selector: 'project-add',
	templateUrl: '../../view/project-add.component.html',
	styleUrls: ['../../styles/form.component.css']
})

export class ProjectAddComponent implements OnInit
{

	constructor
	(
		private router: Router,
		private userService: UserService,
		private projectService: ProjectFetcherService,
		private converterService: ConverterService
	)
	{
		this.model = new Project();
	}


	ngOnInit(): void {
		this.userService.getUsers().subscribe(
			users => this.assignableUsers = users.filter(user => user.isAssignable),
			err	  => console.log(err)
		);

		this.converterService.getConverters().subscribe(
			converters => this.assignableConverters = converters,
			() => {
				throw "Error fetching converters";
			}
		)
	}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	addProject(): void {
		this.projectService.addProject(this.model).subscribe(project => this.router.navigate(['project/detail', project.id]),
		error => console.log(error));
	}

	addBranch(): void {
		this.model.branches.push(this.tmpBranchesInput);
		this.tmpBranchesInput = "";
	}

	removeBranch(i : number): void {
		this.model.branches.splice(i, 1);
	}

	onAssigneeSelected(userId : string): void {
		this.model.assignee = this.assignableUsers.find(user => user.id === userId);
	}

	onConverterSelected(converterId : string): void {
		this.model.converter = this.assignableConverters.find(converter => converter.id === converterId);
	}

	model: Project;
	formats = [
		{id: 'XML', name:'XML'},
		{id: 'JSON', name:'JSON'},
		{id: 'CSV', name:'CSV'},
		{id: 'po', name:'po'}
		];
	disabled: boolean = false;
	tmpBranchesInput: string;
	assignableUsers: User[] = [];
	assignableConverters: Converter[] = [];
}

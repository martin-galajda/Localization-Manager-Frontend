import { Project } from '../model/entity/Project';
import {Component, OnInit, AfterViewChecked, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import { UserService } from "../services/user.service";
import { User } from "../model/entity/User";
import { ConverterService } from "../services/converter.service";
import {Converter} from "../model/entity/Converter";
import {NgForm} from "@angular/forms";

@Component({
	moduleId: __filename,
	selector: 'project-add',
	templateUrl: '../../view/project-add.component.html',
	styleUrls: ['../../styles/form.component.css']
})

export class ProjectAddComponent implements OnInit, AfterViewChecked
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

	@ViewChild('projectForm') currentForm: NgForm;

	ngAfterViewChecked() {
		this.formChanged();
	}

	formChanged() {
		this.projectForm = this.currentForm;
		if (this.projectForm) {
			this.projectForm
				.valueChanges
				.subscribe(data => this.onValueChanged(data));
		}
	}

	onValueChanged(data?: any) {
		if (!this.projectForm) { return; }
		const form = this.projectForm.form;

		for (const field in this.formErrors) {
			// clear previous error message (if any)
			this.formErrors[field] = '';
			const control = form.get(field);
			if (control && control.touched && control.invalid) {
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors[field] += messages[key] + ' ';
				}
			}
		}
	}

	formErrors = {
		'name': '',
		'hashMapIdentifier': '',
		'git': '',
		'projectKey': '',
		'resourcePath': ''
	};

	validationMessages = {
		'name': {
			'required': 'Name is required.',
		},
		'hashMapIdentifier': {
			'required': 'Project ID is required.'
		},
		'git': {
			'required': 'Git Url is required.'
		},
		'projectKey': {
			'required': 'Project key is required.'
		},
		'resourcePath': {
			'required': 'Path to resources is required.'
		}
	};

	model: Project;
	disabled: boolean = false;
	tmpBranchesInput: string;
	assignableUsers: User[] = [];
	assignableConverters: Converter[] = [];
	projectForm: NgForm;
}

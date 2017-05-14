import { Project } from '../model/entity/Project';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectFetcherService } from '../services/project-fetcher.service';
import { UserService } from "../services/user.service";
import { User } from "../model/entity/User";
import { ConverterService } from "../services/converter.service";
import {Converter} from "../model/entity/Converter";
import {FormArray} from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	moduleId: __filename,
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
		private converterService: ConverterService,
		private formBuilder: FormBuilder
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
		);

		this.createForm();
	}

	goBack(): void {
		this.router.navigate(['project-list']);
	}

	addProject(): void {
		const project = this.prepareSaveProject();
		this.projectService.addProject(project).subscribe(project => this.router.navigate(['project/detail', project.id]),
		error => console.log(error));
	}

	addBranch(): void {
		const control = <FormArray>this.projectForm.controls['branches'];
		control.push(this.formBuilder.control(this.tmpBranchesInput));

		const branches = this.projectForm.get('branches').value;
		this.tmpBranchesInput = "";
	}

	removeBranch(i : number): void {
		const control = <FormArray>this.projectForm.controls['branches'];
		control.removeAt(i);
	}

	prepareSaveProject(): Project {
		const projectModel = this.projectForm.value;
		const assigneeId = this.projectForm.get('assignee').value;
		const converterId = this.projectForm.get('converter').value;
		const newProject: Project = projectModel;

		if (assigneeId) {
			newProject.assignee = this.assignableUsers.find(user => user.id === assigneeId);
		} else {
			delete newProject.assignee;
		}

		if (converterId) {
			newProject.converter = this.assignableConverters.find(converter => converter.id === converterId);
		} else {
			delete newProject.converter;
		}

		return newProject;
	}

	onAssigneeSelected(userId : string): void {
		this.model.assignee = this.assignableUsers.find(user => user.id === userId);
	}

	onConverterSelected(converterId : string): void {
		this.model.converter = this.assignableConverters.find(converter => converter.id === converterId);
	}

	isFormValid(): boolean {
		return this.projectForm.status === 'VALID';
	}

	formErrors = {
		'name': 'Name is required',
		'hashMapIdentifier': 'Project ID is required',
		'git': 'Git Url is required',
		'projectKey': 'Project key is required',
		'resourcePath': 'Path to resources is required'
	};

	createForm() {
		this.projectForm = this.formBuilder.group({
			name: ['', Validators.required],
			hashMapIdentifier: ['', Validators.required],
			git: ['', Validators.required],
			projectKey: ['', Validators.required],
			resourcePath: ['', Validators.required],
			branches: this.formBuilder.array([]),
			assignee: '',
			converter: '',
		})
	}

	model: Project;
	disabled: boolean = false;
	tmpBranchesInput: string;
	assignableUsers: User[] = [];
	assignableConverters: Converter[] = [];
	projectForm: FormGroup = null;
}

import { Project } from '../model/entity/Project';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: 'project-add',
	templateUrl: 'app/view/project-add.component.html'
})

export default class ProjectAddComponent
{
	constructor(
		private router: Router,
		private route: ActivatedRoute)
		{

		}
}

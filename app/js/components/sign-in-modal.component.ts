import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'sign-in-modal',
	templateUrl: 'app/view/sign-in-modal.component.html'
})

export class SignInModalComponent {
	@Input() showModal: boolean;

	constructor(
		private router: Router) {
	}
}

import {Component, trigger, state, style, transition, animate, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'sign-in-box',
    templateUrl: 'app/view/sign-in-box.component.html',
    styleUrls: ['app/styles/sign-in-box.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({
                'margin-top': '60px',
                'opacity': '1'
            })),
            state('out', style({
                'margin-top': '-200px',
                'opacity': '0.5',
                'border': 'none',
                'transform': 'scale(0.5)'
            })),
            transition('void => *', [
                style({
                    'margin-top': '-200px',
                    'opacity': '0.5',
                    'border': 'none',
                    'transform': 'scale(0.5)'
                }),
                animate('500ms 200ms ease-in')
            ]),
            transition('* => out', [
                style({
                    'margin-top': '60px',
                    'opacity': '1'
                }),
                animate('250ms ease-out')
            ])
        ])
    ]
})
export class SignInBoxComponent
{

    constructor()
    {

    }


    googleLogin(): void {
        this.animationState = 'out';
        this.onGoogleSignInClicked.emit();
    }

    @Output() onGoogleSignInClicked = new EventEmitter<void>();
    animationState: string = 'in';
}

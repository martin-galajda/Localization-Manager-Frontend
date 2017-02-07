import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Converter } from '../model/entity/Converter';
import {User} from "../model/entity/User";

@Component({
    selector: 'user-list',
    templateUrl: 'app/view/user-list.component.html'
})

export class UserListComponent implements OnInit {
    constructor(
        private userService: UserService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.users = [];
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(
            users => this.users = users,
            error => console.log(error)
        );
    }

    users: User[];
    query: string = '';
}
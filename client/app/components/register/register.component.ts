/**
 * Created by ziv on 28/01/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'register',
    templateUrl: './app/components/register/register.component.html',
    styleUrls: ['./app/components/register/register.component.css']
})

export class RegisterComponent {
    user: User;
    constructor(
        private router: Router,
        private authService: AuthenticationService) {
        this.user = new User();
    }

    register() {
        this.authService.register(this.user);
    }

    cancel() {
        window.history.back();
    }
}
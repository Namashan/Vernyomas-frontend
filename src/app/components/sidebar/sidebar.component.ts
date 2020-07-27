import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Menü', icon: 'dashboard', class: ''},
    {path: '/user-profile', title: 'Regisztráció', icon: 'assignment', class: ''},
    {path: '/profile', title: 'Profil', icon: 'person', class: ''},
    {path: '/forum', title: 'Tudnivalók', icon: 'forum', class: ''},
    {path: '/schedule', title: 'Napló', icon: 'schedule', class: ''},
    {path: '/diagram', title: 'Diagram', icon: 'donut_large', class: ''},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}

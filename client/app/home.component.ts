import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "home-page",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})

export class HomeComponent implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit(): void {}

}
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(private router: Router, private _data: DataService) {}

  items: any;

  ngOnInit() {
    this._data.item.subscribe(res => (this.items = res));
  }

  redirectToHome() {
    this.router.navigate([""]);
  }
}

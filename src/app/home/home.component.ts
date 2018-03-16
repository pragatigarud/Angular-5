import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  // template: `
  //   <p>This is my HTML</p>
  // `
  styleUrls: ["./home.component.scss"]
  // styles: [
  //   `
  //   p {
  //     font-weight: bold;
  //   };
  //   div {
  //     color: grey;
  //   };
  // `
  // ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  itemText: string = "item";
  items = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.item.subscribe(res => (this.items = res));
    this._data.changeItem(this.items);
    this.itemCount = this.items.length;
  }

  addItem() {
    this.items.push(this.itemText);
    this.itemText = "";
    this.itemCount = this.items.length;
    this._data.changeItem(this.items);
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.itemCount = this.items.length;
    this._data.changeItem(this.items);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor() { }
  public routes = [
    {
      route: "",
      text: "Home"
    },
    {
      route:"movie",
      text: "Find Movie"
    },
    {
      route: "add-movie",
      text: "Add Movie"
    },
  ]

  ngOnInit(): void {
  }

}

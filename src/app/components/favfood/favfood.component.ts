import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favfood',
  templateUrl: './favfood.component.html',
  styleUrls: ['./favfood.component.css']
})
export class FavfoodComponent implements OnInit {

  private pizza: string;
  private cheese: string;
  private seafood: string;

  constructor() { }

  ngOnInit() {
    this.pizza = "PizzA"
    this.cheese ="Cheese Stick"
    this.seafood = "SeaFood"
  }

}

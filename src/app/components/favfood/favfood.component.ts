import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favfood',
  templateUrl: './favfood.component.html',
  styleUrls: ['./favfood.component.css']
})
export class FavfoodComponent implements OnInit {

  private kanamukob: string;
  private howheat: string;
  private cheeseball: string;

  constructor() { }

  ngOnInit() {
    this.kanamukob = "คะน้าหมูกรอบ"
    this.howheat ="howheat"
    this.cheeseball = "cheeseball"
  }

}

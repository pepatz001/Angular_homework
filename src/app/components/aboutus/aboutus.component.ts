import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  private ID: string;
  private name: string;
  private nickname: string;
  private dob: string;
  private tel: string;
  private email: string;

  constructor() { }

  ngOnInit() {
    this.ID = "58102010823"
    this.name ="Rujirat Sutimonrat"
    this.nickname = "MinT"
    this.dob = "03 May 1997"
    this.email = "rujirat.mint@g.swu.ac.th"
    this.tel = "085-824-2310"
  }

}
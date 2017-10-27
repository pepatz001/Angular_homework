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
    this.ID = "58102010827"
    this.name ="Sira Lownoppakul"
    this.nickname = "PePat"
    this.dob = "27 Mar 1997"
    this.email = "sira.pepat@g.swu.ac.th"
    this.tel = "092 564 9892"
  }

}
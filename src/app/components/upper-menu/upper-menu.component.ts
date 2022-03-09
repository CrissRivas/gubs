import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'upper-menu',
  templateUrl: './upper-menu.component.html',
  styleUrls: ['./upper-menu.component.scss']
})
export class UpperMenuComponent implements OnInit {
  public activeMenu:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMnu(): void{
    this.activeMenu = !this.activeMenu;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  
  dashboardData =[{name: 'shiva', rollNo: '1'},
    {name: 'shivani', rollNo: '2'},
    {name: 'shivani', rollNo: '3'},
    {name: 'shivani', rollNo: '4'}];

  constructor(){
    
  }

  getDashboardData(){
    console.log(this.dashboardData);
  }

  ngOnInit(){

  }

}

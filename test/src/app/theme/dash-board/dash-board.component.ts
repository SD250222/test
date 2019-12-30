import { Component, OnInit } from '@angular/core';
import {dashboardService} from './dash-board.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.sass']
})
export class DashBoardComponent implements OnInit {

  constructor(private _service:dashboardService) { }

  dummyArray:any=[
    {name:"Interchange +.10 and $0.10",saving:"1,331.26",residuals:"261.31",rate:"2.29"},
    {name:"Interchange +.15 and $0.10",saving:"1,256.26",residuals:"356.31",rate:"2.32"},
    {name:"Interchange +.20 and $0.10",saving:"1,032.26",residuals:"548.01",rate:"2.48"},
    {name:"Interchange +.25 and $0.10",saving:"1,862.26",residuals:"963.81",rate:"2.76"},
    {name:"Interchange +.30 and $0.10",saving:"331.26",residuals:"786.44",rate:"2.94"},

    {name:"2.50% flat",saving:"331.26",residuals:"166.31",rate:"2.65"},
    {name:"2.60% flat",saving:"568.26",residuals:"261.31",rate:"2.12"},
    {name:"2.75% flat",saving:"896.26",residuals:"865.31",rate:"2.63"},

    {name:"6 Tired w/Reg Debit",saving:"863.26",residuals:"453.31",rate:"3.63"},
    {name:"3 Tired w/Reg Debit",saving:"653.26",residuals:"356.31",rate:"3.09"},
  ];

  description:string="March 2019";
  SIS:string="S82 Restaurant";
  visa_Dolar:any=56562.25;
  visa_Hash:any=1522;
  master_Dolar:any=78965.25;
  master_Hash:any=2568;
  discover_Dolar:any=47865.25;
  discover_Hash:any=1869;
  ae_Dolar:any=56562.25;
  ae_Hash:any=1522;
  totVol:number=1548698;
  totTrans:number=4526;
  avgtic:number=22.356;
  currRate:number=3.58;
  curFees:number=3789.56;
  currAmFees:number=789.31;

  ngOnInit() {
    this._service.getClimate()
    .subscribe(res=>{
      debugger
      console.log(res)
    })
  }

  getData(){
    // alert("helo")
  }

}

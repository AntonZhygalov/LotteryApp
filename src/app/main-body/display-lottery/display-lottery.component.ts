import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-display-lottery',
  templateUrl: './display-lottery.component.html',
  styleUrls: ['./display-lottery.component.css']
})
export class DisplayLotteryComponent implements OnInit {

  constructor(private dataservice: DataserviceService) { }
  arr: any = [];
  ngOnInit() {
    this.dataservice.getData().subscribe(
      (data) => this.arr = Object.values(data),
      (error) => console.log(error)
    );
  }

}

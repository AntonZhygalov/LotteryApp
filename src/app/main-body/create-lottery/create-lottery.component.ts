import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-create-lottery',
  templateUrl: './create-lottery.component.html',
  styleUrls: ['./create-lottery.component.css']
})
export class CreateLotteryComponent implements OnInit {
  newArr: any = [];
  random: string;
  buttonDisabled: boolean = true;
  pickedDate: any;
  date: Date;

  constructor(private router: Router, private dataService: DataserviceService) { }

  ngOnInit() {
    this.generate();
    this.date = new Date();
    this.pickedDate = `${this.date.getFullYear()}-${this.date.getMonth()+1}-${this.date.getDate()}`;
  }

  generate() {
    this.newArr = [];
    while (this.newArr.length < 23) {
      this.random = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
      if(!this.newArr.includes(this.random)){
        this.newArr.push(this.random);
      }
    }
  }

  sendData(){
    this.newArr.push(this.pickedDate);
    this.dataService.sendData(this.newArr).subscribe(
      (data) => {console.log(data)
            this.router.navigate(['']);},
      (error) => console.log(error)
    );
  }

}

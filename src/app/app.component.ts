import {Component, OnInit} from '@angular/core';
import {AdvanceDataTester} from "advance-data-tester";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DemoApp';

  constructor(private advanceDataTester: AdvanceDataTester) {
  }

  $error: string = '';

  ngOnInit() {

    let test = this.advanceDataTester.checkString("Divaynhui% Sah", ['space'] , 'Name' )
    if(test != null){
      this.$error = test;
    }
    else{
      this.$error = "All Good!!";
    }
  }
}

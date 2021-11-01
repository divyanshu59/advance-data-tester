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

    let test1 = this.advanceDataTester.checkString("Divaynshu Sah", ['space', 'empty','specialChar','number'],"Name")

    let test2 = this.advanceDataTester.checkStringArray([
      {name: "Fname", value: "divaynshu"},
      {value: ""},
    ], ['space','empty'])

    if(test2 != null){
      this.$error = test2;
    }
    else{
      this.$error = "All Good!!";
    }
  }
}

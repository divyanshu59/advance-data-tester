import { Injectable } from '@angular/core';


type test = 'empty'|'space'|'specialChar'|'number';

@Injectable({
  providedIn: 'root'
})
export class AdvanceDataTester{

  constructor() { }


  checkString(text: string, testCases?: test[], name:string = 'Text'){
    let $error = "";
    let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ",", ".", "-", "=", "+", "/", '|', "_", "<", ">", "`", "~", "}", "{", "]", "["];
    let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


    if(!testCases)
      testCases = ['empty','space','specialChar','number']


    if(testCases.includes('empty') && text == "")
      $error =  `${name} cannot be empty.`;

    if ( testCases.includes('space') && text.split(" ").length > 1)
      $error = `${name} cannot contain spaces.`;


    if ( testCases.includes('specialChar'))
    for (let i = 0; i < specialChar.length; i++) {
      if (text.includes(specialChar[i]))
        $error = `${name} cannot contains special character.`;
    }

    if ( testCases.includes('number'))
    for (let i = 0; i < number.length; i++) {
      if (text.includes(number[i]))
        $error = `${name} cannot contains numbers.`;
    }

    if ($error != "") return $error;
    else return;
  }


}

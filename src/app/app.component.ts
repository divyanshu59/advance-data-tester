import {Component, OnInit} from '@angular/core';
import {AdvanceDataTester} from "../../projects/advance-data-tester/src/lib/advance-data-tester.service";






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DemoApp';
  private data: any = [];

  constructor(private advanceDataTester: AdvanceDataTester) {
  }

  $error: string = '';

  sourceData = [
    {
      "name": {
        "firstName": "Divyanshu",
        "lastName": "Sah"
      },
      "_id": "616688b02a6af1e50bbbeb90",
      "firebaseAuthId": "DcvPm3YY4YY6ncOBGNj1q3C7cjb2",
      "email": "div.14303@gmail.com",
      "gender": "Male",
      "dob": "2020-02-23T00:00:00.000Z",
      "userType": "Student",
      "username": "divyanshu1",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "Bi7Zg1nF",
      "image": "",
      "status": 1,
      "isSignupCompleted": true,
      "createdAt": "2021-10-13T07:20:16.375Z",
      "updatedAt": "2021-11-01T17:59:17.690Z",
      "__v": 0,
      "fullname": "Divyanshu Sah",
      "id": "616688b02a6af1e50bbbeb90"
    },
    {
      "name": {
        "firstName": "Aadhya",
        "lastName": "Kas"
      },
      "_id": "6170037ce41d513d50d269bc",
      "firebaseAuthId": "4ljV0lyQG9YKadfuWXaKJYPMFEu1",
      "email": "test1@bilwg.com",
      "gender": "Other",
      "dob": "1869-01-19T00:00:00.000Z",
      "userType": "Student",
      "username": "bilwg1",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABCdsf University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "FCCmaGxH",
      "image": null,
      "status": -1,
      "isSignupCompleted": true,
      "createdAt": "2021-10-20T11:54:36.644Z",
      "updatedAt": "2021-11-01T11:24:34.816Z",
      "__v": 0,
      "fullname": "Aadhya Kas",
      "id": "6170037ce41d513d50d269bc"
    },
    {
      "_id": "61700389e41d513d50d269be",
      "firebaseAuthId": null,
      "email": "test2@bilwg.com",
      "gender": "Male",
      "dob": "2020-02-24T00:00:00.000Z",
      "userType": "Staff",
      "username": "bilwg2",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABCvcvcv University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "w0t5wk0h",
      "image": null,
      "status": 1,
      "isSignupCompleted": false,
      "createdAt": "2021-10-20T11:54:49.049Z",
      "updatedAt": "2021-11-02T20:40:19.403Z",
      "__v": 0,
      "fullname": "undefined undefined",
      "id": "61700389e41d513d50d269be"
    },
    {
      "name": {
        "firstName": "Abhishek",
        "lastName": "Mathur"
      },
      "_id": "6170038de41d513d50d269c0",
      "firebaseAuthId": "WnUjYrDydJV5Gjshn1czc5NWZ432",
      "email": "test3@bilwg.com",
      "gender": "Male",
      "dob": "2002-02-03T00:00:00.000Z",
      "userType": "Student",
      "username": "bilwg3",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "89PKawZE",
      "image": null,
      "status": 1,
      "isSignupCompleted": true,
      "createdAt": "2021-10-20T11:54:53.108Z",
      "updatedAt": "2021-11-02T19:30:24.302Z",
      "__v": 0,
      "fullname": "Abhishek Mathur",
      "id": "6170038de41d513d50d269c0"
    },
    {
      "name": {
        "firstName": "Harry",
        "lastName": "Potter"
      },
      "_id": "61700391e41d513d50d269c2",
      "firebaseAuthId": "r3aPn9MmZPQvqtN0znsmB7aeYbd2",
      "email": "test4@bilwg.com",
      "gender": "Male",
      "dob": "2020-02-24T00:00:00.000Z",
      "userType": "Student",
      "username": "bilwg4",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "GHs6d85x",
      "image": null,
      "status": 1,
      "isSignupCompleted": true,
      "createdAt": "2021-10-20T11:54:57.317Z",
      "updatedAt": "2021-11-02T19:35:47.079Z",
      "__v": 0,
      "fullname": "Harry Potter",
      "id": "61700391e41d513d50d269c2"
    },
    {
      "name": {
        "firstName": "Bilwg",
        "lastName": "Test"
      },
      "_id": "61700395e41d513d50d269c4",
      "firebaseAuthId": null,
      "email": "test5@bilwg.com",
      "gender": "Male",
      "dob": "2020-02-24T18:46:43.250Z",
      "userType": "Staff",
      "username": "bilwg5",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABCaaa University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "abpwRFnu",
      "image": null,
      "status": 1,
      "isSignupCompleted": false,
      "createdAt": "2021-10-20T11:55:01.305Z",
      "updatedAt": "2021-10-20T11:55:01.305Z",
      "__v": 0,
      "fullname": "Bilwg Test",
      "id": "61700395e41d513d50d269c4"
    },
    {
      "name": {
        "firstName": "Bilwg",
        "lastName": "Test"
      },
      "_id": "6170039ae41d513d50d269c6",
      "firebaseAuthId": null,
      "email": "test6@bilwg.com",
      "gender": "Male",
      "dob": "2020-02-24T18:46:43.250Z",
      "userType": "Student",
      "username": "bilwg6",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "W5xk3gyr",
      "image": null,
      "status": 1,
      "isSignupCompleted": false,
      "createdAt": "2021-10-20T11:55:06.747Z",
      "updatedAt": "2021-10-20T11:55:06.747Z",
      "__v": 0,
      "fullname": "Bilwg Test",
      "id": "6170039ae41d513d50d269c6"
    },
    {
      "name": {
        "firstName": "Bilwg1",
        "lastName": "Test"
      },
      "_id": "6170039ee41d513d50d269c8",
      "firebaseAuthId": "p3hQxZOq3zXH1MmaVzBtZeNXBjv2",
      "email": "test7@bilwg.com",
      "gender": "Male",
      "dob": "2020-02-24T00:00:00.000Z",
      "userType": "Student",
      "username": "bilwg7",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "k9E73s9m",
      "image": null,
      "status": 1,
      "isSignupCompleted": true,
      "createdAt": "2021-10-20T11:55:10.638Z",
      "updatedAt": "2021-10-29T15:33:10.307Z",
      "__v": 0,
      "fullname": "Bilwg1 Test",
      "id": "6170039ee41d513d50d269c8"
    },
    {
      "name": {
        "firstName": "Bilwg",
        "lastName": "Test"
      },
      "_id": "617003a4e41d513d50d269ca",
      "firebaseAuthId": null,
      "email": "test8@bilwg.com",
      "gender": "Male",
      "dob": "2020-02-24T18:46:43.250Z",
      "userType": "Student",
      "username": "bilwg8",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "aN1IPkak",
      "image": null,
      "status": 1,
      "isSignupCompleted": false,
      "createdAt": "2021-10-20T11:55:16.953Z",
      "updatedAt": "2021-10-20T11:55:16.953Z",
      "__v": 0,
      "fullname": "Bilwg Test",
      "id": "617003a4e41d513d50d269ca"
    },
    {
      "name": {
        "firstName": "Test",
        "lastName": "Bilwg"
      },
      "_id": "617003aae41d513d50d269cc",
      "firebaseAuthId": null,
      "email": "test9@bilwg.com",
      "gender": "Other",
      "dob": "2020-02-24T00:00:00.000Z",
      "userType": "Student",
      "username": "bilwg9",
      "instituteId": {
        "address": {
          "addressLine1": "Nainital",
          "addressLine2": "Near General Market",
          "city": "Bhimtal",
          "state": "Uttarakhand",
          "pincode": 263136,
          "country": "India"
        },
        "subscription": {
          "startDay": "2021-11-01T00:00:00.000Z",
          "endDay": "2022-01-15T00:00:00.000Z"
        },
        "_id": "616fcb96eb5f661f0345999a",
        "name": "ABC University",
        "logo": "https://bravome.s3.amazonaws.com/b206fc8f-aad8-4e88-ac30-c01052fd86d6.png",
        "instituteAdmin": "61754a237604831a26e2cc4a",
        "token": 40700,
        "status": 1,
        "createdAt": "2021-10-20T07:56:06.705Z",
        "updatedAt": "2021-11-03T08:50:21.866Z",
        "__v": 0,
        "id": "616fcb96eb5f661f0345999a"
      },
      "temppass": "l0P2ZXlr",
      "image": null,
      "status": 1,
      "isSignupCompleted": false,
      "createdAt": "2021-10-20T11:55:22.898Z",
      "updatedAt": "2021-11-01T11:24:47.505Z",
      "__v": 0,
      "fullname": "Test Bilwg",
      "id": "617003aae41d513d50d269cc"
    }
  ];

  async ngOnInit() {



    this.data = this.sourceData;

    console.log(this.data)

    let finalData = this.advanceDataTester.multiSort(this.data, [
      {
        key: 'instituteId.name',
        value: ['ABC University'],
        isInclude: true
      }
    ]);

    console.log(finalData)
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  constructor() { }
  formStatus = {
    formOne: {
      status: false
    },
    formTwo: {
      status: false
    },
    formThree: {
      status: false
    },
    formFour: {
      status: false
    }
  }


  setFormOneStatus(value: any) {
    this.formStatus.formOne.status = true;
  }

  setFormTwoStatus(value: any) {
    console.log(value);
    this.formStatus.formTwo.status = true;
    if (value.yesOrNo === "true") {
      this.formStatus.formThree.status = true;
      this.formStatus.formFour.status = false;
    } else {
      this.formStatus.formThree.status = false;
      this.formStatus.formFour.status = true;
    }
  }

  ngOnInit() {
  }

}

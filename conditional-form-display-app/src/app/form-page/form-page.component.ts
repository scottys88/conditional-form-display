import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  constructor() { }
  percentageComplete: number;
  forms = [
    {
      formName: 'formOne',
      isRequired: true,
      isComplete: false,
      isActive: true
    },    
    {
      formName: 'formTwo',
      isRequired: true,
      isComplete: false,
      isActive: false
    },
    {
        formName: 'formThree',
        isRequired: true,
        isComplete: false,
        isActive: false
    },
    {
        formName: 'formFour',
        isRequired: true,
        isComplete: false,
        isActive: false
    }
  ];

  updateFormValue(formName: string, isRequired?: boolean, isComplete?: boolean, isActive?: boolean ) {
    const formToUpdateIndex = this.forms.findIndex(form => form.formName === formName);
    const formToUpdate = { ...this.forms[formToUpdateIndex], isRequired, isComplete, isActive };

    const valuesBefore = this.forms.slice(0, formToUpdateIndex);
    const valuesAfter = this.forms.slice(formToUpdateIndex + 1);

    this.forms = [...valuesBefore, formToUpdate, ...valuesAfter];

    console.log(this.forms);
  }

  setFormStatus(value: any) {
    console.log(value);
    if(value.formName === 'formOne') {
      this.updateFormValue(value.formName, true, true, true);
      this.updateFormValue('formTwo', true, false, true);
    }
    if(value.formName === 'formTwo' && value.value.yesOrNo === 'true') {
      this.updateFormValue(value.formName, true, true, true);
      this.updateFormValue('formTwo', true, true, true);
      this.updateFormValue('formThree', true, false, true);
      this.updateFormValue('formFour', false, false, false);
    }
    if(value.formName === 'formTwo' && value.value.yesOrNo === 'false') {
      this.updateFormValue(value.formName, true, true, true);
      this.updateFormValue('formTwo', true, true, true);
      this.updateFormValue('formThree', false, false, false);
      this.updateFormValue('formFour', true, true, true);
    }
    this.setPageProgress();
  }

  setPageProgress() {
    const formCount = Object.keys(this.forms).length;
    let completedForms = this.forms.filter(form => form.isComplete).length;

    this.percentageComplete = (completedForms / formCount) * 100;

    console.log(this.percentageComplete);    
  }


  ngOnInit() {
  }

}

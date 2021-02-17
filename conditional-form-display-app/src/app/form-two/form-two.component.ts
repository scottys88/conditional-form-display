import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent implements OnInit {
  formGroup: FormGroup;

  @Output()
  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  submit() {
    const isFormValid = this.formGroup.status === 'VALID';
    if (!isFormValid) { return; }
    this.formSubmit.emit({ value: this.formGroup.value, formName: 'formTwo'});
  }


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      yesOrNo: ['', [Validators.required]]
    });
  }

}

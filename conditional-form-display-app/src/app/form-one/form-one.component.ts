import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent implements OnInit {
  formGroup: FormGroup;

  @Output()
  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) { }

  submit() {
    const isFormValid = this.formGroup.status === 'VALID';
    if (!isFormValid) { return; }
    this.formSubmit.emit({ value: this.formGroup.value, formName: 'formOne'});
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstname: ['', [Validators.required]]
    });
  }

}

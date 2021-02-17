import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { FormThreeComponent } from './form-three/form-three.component';
import { FormFourComponent } from './form-four/form-four.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './layout/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormPageTwoComponent } from './form-page-two/form-page-two.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormFourComponent,
    ContainerComponent,
    FormPageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

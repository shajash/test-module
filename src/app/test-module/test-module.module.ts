import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from '../test-comp/test-comp.component';
import { TestServiceService } from "../test-service.service";

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [TestCompComponent],
  providers: [TestServiceService],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [TestCompComponent],
  bootstrap: [TestCompComponent]
})
export class TestModuleModule { }

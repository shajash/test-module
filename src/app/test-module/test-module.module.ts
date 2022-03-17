import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCompComponent } from '../test-comp/test-comp.component';
import { TestServiceService } from "../test-service.service";


@NgModule({
  declarations: [TestCompComponent],
  providers: [TestServiceService],
  imports: [
    CommonModule
  ],
  exports: [TestCompComponent]
})
export class TestModuleModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations :[MainPageComponent],
  imports: [CommonModule, MainRoutingModule],
  exports: [],
})
export class MainModule {}

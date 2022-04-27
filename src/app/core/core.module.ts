import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringConvertComponent } from './string-convert/string-convert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighLightComponent } from './high-light/high-light.component';
import { SpliceArrayComponent } from './splice-array/splice-array.component';
import { PowerToxComponent } from './power-tox/power-tox.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    StringConvertComponent,
    ProductListComponent,
    HighLightComponent,
    SpliceArrayComponent,
    PowerToxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PowerToxComponent,
    StringConvertComponent,
    SpliceArrayComponent,
    HighLightComponent,
    ProductListComponent,
  ]
})
export class CoreModule { }

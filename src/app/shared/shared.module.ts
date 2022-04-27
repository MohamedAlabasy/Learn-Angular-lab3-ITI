import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerToxPipe } from './power-tox.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { SpliceArrayPipe } from './splice-array.pipe';
import { StarComponent } from './star/star.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    PowerToxPipe,
    StringConvertPipe,
    SpliceArrayPipe,
    StarComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    PowerToxPipe,
    StringConvertPipe,
    SpliceArrayPipe,
    HighlightDirective,
  ]
})
export class SharedModule { }

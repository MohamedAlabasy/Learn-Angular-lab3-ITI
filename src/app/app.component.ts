import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab3';

  isPowerToxHidden: boolean
  isStringConvertHidden: boolean
  isSpliceArrayHidden: boolean
  isHighLightHidden: boolean
  isProductListHidden: boolean

  constructor() {
    this.isPowerToxHidden = false
    this.isStringConvertHidden = true
    this.isSpliceArrayHidden = true
    this.isHighLightHidden = true
    this.isProductListHidden = true
  }

  changePowerToxHidden() {
    this.hiddenAll()
    this.isPowerToxHidden = false
  }
  changeStringConvertHidden() {
    this.hiddenAll()
    this.isStringConvertHidden = false
  }
  changeSpliceArrayHidden() {
    this.hiddenAll()
    this.isSpliceArrayHidden = false
  }
  changeHighLightHidden() {
    this.hiddenAll()
    this.isHighLightHidden = false
  }
  changeProductListHidden() {
    this.hiddenAll()
    this.isProductListHidden = false
  }

  hiddenAll() {
    this.isPowerToxHidden = true
    this.isStringConvertHidden = true
    this.isSpliceArrayHidden = true
    this.isHighLightHidden = true
    this.isProductListHidden = true
  }

  ngOnInit(): void {

  }
}

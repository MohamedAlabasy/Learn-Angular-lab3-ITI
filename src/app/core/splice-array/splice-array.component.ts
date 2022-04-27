import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splice-array',
  templateUrl: './splice-array.component.html',
  styleUrls: ['./splice-array.component.css']
})
export class SpliceArrayComponent implements OnInit {

  isHidden: boolean
  constructor() {
    this.isHidden = true
  }

  ngOnInit(): void {
  }

  showResult(myArray: string, filter: string) {
    (myArray.length == 0 || filter.length == 0) ? this.isHidden = true : this.isHidden = false
  }
}

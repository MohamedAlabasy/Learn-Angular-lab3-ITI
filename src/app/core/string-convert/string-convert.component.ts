import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-convert',
  templateUrl: './string-convert.component.html',
  styleUrls: ['./string-convert.component.css']
})
export class StringConvertComponent implements OnInit {

  isHidden: boolean
  constructor() {
    this.isHidden = true
  }

  ngOnInit(): void {
  }

  showResult(myString: string) {
    (myString.length == 0) ? this.isHidden = true : this.isHidden = false
  }
}

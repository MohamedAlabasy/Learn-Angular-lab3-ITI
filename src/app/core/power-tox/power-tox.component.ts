import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-power-tox',
  templateUrl: './power-tox.component.html',
  styleUrls: ['./power-tox.component.css']
})
export class PowerToxComponent implements OnInit {
  isHidden: boolean
  constructor() {
    this.isHidden = true
  }

  ngOnInit(): void {
  }

  showResult(number: string, power: string) {
    (number.length == 0 || power.length == 0) ? this.isHidden = true : this.isHidden = false
  }
}

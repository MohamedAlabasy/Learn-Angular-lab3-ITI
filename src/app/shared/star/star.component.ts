import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input('rating') rating = 3.5   //rating => as elsie name and rating=3.5 is in this class only
  corpWidth = 0
  constructor() { // first run on this class
    this.corpWidth = this.rating * 75 / 5;
    // this.corpWidth=this.rating *15;
  }
  ngOnChanges(changes: SimpleChanges): void { // run after constrictor and every time that input change
    this.corpWidth = this.rating * 15
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void { //run after onChange one time and initialize data here and constrictor => dp injection
  }

}

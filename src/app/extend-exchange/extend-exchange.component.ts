import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-extend-exchange',
  templateUrl: './extend-exchange.component.html',
  styleUrls: ['./extend-exchange.component.scss']
})
export class ExtendExchangeComponent implements OnInit {
  
  public isCollapsed = true;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}

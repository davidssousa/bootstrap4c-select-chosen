import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  selectedValue = null;
  selectedValue2 = null;
  countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'Australia' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'Brazil' },
    { id: 5, name: 'England' },
    { id: 6, name: 'Russia' }
  ];

  ngOnInit() { }

  ngAfterViewInit() {
    $('.form-control-chosen').chosen({
      allow_single_deselect: true
    });
  }
}

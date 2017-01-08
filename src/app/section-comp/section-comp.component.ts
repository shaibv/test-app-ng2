import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataEntry } from '../data-entry';

@Component({
  selector: 'data-section-comp',
  templateUrl: './section-comp.component.html',
  styleUrls: ['./section-comp.component.css']
})
export class SectionCompComponent implements OnInit {

  constructor(private data:DataEntry[]) { }

  ngOnInit() {
    this.data = DataService.getData()
  }

}

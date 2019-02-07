import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv';

@Component({
  selector: 'app-cvs-file',
  templateUrl: './cvs-file.component.html',
  styleUrls: ['./cvs-file.component.css'],
})
export class CvsFileComponent implements OnInit {

  data = [
    {
      name: "Test, 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 3',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    }
  ];
  options = {
    fieldSeparator: '|',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],//['column 1', 'column 2', 'column 3', 'column 4', 'column 5'],
    showTitle: false,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys: ['approved','age','name' ]
  };
  constructor() { }

  ngOnInit() {
  }


  GenerarCVS(){

    new Angular2Csv(this.data, 'My Report',this.options);
  }
}

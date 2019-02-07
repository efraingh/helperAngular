import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-subir-excel',
  templateUrl: './subir-excel.component.html',
  styleUrls: ['./subir-excel.component.css']
})
export class SubirExcelComponent implements OnInit {
  data: AOA = [ [1, 2], [3, 4] ];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';
  constructor() { }

  ngOnInit() {
  }

  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
    }
    fileReader.readAsArrayBuffer(this.file);
  }

  onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
		};
		reader.readAsBinaryString(target.files[0]);
	}

	export(): void {
		/* generate worksheet */
		const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

		/* save to file */
		XLSX.writeFile(wb, this.fileName);
	}
}

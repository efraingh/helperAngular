import { Component, OnInit } from '@angular/core';

import * as html2canvas from 'html2canvas';
declare var jsPDF: any;
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.css']
})
export class JspdfComponent implements OnInit {

  public myAngularxQrCode: string = null;

  constructor() {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {
  }

  GenerarReporte() {
    let columns = [
      { title: "FECHA Y HORA", dataKey: "FECHA_EVOLUCION" },
      { title: "S", dataKey: "S_EVOLUCION" },
      { title: "O", dataKey: "O_EVOLUCION" },
      { title: "A", dataKey: "A_EVOLUCION" },
      { title: "P", dataKey: "P_EVOLUCION" }
    ];
    let rows = [
      {
        "FECHA_EVOLUCION": '13/09/18 12:30',
        "S_EVOLUCION": "Lorem ipsum dolor sit amet consectetur adipiscing elit, purus sodales inceptos porttitor quis vehicula, posuere blandit ligula condimentum urna penatibus integer, sapien curae vestibulum lectus non. Pellentesque pulvinar odio augue porta feugiat mollis molestie nullam, aenean ornare interdum mattis varius lacus aptent potenti, tortor cursus orci laoreet gravida auctor lacinia.",
        "O_EVOLUCION": "Lorem ipsum dolor sit amet consectetur adipiscing elit, purus sodales inceptos porttitor quis vehicula, posuere blandit ligula condimentum urna penatibus integer, sapien curae vestibulum lectus non. Pellentesque pulvinar odio augue porta feugiat mollis molestie nullam, aenean ornare interdum mattis varius lacus aptent potenti, tortor cursus orci laoreet gravida auctor lacinia.",
        "A_EVOLUCION": "Faringitis aguda",
        "P_EVOLUCION": "Ibuprofeno 400g (12) c/8 Hrs. V.O."
      },
      {
        "FECHA_EVOLUCION": '13/09/18 12:30',
        "S_EVOLUCION": "Lorem ipsum dolor sit amet consectetur adipiscing elit, purus sodales inceptos porttitor quis vehicula, posuere blandit ligula condimentum urna penatibus integer, sapien curae vestibulum lectus non. Pellentesque pulvinar odio augue porta feugiat mollis molestie nullam, aenean ornare interdum mattis varius lacus aptent potenti, tortor cursus orci laoreet gravida auctor lacinia.",
        "O_EVOLUCION": "Lorem ipsum dolor sit amet consectetur adipiscing elit, purus sodales inceptos porttitor quis vehicula, posuere blandit ligula condimentum urna penatibus integer, sapien curae vestibulum lectus non. Pellentesque pulvinar odio augue porta feugiat mollis molestie nullam, aenean ornare interdum mattis varius lacus aptent potenti, tortor cursus orci laoreet gravida auctor lacinia.",
        "A_EVOLUCION": "Faringitis aguda",
        "P_EVOLUCION": "Ibuprofeno 400g (12) c/8 Hrs. V.O."
      }
    ];

    let signos = {
      "FC_EVOLUCION": "65X",
      "FR_EVOLUCION": "20X",
      "PA_EVOLUCION": "110/80",
      "SO2_EVOLUCION": "95%",
      "T_EVOLUCION": "28°C"
    }

    // Only pt supported (not mm or in)
    let doc_aux = new jsPDF('p', 'pt', 'letter');
    doc_aux.setFontSize(9);
    doc_aux.setFontStyle("bold");
    let signosVitales = 'SIGNOS VITALES:'
    doc_aux.text(20, 50, signosVitales);

    doc_aux.text(20, 50, signosVitales);
    doc_aux.autoTable(columns, rows, {
      //Propiedades
      margin: { horizontal: 20, top: 60 },
      tableWidth: 'wrap',
      tableLineColor: [0, 0, 0],
      tableLineWidth: 0.1,
      lineColor: [0, 0, 0],
      //Estilos
      headerStyles: {
        valign: 'middle',
        fillColor: [230, 230, 230],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        textColor: 0,
      },
      bodyStyles: {
        valign: 'middle',
        fillColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        lineWidth: 0.1
      },
      styles: { overflow: 'linebreak', columnWidth: 'wrap', fontSize: 9 },
      columnStyles: {
        S_EVOLUCION: { columnWidth: 120 },
        O_EVOLUCION: { columnWidth: 120 },
        A_EVOLUCION: { columnWidth: 120 },
        P_EVOLUCION: { columnWidth: 120 }
      },
      drawCell: function (cell, data) {
        doc_aux.rect(cell.x, cell.y, cell.width, cell.height, 'S');
        doc_aux.text(cell.text, cell.x + 5, cell.y + 12, { maxWidth: 110, align: "justify" });
        return false;
      }
    });
    let tabla_aux = doc_aux.autoTable.previous;

    // let doc2 = new jsPDF();
    // let text = 'Lorem ipsum dolor sit amet, consetetur abore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'; 
    // let text2 = 'Lorem ipsum dolor sit amet, consetetur abore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'; 
    // let lineHeight = doc2.getLineHeight(text) / doc2.internal.scaleFactor;
    // let splittedText = doc2.splitTextToSize(text, 125);
    // let lines = splittedText.length;  // splitted text is a string array
    // let blockHeight = lines * lineHeight;
    // let yPos = 10;
    // doc2.text(text, 10, yPos, { maxWidth: 150, align: "justify" });
    // yPos += blockHeight
    // doc2.text(text2, 10, yPos, { maxWidth: 150, align: "justify" });
    // doc2.save("justify.pdf");

    let doc = new jsPDF('p', 'pt', 'letter');
    doc.setFontSize(9);
    doc.setFontStyle("bold");
    let signosVitaless = 'SIGNOS VITALES:'
    doc.text(20, 50, signosVitaless);
    doc.autoTable(columns, rows, {
      //Propiedades
      startY: tabla_aux.finalY + 10,
      margin: { horizontal: 20, top: 60 },
      tableWidth: 'wrap',
      tableLineColor: [0, 0, 0],
      tableLineWidth: 0.1,
      lineColor: [0, 0, 0],
      //Estilos
      headerStyles: {
        valign: 'middle',
        fillColor: [230, 230, 230],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        textColor: 0,
      },
      bodyStyles: {
        valign: 'middle',
        fillColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        lineWidth: 0.1
      },
      styles: { overflow: 'linebreak', columnWidth: 'wrap', fontSize: 9 },
      columnStyles: {
        S_EVOLUCION: { columnWidth: 120 },
        O_EVOLUCION: { columnWidth: 120 },
        A_EVOLUCION: { columnWidth: 120 },
        P_EVOLUCION: { columnWidth: 120 }
      },
      drawCell: function (cell, data) {
        doc.rect(cell.x, cell.y, cell.width, cell.height, 'S');
        doc.text(cell.text, cell.x + 5, cell.y + 12, { maxWidth: 110, align: "justify" });
        return false;
      }
    });
  }

  GenerarQR() {
    let qrdata = document.getElementById('qrCode');
    let qrdata2 = $('#qrCode');
    console.log(qrdata)
    console.log(qrdata2)
    let img= qrdata2[0].lastChild.currentSrc;
    console.log(img);
    
  }
}

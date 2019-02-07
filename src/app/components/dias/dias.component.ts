import { Component, OnInit } from '@angular/core';
//import { funciones } from 'funciones/';
import * as moment from 'moment';
// import { FuncionComponent } from '@funciones/funcion.component';
//import { FuncionComponent } from '@funciones/';
@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styles: []
})
export class DiasComponent implements OnInit {

  dia: number;
  desde: any;
  hasta: any;

  constructor( ) {
    //https://momentjs.com/docs/#/get-set/get/
    //moment.locale('es');
    moment().format;
    
    //this.hasta = moment().format('gggg-MM-DD');

  }

  ngOnInit() {
    this.desde = moment().format('gggg-MM-DD');
    this.getHastaPorDesde(this.desde);
  }
  getFecha() {
    // let dia = moment(this.desde).get('date');
    // let mes = moment(this.desde).get('month');
    // let anio = moment(this.desde).get('year');
    // let fechaFin = moment(this.desde).add(this.dia, 'days').format('gggg-MM-DD');
    // this.hasta = fechaFin;
    console.log(this.dia);
    console.log(this.desde);
    console.log(this.hasta);
  }

  getHastaPorDesde(fechaDesde) {
    let fechaFin = moment(fechaDesde).add(this.dia, 'days').format('gggg-MM-DD');
    this.hasta = fechaFin;
  }
  getHastaPorDia(dia) {
    let fechaFin = moment(this.desde).add(dia, 'days').format('gggg-MM-DD');
    this.hasta = fechaFin;
  }
}

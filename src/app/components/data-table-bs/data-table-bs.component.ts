import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';



declare var jQuery: any;
declare var $: any;
// var $  = require( 'jquery' );
// var dt = require( 'datatables.net' )( window, $ );
@Component({
  selector: 'app-data-table-bs',
  templateUrl: './data-table-bs.component.html',
  styleUrls: ['./data-table-bs.component.css']
})
export class DataTableBsComponent implements OnInit {
  public data = [{
    "id": 1,
    "first_name": "Hugibert",
    "last_name": "Lambertz",
    "email": "hlambertz0@geocities.com",
    "gender": "Male",
    "ip_address": "227.52.142.156"
  }, {
    "id": 2,
    "first_name": "Ignatius",
    "last_name": "Anderer",
    "email": "ianderer1@bandcamp.com",
    "gender": "Male",
    "ip_address": "133.170.157.45"
  }, {
    "id": 3,
    "first_name": "Ethel",
    "last_name": "Seage",
    "email": "eseage2@home.pl",
    "gender": "Female",
    "ip_address": "135.29.33.180"
  }, {
    "id": 4,
    "first_name": "Thacher",
    "last_name": "O'Fogerty",
    "email": "tofogerty3@cdbaby.com",
    "gender": "Male",
    "ip_address": "42.153.15.217"
  }, {
    "id": 5,
    "first_name": "Howard",
    "last_name": "Aulton",
    "email": "haulton4@house.gov",
    "gender": "Male",
    "ip_address": "140.111.209.182"
  }, {
    "id": 6,
    "first_name": "Calley",
    "last_name": "Eykelbosch",
    "email": "ceykelbosch5@wikia.com",
    "gender": "Female",
    "ip_address": "240.161.253.184"
  }, {
    "id": 7,
    "first_name": "Stace",
    "last_name": "Lording",
    "email": "slording6@studiopress.com",
    "gender": "Female",
    "ip_address": "242.220.123.68"
  }, {
    "id": 8,
    "first_name": "Gillian",
    "last_name": "Hunstone",
    "email": "ghunstone7@4shared.com",
    "gender": "Female",
    "ip_address": "197.14.40.164"
  }, {
    "id": 9,
    "first_name": "Truman",
    "last_name": "Shearer",
    "email": "tshearer8@pbs.org",
    "gender": "Male",
    "ip_address": "253.125.60.170"
  }, {
    "id": 10,
    "first_name": "Morey",
    "last_name": "Lande",
    "email": "mlande9@cargocollective.com",
    "gender": "Male",
    "ip_address": "100.50.140.119"
  }, {
    "id": 11,
    "first_name": "Di",
    "last_name": "Capehorn",
    "email": "dcapehorna@nytimes.com",
    "gender": "Female",
    "ip_address": "2.67.123.97"
  }, {
    "id": 12,
    "first_name": "Yank",
    "last_name": "Carnilian",
    "email": "ycarnilianb@wufoo.com",
    "gender": "Male",
    "ip_address": "231.149.36.76"
  }, {
    "id": 13,
    "first_name": "Teodor",
    "last_name": "Edginton",
    "email": "tedgintonc@sciencedirect.com",
    "gender": "Male",
    "ip_address": "57.172.148.19"
  }, {
    "id": 14,
    "first_name": "Culley",
    "last_name": "Dahle",
    "email": "cdahled@admin.ch",
    "gender": "Male",
    "ip_address": "30.24.244.58"
  }, {
    "id": 15,
    "first_name": "Magdaia",
    "last_name": "Ibanez",
    "email": "mibaneze@tinyurl.com",
    "gender": "Female",
    "ip_address": "89.181.35.208"
  }, {
    "id": 16,
    "first_name": "Hanny",
    "last_name": "Coolahan",
    "email": "hcoolahanf@live.com",
    "gender": "Female",
    "ip_address": "111.250.179.144"
  }, {
    "id": 17,
    "first_name": "Willey",
    "last_name": "Trulock",
    "email": "wtrulockg@opera.com",
    "gender": "Male",
    "ip_address": "25.57.199.161"
  }, {
    "id": 18,
    "first_name": "Nat",
    "last_name": "Puttnam",
    "email": "nputtnamh@salon.com",
    "gender": "Male",
    "ip_address": "149.174.124.118"
  }, {
    "id": 19,
    "first_name": "Willis",
    "last_name": "Stannard",
    "email": "wstannardi@businessinsider.com",
    "gender": "Male",
    "ip_address": "75.120.119.144"
  }, {
    "id": 20,
    "first_name": "Berna",
    "last_name": "Tommaseo",
    "email": "btommaseoj@topsy.com",
    "gender": "Female",
    "ip_address": "47.103.126.90"
  }, {
    "id": 21,
    "first_name": "Jan",
    "last_name": "Pitt",
    "email": "jpittk@ebay.co.uk",
    "gender": "Female",
    "ip_address": "177.131.19.90"
  }, {
    "id": 22,
    "first_name": "Marylin",
    "last_name": "Krolle",
    "email": "mkrollel@github.com",
    "gender": "Female",
    "ip_address": "102.239.246.183"
  }, {
    "id": 23,
    "first_name": "Yalonda",
    "last_name": "Lillistone",
    "email": "ylillistonem@privacy.gov.au",
    "gender": "Female",
    "ip_address": "229.156.105.98"
  }, {
    "id": 24,
    "first_name": "Donaugh",
    "last_name": "O'Codihie",
    "email": "docodihien@scribd.com",
    "gender": "Male",
    "ip_address": "138.220.144.17"
  }, {
    "id": 25,
    "first_name": "Valentina",
    "last_name": "Happer",
    "email": "vhappero@eventbrite.com",
    "gender": "Female",
    "ip_address": "212.99.64.94"
  }, {
    "id": 26,
    "first_name": "Noam",
    "last_name": "Dougher",
    "email": "ndougherp@mozilla.com",
    "gender": "Male",
    "ip_address": "219.114.238.229"
  }, {
    "id": 27,
    "first_name": "Gasparo",
    "last_name": "Busby",
    "email": "gbusbyq@sourceforge.net",
    "gender": "Male",
    "ip_address": "185.42.38.125"
  }, {
    "id": 28,
    "first_name": "Roderic",
    "last_name": "O'Sesnane",
    "email": "rosesnaner@omniture.com",
    "gender": "Male",
    "ip_address": "81.79.178.177"
  }, {
    "id": 29,
    "first_name": "Christine",
    "last_name": "Beecker",
    "email": "cbeeckers@house.gov",
    "gender": "Female",
    "ip_address": "227.30.29.48"
  }, {
    "id": 30,
    "first_name": "Steffie",
    "last_name": "Garbert",
    "email": "sgarbertt@java.com",
    "gender": "Female",
    "ip_address": "56.196.75.75"
  }];
  public registros: any;


  public CONFIGURACION_TABLA: any = {
    "order": [[3, "desc"]],
    "language": {
      "sProcessing": "Procesando...",
      "sLengthMenu": "Mostrar _MENU_ registros",
      "sZeroRecords": "No se encontraron resultados",
      "sEmptyTable": "Ningún dato disponible en esta tabla",
      "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
      "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
      "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sInfoPostFix": "",
      "sSearch": "Buscar:",
      "sUrl": "",
      "sInfoThousands": ",",
      "sLoadingRecords": "Cargando...",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
      }
    },
    "lengthMenu": [5, 10, 25, 50, 100]
  };
  
  constructor() { }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';
import { ImgBase64Globals } from './img_reportes';


declare var $: any;
declare var jsPDF: any;
declare var jQuery: any;

@Component({
  selector: 'app-editor-wysiwyg',
  templateUrl: './editor-wysiwyg.component.html',
  styleUrls: ['./editor-wysiwyg.component.css'],
  providers: [ImgBase64Globals]
})

export class EditorWysiwygComponent implements OnInit {
  // public optionsss: Object = {
  //   placeholderText: 'Edit Your Content Here!',
  //   language: 'es'
  // }
  //https://i.froala.com/assets/photo4.jpg

  public CABECERA: any;
  public CUERPO: any;
  public logoCbes: any;
  public logoLabo: any;
  public titulo_formulario: any;
  public lugar_procedencia: any ='';
  public cod_reg: any ='';
  public mat_tit: any ='';
  public mat_bene: any ='';
  public nombre_paciente: any ='';
  public nombre_medico: any ='';
  public fecha_solicitud: any ='';
  public fecha_entrega: any ='';

	public CONTENT: any;
	public CONTENT2: any;

  paciente = 'Efrain Llusco Colque';
  


  constructor(
    private logo: ImgBase64Globals
  ) {
      this.logoCbes = this.logo.logocabecera;
      this.logoLabo = this.logo.logolaboratorio;
   }

  ngOnInit() {
		

    //console.log(this.logo.logolaboratorio)
    $.FroalaEditor.DefineIconTemplate('efra', '<i class="fa fa-[NAME]" style="color:#286090;"></i> ');
    $.FroalaEditor.DefineIcon('Guardar', { NAME: 'save', template: 'efra' });
    $.FroalaEditor.RegisterCommand('Guardar', {
      title: 'Guardar',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: () => {
        //console.log('Hello!::>', this.content);
      }
    });

    this.titulo_formulario = `SERVICIO DE LABORATORIO CLÍNICO
    "BACTERIOLÓGICA"`;


    this.CABECERA = `
    <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
        <img src="${this.logoCbes}" alt="Cbes" class="img-rounded" data-type="image" style="width: 200px;">
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 center bg-labo">
      ${this.titulo_formulario}
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 center">
        <img src="${this.logoLabo}" alt="Labo" class="img-rounded" data-type="image" style="width: 80px;">
      </div>
		</div>
		<br>
		<div class="row color">
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>LUGAR: ${this.lugar_procedencia}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>COD. REG.: ${this.cod_reg}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>PACIENTE: ${this.nombre_paciente}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>MATRICULA TIT.: ${this.mat_tit}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>MATRICULA B.: ${this.mat_bene}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>MEDICO: ${this.nombre_medico}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>FECHA DE SOLICITUD: ${this.fecha_solicitud}</b>
			</div>
			<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 ">
			<b>FECHA DE ENTREGA: ${this.fecha_entrega}</b>
			</div>
		</div>
				
    `;
		
		this.CUERPO = `
		
		`;

    //
		this.CONTENT2 = `efrasss`;
    this.CONTENT = `
		${this.CABECERA}
		${this.CUERPO}
    `
//     this.CONTENT = `
// 		<table>
//     <thead>
//         <tr>
//             <th>The table header</th>
//             <th>The table header</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>The table body</td>
//             <td>with two columns</td>
//         </tr>
//     </tbody>
//     <tfoot>
//         <tr>
//             <td>The table footer</td>
//             <td>The table footer</td>
//         </tr>
//     </tfoot>
// </table>
//     `
		
  }

  public options: Object = {
    language: 'es',
    // charCounterCount: true,
    // toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'Guardar'],
    // toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','Guardar'],
    // toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','Guardar'],
    // toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','Guardar'],
  };

  ver() {
    console.log('paciente::>', this.CONTENT2);
  }

	imprimir() {
		let doc = new jsPDF('p', 'mm', 'letter');
		// We'll make our own renderer to skip this editor
		// var specialElementHandlers = {
		// 	'#editor': function(element, renderer){
		// 		return true;
		// 	},
		// 	'.controls': function(element, renderer){
		// 		return true;
		// 	}
		// };
		
		console.log($('.fr-view').get(0))
		let html = $('#editor').froalaEditor('html.get', true);
		doc.fromHTML(html, 15, 15, {
			'width': 30, 
			//'elementHandlers': specialElementHandlers
		}, function (dispose) {
			doc.save('thisMotion.pdf');
		});
	}

	save(){
		//$('#editor').froalaEditor('save.save');
		//console.log($('#editor').froalaEditor('save.save'))
		console.log($('#editor').froalaEditor('html.get', true));
	}
}

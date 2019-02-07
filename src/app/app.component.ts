import { Component, Input } from '@angular/core';

declare var jQuery: any;
declare var $: any;
declare var swal;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localstorage';

  grupoFamiliar: Persona[];
  listaGrupoFamiliar: Persona[];
  indexFamiliar: number;

  public nombrecom: string = '';
  public parentesco: string = '';
  public edad: string = '';
  public estado_civil: string = '';
  public grado: string = '';
  public ocupacion: string = '';
  public grupofam = [];
  public listagrupofam: any;
  editar: boolean = false;

  showModalGrupo() {
    this.setearValores();
    $('#mdlGrupoFam').modal();
  }


  getGrupoFamiliar(): Persona[] {
    if (localStorage.getItem("grupo") === null) {
      this.grupoFamiliar = [];
    }
    else {
      this.grupoFamiliar = JSON.parse(localStorage.getItem("grupo"));
    }
    return this.grupoFamiliar;
  }

  addFamiliar(familiar: Persona): void {
    let grupoFam;
    if (localStorage.getItem("grupo") === null) {
      grupoFam = [];
    }
    else {
      grupoFam = JSON.parse(localStorage.getItem("grupo"));
    }
    grupoFam.unshift(familiar);
    localStorage.setItem("grupo", JSON.stringify(grupoFam));
  }

  removeFamiliar(familiar: Persona) {
    for (let i = 0; i < this.grupoFamiliar.length; i++) {
      if (JSON.stringify(familiar) === JSON.stringify(this.grupoFamiliar[i])) {
        this.grupoFamiliar.splice(i, 1);
        localStorage.setItem("grupo", JSON.stringify(this.grupoFamiliar));
      }
    }
  }

  adicionarFamiliar() {
    if(this.validarCamposGrupoFamiliar()){
      let familiar: Persona = {
        nombrecom: this.nombrecom,
        parentesco: this.parentesco,
        edad: this.edad,
        estado_civil: this.estado_civil,
        grado: this.grado,
        ocupacion: this.ocupacion
      };
      this.addFamiliar(familiar);
      $('#mdlGrupoFam').modal('hide');
      this.setearValores();
      this.listarGrupoFamiliar();
    }
    else{
      alert('Complete los campos.');
    }    
  }

  validarCamposGrupoFamiliar(): boolean {
    let valido: boolean = false;
    if ((this.nombrecom.trim() != '' && this.nombrecom != undefined)
      && (this.parentesco.trim() != '' && this.parentesco != undefined)
      && (this.edad.trim() != '' && this.edad != undefined)
      && (this.estado_civil.trim() != '' && this.estado_civil != undefined)
    ) {
      valido = true;
    }
    return valido;
  }

  listarGrupoFamiliar() {
    this.listaGrupoFamiliar = this.getGrupoFamiliar();
  }

  eliminarFamiliar(familiar: Persona) {
    swal({
      title: 'Esta seguro de eliminar el registro?',
      text: "No podra revertir este proceso!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.value) {
        this.removeFamiliar(familiar);
      }
    })
  }

  ////////////////////////////
  // registrarGrupoLocalStorage() {

  //   if (localStorage.getItem("grupo") === null) {
  //     this.grupofam = [];
  //     this.grupofam.push({
  //       nombrecom: this.nombrecom,
  //       parentesco: this.parentesco,
  //       edad: this.edad,
  //       estado_civil: this.estado_civil,
  //       grado: this.grado,
  //       ocupacion: this.ocupacion
  //     })
  //     localStorage.setItem("grupo", JSON.stringify(this.grupofam));
  //   }
  //   else {
  //     this.grupofam = JSON.parse(localStorage.getItem("grupo"));
  //     this.grupofam.push({
  //       nombrecom: this.nombrecom,
  //       parentesco: this.parentesco,
  //       edad: this.edad,
  //       estado_civil: this.estado_civil,
  //       grado: this.grado,
  //       ocupacion: this.ocupacion
  //     })
  //     localStorage.setItem("grupo", JSON.stringify(this.grupofam));
  //   }

  //   $('#mdlGrupoFam').modal('hide');
  //   this.setearValores();
  //   this.listarGrupoLocalStorage();
  // }

  // listarGrupoLocalStorage() {
  //   this.listagrupofam = JSON.parse(localStorage.getItem("grupo"));
  // }

  // eliminarRegistroLocalStorage(regisro: any) {
  //   this.listagrupofam = JSON.parse(localStorage.getItem("grupo"));

  //   swal({
  //     title: 'Esta seguro de eliminar el registro?',
  //     text: "No podra revertir este proceso!",
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si, Eliminar!'
  //   }).then((result) => {
  //     if (result.value) {
  //       console.log('Grupo a Eliminar:', this.listagrupofam);
  //       for (let i = 0; i < this.listagrupofam.length; i++) {
  //         //const element = array[index];
  //         if (JSON.stringify(regisro) === JSON.stringify(this.listagrupofam[i])) {
  //           console.log('Se elimino:', this.listagrupofam[i]);
  //           this.listagrupofam.splice(i, 1);
  //           localStorage.setItem("grupo", JSON.stringify(this.listagrupofam));
  //         }
  //       }
  //     }
  //   })


  // }

  // mostrarDatosFamiliar(registro: any, index: number) {
  //   this.nombrecom = registro.nombrecom;
  //   this.parentesco = registro.parentesco;
  //   this.edad = registro.edad;
  //   this.estado_civil = registro.estado_civil;
  //   this.grado = registro.grado;
  //   this.ocupacion = registro.ocupacion;
  //   $('#mdlGrupoFam').modal();
  //   this.editar = true;
  //   console.log('el index es::', index);
  //   this.indexFamiliar = index;
  // }



  setearValores() {
    this.nombrecom = '';
    this.parentesco = '';
    this.edad = '';
    this.estado_civil = '';
    this.grado = '';
    this.ocupacion = '';
  }
}

interface Persona {
  nombrecom: string;
  parentesco: string;
  edad: string;
  estado_civil: string;
  grado: string;
  ocupacion: string;
}




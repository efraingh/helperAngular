import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DiasComponent } from './components/dias/dias.component';
import { JspdfComponent } from './components/jspdf/jspdf.component';
import { CvsFileComponent } from './components/cvs-file/cvs-file.component';
import { FuncionComponent } from './funciones/funcion.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from './components/qr/qr.component';
//import { Angular2Csv } from 'angular2-csv';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTableBsComponent } from './components/data-table-bs/data-table-bs.component';
import { DataTablesModule } from 'angular-datatables';

import { EditorWysiwygComponent } from './components/editor-wysiwyg/editor-wysiwyg.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SubirExcelComponent } from './components/subir-excel/subir-excel.component';
import { ListboxSelectComponent } from './components/listbox-select/listbox-select.component';

import { AngularDualListBoxModule } from 'angular-dual-listbox';

import {DataTableModule} from "angular-6-datatable";



@NgModule({
  declarations: [
    AppComponent,
    DiasComponent,
    JspdfComponent,
    CvsFileComponent,
    FuncionComponent,
    QrComponent,
    DataTableBsComponent,
    EditorWysiwygComponent,
    SubirExcelComponent,
    ListboxSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule,
    DataTablesModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    AngularDualListBoxModule,
    DataTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

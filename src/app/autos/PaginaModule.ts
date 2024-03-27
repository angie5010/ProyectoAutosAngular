import { NgModule } from "@angular/core";


import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { ListaAutosComponent } from "./lista-autos/lista-autos.component";
import { PagAutoComponent } from "./PagAuto/PagAuto.component";
import { RouterModule } from "@angular/router";
import { PagRegistroComponent } from "./PagRegistro/PagRegistro.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule, 
        ReactiveFormsModule,
        
        
    ],
    declarations: [
        ListaAutosComponent,
        PagAutoComponent,
        PagRegistroComponent
        
    ],
    exports: [
        ListaAutosComponent,
        PagAutoComponent,
        PagRegistroComponent
        ]
})

export class PaginaModule{

}
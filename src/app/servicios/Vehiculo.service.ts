import { Injectable } from '@angular/core';
import { Respuesta, Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map, observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  
  constructor(private http:HttpClient) { 
    
  }
  baseUrl: string = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private arregloAutos: Array<Vehiculo>=[]; 
  /*
  getVehiculos():Observable<Vehiculo[]>{
      return this.http.get<Respuesta>(this.baseUrl+"vehiculos/").pipe(
          map(respuesta=>{
              return respuesta.data;
          })
      );
  }*/
  
  insertVehiculo(vehiculo: Vehiculo){
    return this.http.post<Respuesta>(this.baseUrl+"vehiculo/",vehiculo, this.httpOptions)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      })
  );*/
    //return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
  }
  getVehiculo(codigo:string):Observable<Respuesta>{
    return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      })
      );*/
  }
  actualizarVehiculo(vehiculo: Vehiculo, codigo:string){
    return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo, this.httpOptions)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      }));*/
  }

  eliminarVehiculo(codigo:string){
    return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo)
    /*.pipe(
      map(respuesta=>{
          return respuesta.data;
      })
      );
    */
   }

   getVehiculos(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{
    let body = new HttpParams();
    body = filtro ? body.set("filtro", filtro) : body;
    body = rows ? body.set("rows", rows) : body;
    body = page ? body.set("page", page) : body;
    return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body})
    /*.pipe(
        map(respuesta => respuesta.data),
        //catchError (this.handleError)
    );*/
}
    

  /*
  getvehiculos(filtro?:string, rows?:number, page?:number):Observable<Vehiculo[]>{
      let body = new HttpParams();
      body = filtro ? body.set("filtro", filtro) : body;
      body = rous ? body.set("rows", rows) : body;
      body = page ? body.set("page", page) : body;
      return this.http.get<Respuesta>(this.baseUrl+"vehiculos/", {params:body}).pipe(
          map(respuesta => respuesta.data),
          //catchError (this.handleError)
      );
  }
  
  handleError(error: HttpErrorResponse) {

      let errorMessage = 'Error desconocido';
      if (error.error instanceof ErrorEvent) {
      // Error del cliente
          errorMessage = `Error: ${error.error.message}`;
      } else {
      
      // El servidor devolvió un codigo de err
          errorMessage = `Codigo: ${error.status}, Mensaje: ${error.message}`;
      }
      console.error(errorMessage) ;
      return throwError(errorMessage) ;
      
  }
  */
/*
constructor() { }
getVehiculos(filtro:any): Observable<Array<Vehiculo>> {
  const escucha: Observable<Array<Vehiculo>> = new Observable( escuchando =>{
    let lista = this.arregloAutos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()) )
    escuchando.next(lista);
    });
  return escucha;
}
getVehiculo(codigo:string): Observable<Vehiculo|undefined>{
  const escucha: Observable<Vehiculo|undefined> = new Observable( escuchando =>{
  let vehiculo = this.arregloAutos.find(ele => ele.codigo === codigo);
  escuchando.next(vehiculo);
  });
  return escucha;
}
addVehiculo(vehiculo:Vehiculo){
  this.arregloAutos.push(vehiculo);
}
*/
/*
 private arregloAutos: Array<Vehiculo> = [       
  { 
    codigo: "1",
    imagenURL: "../../../assets/ImagenAuto/Toyota corolla sedan-potencia.png",
    marca: "Toyota",
    modelo: "Corolla-1",
    year: "2018",
    color: "Gris",
    kilometraje: "50000",
    precio: 15000,
    calificacion: 3
  },
  { 
    codigo: "2",
    imagenURL: "../../../assets/ImagenAuto/Ford.jpg",
    marca: "Ford",
    modelo: "Mustang-2",
    year: "2020",
    color: "Rojo",
    kilometraje: "10000",
    precio: 35000,
    calificacion: 4.8
  },
  { 
    codigo: "3",
    imagenURL: "../../../assets/ImagenAuto/Volkswagen-2019_Golf-8759.jpg",
    marca: "Volkswagen",
    modelo: "Golf",
    year: "2019",
    color: "Azul",
    kilometraje: "35000",
    precio: 20000,
    calificacion: 2
  },
  { 
    codigo: "4",
    imagenURL: "../../../assets/ImagenAuto/BMW.png",
    marca: "BMW",
    modelo: "Serie-3",
    year: "2017",
    color: "Negro",
    kilometraje: "60000",
    precio: 25000,
    calificacion: 4.6
  },
  { 
    codigo: "5",
    imagenURL: "../../../assets/ImagenAuto/Mercedes.jpg",
    marca: "Mercedes-Benz",
    modelo: "Clase C",
    year: "2021",
    color: "Blanco",
    kilometraje: "5000",
    precio: 40000,
    calificacion: 4.9
  }

];
*/
}
/*
export interface Vehiculo{
  codigo: string;
  marca: string;
  color?: string;
  modelo: string;
  kilometraje?:string;
  precio? :number;
  foto?:string | null;
  anio?: number;
  calificacion? :number;
}
 
  */


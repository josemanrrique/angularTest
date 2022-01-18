import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MagoModel } from '../models/MagoModel';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {
  private endPoint = "http://hp-api.herokuapp.com/api/characters";

  private _houses: BehaviorSubject<string[]> = new BehaviorSubject(['slytherin', 'gryffindor', 'ravenclaw' ,'hufflepuff'])
  get houses() :string[] { return [...this._houses.value] }
  houses$(): Observable<string[]> { return this._houses.asObservable() }
  //http://hp-api.herokuapp.com/api/characters/house/ravenclaw
  //http://hp-api.herokuapp.com/api/characters/students
  //http://hp-api.herokuapp.com/api/characters/staff
  constructor(
    private _http: HttpClient
  ) { }

  getFamous(house:string):Observable<any> {  
    return <any>this._http.get(`${this.endPoint}/house/${house}`).pipe(map((e) => {return this.processData(e)}));
  }
  getProfessors():Observable<any> {  
    return <any>this._http.get(`${this.endPoint}/staff`).pipe(map((e) => {return this.processData(e)}));
  }
  getStudents():Observable<any> {  
    return <any>this._http.get(`${this.endPoint}/students`).pipe(map((e) => {return this.processData(e)}));
  }

  processData(data:any):Observable<any> {  
    return  data.map((e: MagoModel) => { 
      let dateOfBirth = e.dateOfBirth != "" ?  `${e.dateOfBirth.substring(6, 10)}-${e.dateOfBirth.substring(3, 5)}-${e.dateOfBirth.substring(0, 2)}`: "";
      return { 
        ...e, 
        age: (dateOfBirth != "") ? this.calcularEdad(dateOfBirth) : ""
       } 
    });;
  }
  calcularEdad(fecha: string) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }
}

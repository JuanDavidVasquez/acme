import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
import { Vehiculo } from "../models/vehiculo";



@Injectable()
export class VehiculoService{
	public url:string;
	public identity;
	public token;
	public stats;

	constructor(public _http: HttpClient){
		this.url = GLOBAL.url;
	}

	register(vehiculo: Vehiculo): Observable<any>{
		let params = JSON.stringify(vehiculo);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'register', params, {headers:headers});
	}

	signup(vehiculo:any, gettoken = null): Observable<any>{
		if(gettoken != null){
			vehiculo.gettoken = gettoken;
		}

		let params = JSON.stringify(vehiculo);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'login', params, {headers: headers});
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}
	getToken(){
		let token = localStorage.getItem('token');

		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token;
	}
	getStats(){
		let stats = JSON.parse(localStorage.getItem('stats'));

		if(stats != "undefined"){
			this.stats = stats;
		}else{
			this.stats = null;
		}

		return this.stats;
	}
	getCounters(vehiculoId = null): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		if(vehiculoId != null){
			return this._http.get(this.url+'counters/'+vehiculoId, {headers: headers});
		}else{
			return this._http.get(this.url+'counters', {headers: headers});
		}

	}
	updateVehiculo(vehiculo: Vehiculo):Observable<any>{
		let params = JSON.stringify(vehiculo);
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		return this._http.put(this.url+'update-vehiculo/'+vehiculo._id, params, {headers: headers});
	}
	updateColaborador(vehiculo: Vehiculo, token:any):Observable<any>{
		let params = JSON.stringify(vehiculo);
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.token);

		return this._http.put(this.url+'update-vehiculo/'+vehiculo._id, params, {headers: headers});
	}
	getVehiculos():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		return this._http.get(this.url+'vehiculos/', {headers: headers});
	}
	getVehiculo(id:any):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		//.set('Authorization',this.token);

		return this._http.get(this.url+'vehiculo/'+id, {headers: headers});
	}
	searchVehiculo(searchString: string):Observable<any>{
		return this._http.get(this.url+'search-vehiculo/'+searchString);
	}
	searchVehiculoid(searchString2: string):Observable<any>{
		return this._http.get(this.url+'search-vehiculoid/'+searchString2);
	}

}
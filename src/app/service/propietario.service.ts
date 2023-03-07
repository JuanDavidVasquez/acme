import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
import { Propietario } from "../models/propietario";



@Injectable()
export class PropietarioService{
	public url:string;
	public identity;
	public token;
	public stats;

	constructor(public _http: HttpClient){
		this.url = GLOBAL.url;
	}

	register(propietario: Propietario): Observable<any>{
		let params = JSON.stringify(propietario);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'register', params, {headers:headers});
	}

	signup(propietario:any, gettoken = null): Observable<any>{
		if(gettoken != null){
			propietario.gettoken = gettoken;
		}

		let params = JSON.stringify(propietario);
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

	getCounters(propietarioId = null): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		if(propietarioId != null){
			return this._http.get(this.url+'counters/'+propietarioId, {headers: headers});
		}else{
			return this._http.get(this.url+'counters', {headers: headers});
		}

	}

	updatePropietario(propietario: Propietario):Observable<any>{
		let params = JSON.stringify(propietario);
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		return this._http.put(this.url+'update-propietario/'+propietario._id, params, {headers: headers});
	}

	updateColaborador(propietario: Propietario, token:any):Observable<any>{
		let params = JSON.stringify(propietario);
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.token);

		return this._http.put(this.url+'update-propietario/'+propietario._id, params, {headers: headers});
	}

	getPropietarios():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		return this._http.get(this.url+'propietarios/', {headers: headers});
	}

	getPropietario(id:any):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		//.set('Authorization',this.token);

		return this._http.get(this.url+'propietario/'+id, {headers: headers});
	}
	searchPropietario(searchString: string):Observable<any>{
		return this._http.get(this.url+'search-propietario/'+searchString);
	}
	searchPropietarioid(searchString2: string):Observable<any>{
		return this._http.get(this.url+'search-propietarioid/'+searchString2);
	}

}
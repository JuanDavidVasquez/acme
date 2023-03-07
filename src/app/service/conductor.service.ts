import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GLOBAL } from "./global";
import { Conductor } from "../models/conductor";



@Injectable()
export class ConductorService{
	public url:string;
	public identity;
	public token;
	public stats;

	constructor(public _http: HttpClient){
		this.url = GLOBAL.url;
	}

	register(conductor: Conductor): Observable<any>{
		let params = JSON.stringify(conductor);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'register', params, {headers:headers});
	}

	signup(conductor:any, gettoken = null): Observable<any>{
		if(gettoken != null){
			conductor.gettoken = gettoken;
		}

		let params = JSON.stringify(conductor);
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
	getCounters(conductorId = null): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		if(conductorId != null){
			return this._http.get(this.url+'counters/'+conductorId, {headers: headers});
		}else{
			return this._http.get(this.url+'counters', {headers: headers});
		}

	}
	updateConductor(conductor: Conductor):Observable<any>{
		let params = JSON.stringify(conductor);
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		return this._http.put(this.url+'update-conductor/'+conductor._id, params, {headers: headers});
	}
	updateColaborador(conductor: Conductor, token:any):Observable<any>{
		let params = JSON.stringify(conductor);
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.token);

		return this._http.put(this.url+'update-conductor/'+conductor._id, params, {headers: headers});
	}
	getConductors():Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json')
									   .set('Authorization',this.getToken());

		return this._http.get(this.url+'conductors/', {headers: headers});
	}
	getConductor(id:any):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		//.set('Authorization',this.token);

		return this._http.get(this.url+'conductor/'+id, {headers: headers});
	}
	searchConductor(searchString: string):Observable<any>{
		return this._http.get(this.url+'search-conductor/'+searchString);
	}
	searchConductorid(searchString2: string):Observable<any>{
		return this._http.get(this.url+'search-conductorid/'+searchString2);
	}

}
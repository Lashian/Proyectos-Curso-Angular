import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "6bKjd23Reh5VYtwgwEk2qHRZ765NHkZE";
  private _historial:string[]=[];
  private servicioUrl = "https://api.giphy.com/v1/gifs";

  public resultados :Gif[]=[];
  

  get historial():string[]{
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    //localStorage.getItem("historial");
    if(localStorage.getItem("historial")){
      this._historial = JSON.parse(localStorage.getItem("historial")!);
      this.resultados = JSON.parse(localStorage.getItem("resultados")!)
    }
  }
  
  buscarGifs( query:string){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("limit", "10")
    .set("q", query);
    
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params: params})
    .subscribe((resp)=>{
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem("resultados", JSON.stringify(this.resultados));
    }) 


    //forma 1
    /* fetch("https://api.giphy.com/v1/gifs/search?api_key=6bKjd23Reh5VYtwgwEk2qHRZ765NHkZE&q=Latias&limit=10")
    .then (resp => {
      resp.json().then(data => console.log(data))
    })*/

    //forma 2
    /*const resp = await fetch("https://api.giphy.com/v1/gifs/search?api_key=6bKjd23Reh5VYtwgwEk2qHRZ765NHkZE&q=Latias&limit=10");
    const data = await resp.json();
    console.log(data);*/
  }
}

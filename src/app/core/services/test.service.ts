import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': 'ca2685b57fmsh1085f59ad40955dp175f68jsnbad52a130ccc',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url: string = 'http://api.weatherstack.com/current?access_key=5d1944e67e74ede03d686ac6c8955570&query=Lviv';
  constructor(
    private _http: HttpClient,
  ) { }

  getRecipe() {
    return this._http.get(this.url);
  }
}

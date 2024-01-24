import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovieApi:any = 'https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
  
  searchApi:any = 'https://api.themoviedb.org/3/search/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&query=${searchApi}&page=1&include_adult=false';

   getMovieDetails:any ='https://api.themoviedb.org/3/movie/${getMovieDetails}?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US';

  constructor(private _httpClient: HttpClient) { }
      
   getMovie():Observable<any>{
    return this._httpClient.get(this.getMovieApi);
  }

  searchMovie(api_key:any,language:any,query:any,page:any,include_adult:any):Observable<any>{
    const params = new HttpParams()
      .set("api_key",api_key)
      .set("language",language)
      .set("query" , query)
      .set("page" , page)
      .set("include_adult" , include_adult)

    return this._httpClient.get(this.searchApi,{params:params});
  }

  getMovieDetail(getMovieDetails:any,api_key:any,language:any):Observable<any>{
    const params = new HttpParams()
    .set("getMovieDetails",getMovieDetails)
    .set("api_key",api_key)
    .set("language",language)

    return this._httpClient.post(this.getMovieDetails,{params:params});
  }
  }

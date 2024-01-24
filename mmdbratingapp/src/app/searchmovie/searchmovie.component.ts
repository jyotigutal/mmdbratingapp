import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  myFormGroup! : FormGroup;
  searchValue :any[] =[];
  getValue:any=null;
  constructor(private _movieService:MovieService) {
      this._movieService.getMovie().subscribe((res)=>{
      // console.log('Getting the Data ',res.results);
      this.searchValue = res.results;
    })
   }

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      searchbox : new FormControl('')
     })
  }

  search(event: any) {
   const searchbox = this.myFormGroup.get('searchbox')?.value;
    // console.log(searchbox);

   this._movieService.searchMovie('5c06fed2cdf4dfcdab132d9e67c1c2e7','en-US',searchbox,'1','false').subscribe((res)=>{
    // console.log('Searching Data',res.results);
    this.searchValue = res.results;
   })
}

getMovie(event:Event,movie:any):void{
  event.preventDefault();
  console.log('Getting Movie Details',movie);
  this.getValue=movie;
}
}
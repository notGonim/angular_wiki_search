import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private http: HttpClient) {}

  search(term: string) {
return this.http.get('https://en.wikipedia.org/w/api.php',{
  params:{
    action:'query',
    format:'json',
    list:'list',
    utf8:'1',
    srsearch:term,
    origin:'*'
  }
})
  }
}

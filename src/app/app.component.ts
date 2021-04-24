import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page = [];
  constructor(private Wiki: WikiService) {}

  onTerm(term: string) {
    this.Wiki.search(term).subscribe((res:any) => {
      this.page = res.query.search;
    });
  }
}

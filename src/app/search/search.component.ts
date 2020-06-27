import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Etude angular');
    this.meta.addTag({name:'viewport', content:'width=device-width, initial-scale=1.0'})
   }

  ngOnInit() {  }

  

}

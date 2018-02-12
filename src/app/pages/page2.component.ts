import { Component } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'page-2',
   templateUrl: './template.component.html',
     styleUrls: ['./pages.component.scss']
})
export class Page2 {
    text = 'Page 2';
    pageid = 2;
    
    constructor( private pagesService : PagesService) {}
    
    
}

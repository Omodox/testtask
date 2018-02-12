import { Component } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'page-3',
  templateUrl: './template.component.html',
     styleUrls: ['./pages.component.scss']
})
export class Page3 {
  text = 'Page 3';
  pageid = 3;
    
      constructor( private pagesService : PagesService) {}
}

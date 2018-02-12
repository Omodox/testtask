import { Component} from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'page-1',
  templateUrl: './template.component.html',
 styleUrls: ['./pages.component.scss'],


})
export class Page1 {
  text = 'Page 1';
  pageid = 1;
    
     constructor( private pagesService : PagesService) {}
 
}

    


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PagesService {

        pages = [
        {id: 1 , url :  '/page1'},
        {id: 2 , url :  '/page2'},
        {id: 3 , url :  '/page3'}
        
    ];
    
    constructor(private router : Router) {}
    
        nextPage(pageid) {
      
   if ( pageid >= this.pages.length)  this.router.navigate([this.pages[0]['url']]);
     if ( pageid < this.pages.length)  this.router.navigate([this.pages[pageid]['url']]);
    }
    
       prevPage(pageid) {
     if ( pageid == 1)  this.router.navigate([this.pages[2]['url']]);
     else  this.router.navigate([this.pages[pageid -2]['url']]);
    }
    
 

}

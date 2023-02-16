import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent{
 
  plush:any = [];
  plushFejlec: any = ['creator', 'name']
  constructor(private http: HttpClient) { }

 getData(){
   return this.http.get('https://infra-hulling-376212-default-rtdb.europe-west1.firebasedatabase.app/plushies.json')
   .pipe(      
   
    map( plush => {
        let ujPlush: any[] = [];
        Object.entries(plush).forEach( ([key, value]) =>{
          ujPlush.push(plush);
          console.log(plush)
        });
        return ujPlush;
      }        
    ),
  )
  .subscribe( (plush: any[]) =>{
      this.plush = plush;
    }
  );
  }
}

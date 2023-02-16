
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-plushie',
  templateUrl: './new-plushie.component.html',
  styleUrls: ['./new-plushie.component.scss']
})
export class NewPlushieComponent {

  name: string = "";
  szize: number = 0;

  constructor() { 
    
  }

}
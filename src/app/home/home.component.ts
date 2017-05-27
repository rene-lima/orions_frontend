import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: `home.component.html`
})

export class HomeComponent {
  public formNews: FormGroup;
  public submitted: boolean; 
  public events: any[] = []; 
  public mkt_show = false;
  public servSuccess = false;
  public nomeFuncao = 'showMkt';  
  status_mkt = '+'
  EMAIL_REGEXP = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  tel_REGEXP =  /^\d+$/;

  constructor(private _fb: FormBuilder){}

  ngOnInit(){
      this.formNews = this._fb.group({
        nome: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        email: ['', [<any>Validators.required, Validators.pattern(this.EMAIL_REGEXP)]],
        telefone: ['']
    })
  }

  enviaNews(){
        this.submitted = true; 
        if(this.formNews.valid){
          this.servSuccess = true;
          console.log("chegamos aqui")
        }
  }

  showMkt(){
    if (this.mkt_show){
      this.mkt_show = false;
      this.status_mkt = '+'
    }else{
    this.mkt_show = true;
    this.status_mkt = '-'  
    }
  }

  closeMkt(){
    this.mkt_show = false;
    this.status_mkt = '+'
  }
}


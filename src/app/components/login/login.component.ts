import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit { 
  loginForm: FormGroup

  constructor(private FormB:FormBuilder, private serv:UsuarioService, private httpClient: HttpClient, private vista:Router) { }


  ngOnInit(): void {
    this.loginForm = this.FormB.group({
      Usuario:[''],
      Contrasena:['']
    });

  }
 
  login(){

    if(this.loginForm.value.Usuario == '' || this.loginForm.value.Contraseña == ''){
      alert("Los campos no pueden estar vacios");

    }else{
      this.httpClient.post<any>('http://localhost:3050/login', this.loginForm.value)
    .subscribe( res => {
     if(res==false){
        
        alert('Los datos no son correctos');
      }else{
        alert( 'iniciando sesión');
        this.vista.navigate(['vista']);

      }

    });
    }
  
    
  }
}
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuarios } from 'src/app/usuarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  registrarForm: FormGroup
  user: Usuarios;

  constructor(private FormB:FormBuilder, private serv:UsuarioService, private httpClient: HttpClient ,private login:Router) { }

  ngOnInit(): void {
    this.registrarForm = this.FormB.group({
      Nombre:[''],
      Usuario:[''],
      Contrasena:['']
    })
  }


  registro() {
    if(this.registrarForm.value.Nombre==''||this.registrarForm.value.Usuario==''||this.registrarForm.value.Contrasena==''){
      alert('Los campos no pueden estar vacios');
    }else{
      console.log(this.registrarForm.value)
      this.httpClient.post('http://localhost:3050/add', this.registrarForm.value)
      .subscribe( res => {
        if(res){
          alert('El usuario se encuentra registarado');
          this.login.navigate(['login']);
        }else {
          alert('Error en el registro');
        }
  
        
      });

    }
   
  }
}

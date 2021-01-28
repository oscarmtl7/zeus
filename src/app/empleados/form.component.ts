import { Component, OnInit } from '@angular/core';
import {Empleado} from './empleado';
import { EmpleadoService } from './empleado.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  public titulo: string = "Crear empleado"
  public errores: String[] | undefined;



  constructor(private empleadoService: EmpleadoService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {}
    title="Crear usuario";


  public create(): void{
    
  }


}

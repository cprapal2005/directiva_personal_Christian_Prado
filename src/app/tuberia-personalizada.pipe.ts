import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tuberiaPersonalizada'
})
export class TuberiaPersonalizadaPipe implements PipeTransform {

  palabraResultante: string = "";
  palabras: string[] = [];

  transform(value: string, args: string[]): string {

    this.palabras = value.split(' ');

    this.palabras.forEach(palabraCortada =>{

      args.forEach(palabraMalsonante =>{

      if(palabraMalsonante===palabraCortada) palabraCortada = "***";

      });

      this.palabraResultante += palabraCortada + " "; 

    })

    return this.palabraResultante.trimEnd();

  }

}

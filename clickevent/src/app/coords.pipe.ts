import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coords'
})
export class CoordsPipe implements PipeTransform {

  transform(value:any): unknown {
    return "x-coords="+value.a+","+ "y-coords="+value.b;
  }

}

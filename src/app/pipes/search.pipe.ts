import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(items: Array<any>,
    firstname: string,
    ){

    if (items && items.length){
        return items.filter(item =>{
            if (firstname && item.name.toLowerCase().indexOf(firstname.toLowerCase()) === -1){
                return false;
            }

            return true;
       })
    }
    else{
        return items;
    }
  }
}

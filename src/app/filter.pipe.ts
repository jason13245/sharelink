import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lists: any, args: any): any {
    if(args == "")return lists;
    return lists.filter(list=> list.tag.toLowerCase().includes(args.toLowerCase()));
  }
}

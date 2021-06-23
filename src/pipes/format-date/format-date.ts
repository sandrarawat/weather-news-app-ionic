import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
/**
 * Generated class for the FormatDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, format = 'YYYY-MM-DD') {
    return moment.unix(value).format(format);
  }
}
/*
Source : github
*/
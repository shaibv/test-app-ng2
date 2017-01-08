import {Injectable} from '@angular/core'
import {DataEntry} from '../data-entry.ts'
import {DATA} from './static-data

@Injectable()
export class DataService{

  getData():DataEntry[]{
       return DATA;

  }

}

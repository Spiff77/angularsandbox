import {Person} from './person.model';
import {Product} from './product.model';

export class Client extends Person{
  constructor(id: number,
              firstname: string,
              lastname: string,
              active?: boolean,
              age?: number,
              public products: Product[] = []) {
    super(id, firstname, lastname, active, age);
  }
}

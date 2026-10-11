import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Keyza!';
  }
  getCats(): string {
    return 'mew mew';
  }

  getName(): string {
    return 'hello' + '' + name;
  }
 
  
    }

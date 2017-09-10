import {NotifyService} from './notify';
import {Injectable} from '@angular/core';

@Injectable()
export class EmailService implements NotifyService {

  notify(msg: string): void {
    console.log('email sent: ' + msg);
  }

}

import {NotifyService} from './notify';

export class SmsService implements NotifyService {

  notify(msg: string): void {
    console.log('SMS sent: ' + msg);
  }

}

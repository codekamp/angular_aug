import {Inject, Injectable} from '@angular/core';
import {NotifyService} from './notify';


@Injectable()
export class VideoService {

  constructor(@Inject('NotifyService') notifyServie: NotifyService) {

  }

  getVideoList(): any[] {
    console.log('getVideoList function called');
    return [];
  }

  updateVideo(title: string, descrition: string) {
    // code to save video here
  }
}

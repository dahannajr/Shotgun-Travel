import { ProcessHTTPMsgProvider } from './../process-http-msg/process-http-msg';
import { Shotgun } from './../../shared/shotgun';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ShotgunProvider {

  constructor(private restangular: Restangular,
    private processHttpMsgService: ProcessHTTPMsgProvider) {
    console.log('Hello SbotgunProvider Provider');
  }

  createShotgun(): Observable<Shotgun> {
    let shotgun = new Shotgun();

    return this.restangular.all('shotguns')
      .post(shotgun)
      .map(f => f,
        error => this.processHttpMsgService.handleError(error));
  }
}

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Service } from '../../models/service';

export interface GetAll$Params {
}

export function getAll(http: HttpClient, rootUrl: string, params?: GetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Service>>> {
  const rb = new RequestBuilder(rootUrl, getAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Service>>;
    })
  );
}

getAll.PATH = '/service/All';

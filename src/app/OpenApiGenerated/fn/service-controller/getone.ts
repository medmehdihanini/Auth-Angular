/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Service } from '../../models/service';

export interface Getone$Params {
  id: number;
}

export function getone(http: HttpClient, rootUrl: string, params: Getone$Params, context?: HttpContext): Observable<StrictHttpResponse<Service>> {
  const rb = new RequestBuilder(rootUrl, getone.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Service>;
    })
  );
}

getone.PATH = '/service/get/{id}';

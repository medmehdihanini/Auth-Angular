/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthentificationRequest } from '../../models/authentification-request';
import { AuthentificationResponse } from '../../models/authentification-response';

export interface Authentification$Params {
      body: AuthentificationRequest
}

export function authentification(http: HttpClient, rootUrl: string, params: Authentification$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthentificationResponse>> {
  const rb = new RequestBuilder(rootUrl, authentification.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthentificationResponse>;
    })
  );
}

authentification.PATH = '/auth/authificate';

/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Categorie } from '../../models/categorie';

export interface Add1$Params {
      body: Categorie
}

export function add1(http: HttpClient, rootUrl: string, params: Add1$Params, context?: HttpContext): Observable<StrictHttpResponse<Categorie>> {
  const rb = new RequestBuilder(rootUrl, add1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Categorie>;
    })
  );
}

add1.PATH = '/categ/add';

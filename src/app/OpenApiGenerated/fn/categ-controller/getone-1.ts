/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Categorie } from '../../models/categorie';

export interface Getone1$Params {
  id: number;
}

export function getone1(http: HttpClient, rootUrl: string, params: Getone1$Params, context?: HttpContext): Observable<StrictHttpResponse<Categorie>> {
  const rb = new RequestBuilder(rootUrl, getone1.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getone1.PATH = '/categ/get/{id}';

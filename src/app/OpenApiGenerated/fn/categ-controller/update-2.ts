/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Categorie } from '../../models/categorie';

export interface Update2$Params {
      body: Categorie
}

export function update2(http: HttpClient, rootUrl: string, params: Update2$Params, context?: HttpContext): Observable<StrictHttpResponse<Categorie>> {
  const rb = new RequestBuilder(rootUrl, update2.PATH, 'put');
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

update2.PATH = '/categ/Update';

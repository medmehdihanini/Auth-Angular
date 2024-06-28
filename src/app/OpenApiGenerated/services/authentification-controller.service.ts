/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authentification } from '../fn/authentification-controller/authentification';
import { Authentification$Params } from '../fn/authentification-controller/authentification';
import { AuthentificationResponse } from '../models/authentification-response';
import { confiormAccount } from '../fn/authentification-controller/confiorm-account';
import { ConfiormAccount$Params } from '../fn/authentification-controller/confiorm-account';
import { registre_1 } from '../fn/authentification-controller/registre-1';
import { Registre_1$Params } from '../fn/authentification-controller/registre-1';

@Injectable({ providedIn: 'root' })
export class AuthentificationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `registre_1()` */
  static readonly Registre_1Path = '/auth/registre';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registre_1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registre_1$Response(params: Registre_1$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return registre_1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registre_1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registre_1(params: Registre_1$Params, context?: HttpContext): Observable<{
}> {
    return this.registre_1$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `authentification()` */
  static readonly AuthentificationPath = '/auth/authificate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authentification()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authentification$Response(params: Authentification$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthentificationResponse>> {
    return authentification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authentification$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authentification(params: Authentification$Params, context?: HttpContext): Observable<AuthentificationResponse> {
    return this.authentification$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthentificationResponse>): AuthentificationResponse => r.body)
    );
  }

  /** Path part for operation `confiormAccount()` */
  static readonly ConfiormAccountPath = '/auth/activate-account';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confiormAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  confiormAccount$Response(params: ConfiormAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confiormAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confiormAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confiormAccount(params: ConfiormAccount$Params, context?: HttpContext): Observable<void> {
    return this.confiormAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

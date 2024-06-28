/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/user-controller/delete-1';
import { Delete1$Params } from '../fn/user-controller/delete-1';
import { getAll1 } from '../fn/user-controller/get-all-1';
import { GetAll1$Params } from '../fn/user-controller/get-all-1';
import { login } from '../fn/user-controller/login';
import { Login$Params } from '../fn/user-controller/login';
import { registre } from '../fn/user-controller/registre';
import { Registre$Params } from '../fn/user-controller/registre';
import { update1 } from '../fn/user-controller/update-1';
import { Update1$Params } from '../fn/user-controller/update-1';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `update1()` */
  static readonly Update1Path = '/foyer/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: Update1$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return update1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: Update1$Params, context?: HttpContext): Observable<User> {
    return this.update1$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/foyer/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<User> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `registre()` */
  static readonly RegistrePath = '/foyer/Registre';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registre()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registre$Response(params: Registre$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return registre(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registre$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registre(params: Registre$Params, context?: HttpContext): Observable<User> {
    return this.registre$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `getAll1()` */
  static readonly GetAll1Path = '/foyer/All';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll1$Response(params?: GetAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return getAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll1(params?: GetAll1$Params, context?: HttpContext): Observable<Array<User>> {
    return this.getAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/foyer/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

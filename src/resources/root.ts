// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as RootAPI from './root';

export class Root extends APIResource {
  /**
   * Welcome
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/', { ...options, headers: { Accept: 'text/html', ...options?.headers } });
  }
}

export type RootRetrieveResponse = string;

export namespace Root {
  export import RootRetrieveResponse = RootAPI.RootRetrieveResponse;
}

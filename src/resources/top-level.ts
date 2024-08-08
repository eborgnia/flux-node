// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';
import * as ClassificationsAPI from './classifications';

export type ClassifyResponse = Array<ClassificationsAPI.ClassificationResponse>;

export interface ClassifyParams {
  input: string | Array<string>;

  labels: Array<string>;
}

export namespace TopLevel {
  export import ClassifyResponse = TopLevelAPI.ClassifyResponse;
  export import ClassifyParams = TopLevelAPI.ClassifyParams;
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as ClassificationsAPI from './classifications';

export class Classifications extends APIResource {}

export interface ClassificationResponse {
  input: string;

  labels: Array<Record<string, string | number>>;
}

export namespace Classifications {
  export import ClassificationResponse = ClassificationsAPI.ClassificationResponse;
}

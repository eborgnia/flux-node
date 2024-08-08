// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Flux from 'flux-client';
import { Response } from 'node-fetch';

const client = new Flux({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('top level methods', () => {
  test('classify: only required params', async () => {
    const responsePromise = client.classify({ input: 'string', labels: ['string', 'string', 'string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('classify: required and optional params', async () => {
    const response = await client.classify({ input: 'string', labels: ['string', 'string', 'string'] });
  });
});
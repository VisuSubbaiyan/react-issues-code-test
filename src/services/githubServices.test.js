import githubAPI from './githubServices';
import { sampleIssues, mockRequest } from '../helpers/testUtil';

// jest.mock(mockRequest);
githubAPI.get = mockRequest;

describe('githubAPI should', () => {
  it('fetch issues list', async () => {
    const result = await githubAPI.get('/issues').then(res => res.data);

    expect(result).toEqual(sampleIssues);
  });
});

import React from 'react';
import fs from 'fs';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { prettyPrint } from 'html';

import { theme } from './config';

export const sampleIssues = [
  {
    "url": "https://api.github.com/repos/facebook/react/issues/14974",
    "repository_url": "https://api.github.com/repos/facebook/react",
    "labels_url": "https://api.github.com/repos/facebook/react/issues/14974/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/react/issues/14974/comments",
    "events_url": "https://api.github.com/repos/facebook/react/issues/14974/events",
    "html_url": "https://github.com/facebook/react/pull/14974",
    "id": 415565783,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjU3MDIzNTU3",
    "number": 14974,
    "title": "Fix act() tests by properly unmounting the container",
    "user": {
      "login": "philipp-spiess",
      "id": 458591,
      "node_id": "MDQ6VXNlcjQ1ODU5MQ==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/458591?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/philipp-spiess",
      "html_url": "https://github.com/philipp-spiess",
      "followers_url": "https://api.github.com/users/philipp-spiess/followers",
      "following_url": "https://api.github.com/users/philipp-spiess/following{/other_user}",
      "gists_url": "https://api.github.com/users/philipp-spiess/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/philipp-spiess/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/philipp-spiess/subscriptions",
      "organizations_url": "https://api.github.com/users/philipp-spiess/orgs",
      "repos_url": "https://api.github.com/users/philipp-spiess/repos",
      "events_url": "https://api.github.com/users/philipp-spiess/events{/privacy}",
      "received_events_url": "https://api.github.com/users/philipp-spiess/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 196858374,
        "node_id": "MDU6TGFiZWwxOTY4NTgzNzQ=",
        "url": "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        "name": "CLA Signed",
        "color": "e7e7e7",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2019-02-28T11:01:15Z",
    "updated_at": "2019-02-28T11:09:49Z",
    "closed_at": null,
    "author_association": "COLLABORATOR",
    "pull_request": {
      "url": "https://api.github.com/repos/facebook/react/pulls/14974",
      "html_url": "https://github.com/facebook/react/pull/14974",
      "diff_url": "https://github.com/facebook/react/pull/14974.diff",
      "patch_url": "https://github.com/facebook/react/pull/14974.patch"
    },
    "body": "While playing around with the new `act()` API I discovered a test that\r\nwas unexpectedly failing. After some digging I noticed that the test is\r\npassing when run in isolation and that the test suite can be fixe by\r\nproperly calling `ReactDOM.unmountComponentAtNode()` to clean up after\r\nevery test run.\r\n\r\nYou can reproduce the issue by simply commenting out the call to\r\n`unmountComponentAtNode` in the `afterEach` callback. The newly added\r\ntest will fail but pass in isolation.\r\n\r\nI thought it would be a good idea to fix this upstream so nobody runs\r\ninto this issue again."
  },
  {
    "url": "https://api.github.com/repos/facebook/react/issues/15030",
    "repository_url": "https://api.github.com/repos/facebook/react",
    "labels_url": "https://api.github.com/repos/facebook/react/issues/15030/labels{/name}",
    "comments_url": "https://api.github.com/repos/facebook/react/issues/15030/comments",
    "events_url": "https://api.github.com/repos/facebook/react/issues/15030/events",
    "html_url": "https://github.com/facebook/react/pull/15030",
    "id": 417620384,
    "node_id": "MDExOlB1bGxSZXF1ZXN0MjU4NTc2NzQx",
    "number": 15030,
    "title": "Test suspended children are hidden before layout in persistent mode",
    "user": {
      "login": "acdlite",
      "id": 3624098,
      "node_id": "MDQ6VXNlcjM2MjQwOTg=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/3624098?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/acdlite",
      "html_url": "https://github.com/acdlite",
      "followers_url": "https://api.github.com/users/acdlite/followers",
      "following_url": "https://api.github.com/users/acdlite/following{/other_user}",
      "gists_url": "https://api.github.com/users/acdlite/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/acdlite/subscriptions",
      "organizations_url": "https://api.github.com/users/acdlite/orgs",
      "repos_url": "https://api.github.com/users/acdlite/repos",
      "events_url": "https://api.github.com/users/acdlite/events{/privacy}",
      "received_events_url": "https://api.github.com/users/acdlite/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 196858374,
        "node_id": "MDU6TGFiZWwxOTY4NTgzNzQ=",
        "url": "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        "name": "CLA Signed",
        "color": "e7e7e7",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 1,
    "created_at": "2019-03-06T04:43:07Z",
    "updated_at": "2019-03-06T04:56:15Z",
    "closed_at": null,
    "author_association": "MEMBER",
    "pull_request": {
      "url": "https://api.github.com/repos/facebook/react/pulls/15030",
      "html_url": "https://github.com/facebook/react/pull/15030",
      "diff_url": "https://github.com/facebook/react/pull/15030.diff",
      "patch_url": "https://github.com/facebook/react/pull/15030.patch"
    },
    "body": "## Based on #15029 and #15013\r\n\r\nRefs behave differently in persistent mode, so instead of a ref, the persistent mode version of this test asserts on the output of the host tree."
  }
];

export const createMountedComponent = ({ children, isShallow }) => {
  const component = (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
  const mountedComponent = isShallow ? shallow(component) : mount(component);
  mountedComponent.htmlRender = () => prettyPrint(mountedComponent.html(), { indent_size: 2 });

  return mountedComponent;
};

export const sampleText = 'sample text';

export const mockRequest = (url) => new Promise((resolve, reject) => {
  // Load user json data from a file in de subfolder for mock data
  fs.readFile('src/helpers/serviceMock.json', 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ data: JSON.parse(data) })
  })
})

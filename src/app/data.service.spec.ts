import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[service]
    });
    service = TestBed.inject(DataService);
  });
  it('should be created', () => {
    expect(service.getDashboardData).toBeGreaterThan(0);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('#getDashboardData', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[service]
    });
    service = TestBed.inject(DataService);
  });
  it('should return an Observable<User[]>', () => {
    const dummyUsers: any[] = {
      "total_count": 111928,
      "incomplete_results": false,
      "items": [{
          "login": "ss",
          "id": 21958992,
          "node_id": "MDQ6VXNlcjIxOTU4OTky",
          "avatar_url": "https://avatars.githubusercontent.com/u/21958992?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ss",
          "html_url": "https://github.com/ss",
          "followers_url": "https://api.github.com/users/ss/followers",
          "following_url": "https://api.github.com/users/ss/following{/other_user}",
          "gists_url": "https://api.github.com/users/ss/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ss/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ss/subscriptions",
          "organizations_url": "https://api.github.com/users/ss/orgs",
          "repos_url": "https://api.github.com/users/ss/repos",
          "events_url": "https://api.github.com/users/ss/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ss/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        },
        {
          "login": "ValdikSS",
          "id": 3054729,
          "node_id": "MDQ6VXNlcjMwNTQ3Mjk=",
          "avatar_url": "https://avatars.githubusercontent.com/u/3054729?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ValdikSS",
          "html_url": "https://github.com/ValdikSS",
          "followers_url": "https://api.github.com/users/ValdikSS/followers",
          "following_url": "https://api.github.com/users/ValdikSS/following{/other_user}",
          "gists_url": "https://api.github.com/users/ValdikSS/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ValdikSS/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ValdikSS/subscriptions",
          "organizations_url": "https://api.github.com/users/ValdikSS/orgs",
          "repos_url": "https://api.github.com/users/ValdikSS/repos",
          "events_url": "https://api.github.com/users/ValdikSS/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ValdikSS/received_events",
          "type": "User",
          "site_admin": false,
          "score": 1.0
        }
      ]
    }

    service.getDashboardData('obj').subscribe(users => {
      expect(dummyUsers.length).toBe(2);
      expect(dummyUsers).toEqual(dummyUsers);
    });

    

  });
});

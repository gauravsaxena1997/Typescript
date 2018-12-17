import {GithubApi} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApi();
svc.getUserInfo('gurvsxen487', (user:User)=>{
    svc.getRepos('gurvsxen487', (repos:Repo[])=>{
        user.repos = repos;
        console.log(user);
    });
});


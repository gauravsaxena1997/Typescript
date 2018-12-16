import {GithubApi} from './GithubApiService';
import { User } from './User';

let svc = new GithubApi();
svc.getUserInfo('gurvsxen487', (user:User)=>{
    console.log(user)
});
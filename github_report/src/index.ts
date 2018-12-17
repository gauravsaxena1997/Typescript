import {GithubApi} from './GithubApiService';
import _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApi();
if (process.argv.length<3)  
    console.log('Please pass a username as command line argument.')
else {
    let userName = process.argv[2];
    svc.getUserInfo(userName, (user:User)=>{
        svc.getRepos(userName, (repos:Repo[])=>{
            let sorted_array = _.sortBy(repos, [(repo:Repo) => repo.size * -1]);
            let filtered_array = _.take(sorted_array,5);
            user.repos = filtered_array;
            console.log(user);
        });
    });
}



"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApi();
svc.getUserInfo('gurvsxen487', function (user) {
    svc.getRepos('gurvsxen487', function (repos) {
        user.repos = repos;
        console.log(user);
    });
});

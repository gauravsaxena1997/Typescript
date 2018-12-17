"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var lodash_1 = __importDefault(require("lodash"));
var svc = new GithubApiService_1.GithubApi();
if (process.argv.length < 3)
    console.log('Please pass a username as command line argument.');
else {
    var userName_1 = process.argv[2];
    svc.getUserInfo(userName_1, function (user) {
        svc.getRepos(userName_1, function (repos) {
            var sorted_array = lodash_1.default.sortBy(repos, [function (repo) { return repo.size * -1; }]);
            var filtered_array = lodash_1.default.take(sorted_array, 5);
            user.repos = filtered_array;
            console.log(user);
        });
    });
}

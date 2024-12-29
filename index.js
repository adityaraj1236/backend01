import * as dotenv from 'dotenv';
import express from "express";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000; // Default to 4000 if not set in the .env file


const githubdata = {
        "login": "adityaraj1236",
        "id": 148902901,
        "node_id": "U_kgDOCOAT9Q",
        "avatar_url": "https://avatars.githubusercontent.com/u/148902901?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/adityaraj1236",
        "html_url": "https://github.com/adityaraj1236",
        "followers_url": "https://api.github.com/users/adityaraj1236/followers",
        "following_url": "https://api.github.com/users/adityaraj1236/following{/other_user}",
        "gists_url": "https://api.github.com/users/adityaraj1236/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/adityaraj1236/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/adityaraj1236/subscriptions",
        "organizations_url": "https://api.github.com/users/adityaraj1236/orgs",
        "repos_url": "https://api.github.com/users/adityaraj1236/repos",
        "events_url": "https://api.github.com/users/adityaraj1236/events{/privacy}",
        "received_events_url": "https://api.github.com/users/adityaraj1236/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 32,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2023-10-24T18:12:21Z",
        "updated_at": "2024-12-16T17:09:58Z"
      }


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/twitter', (req, res) => {
    res.send('Welcome to twitter');
});

app.get('/login', (req, res) => {
    res.send('Welcome back to your login page');
});

app.get('/youtube', (req, res) => {
    res.send('Welcome to your own youtube');
});

app.get('/world', (req, res) => {
    res.send('Welcome to your world of Aditya where princess is Priya');
});

app.get('/github' ,  (req,res)=>{
    res.json(githubdata)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

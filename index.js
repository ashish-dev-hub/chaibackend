require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

const githubData = {
  "login": "ashish-dev-hub",
  "id": 234760263,
  "node_id": "U_kgDODf4oRw",
  "avatar_url": "https://avatars.githubusercontent.com/u/234760263?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ashish-dev-hub",
  "html_url": "https://github.com/ashish-dev-hub",
  "followers_url": "https://api.github.com/users/ashish-dev-hub/followers",
  "following_url": "https://api.github.com/users/ashish-dev-hub/following{/other_user}",
  "gists_url": "https://api.github.com/users/ashish-dev-hub/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ashish-dev-hub/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ashish-dev-hub/subscriptions",
  "organizations_url": "https://api.github.com/users/ashish-dev-hub/orgs",
  "repos_url": "https://api.github.com/users/ashish-dev-hub/repos",
  "events_url": "https://api.github.com/users/ashish-dev-hub/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ashish-dev-hub/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ashish Kumar ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "MERN Stack Learner |  AI/ML Enthusiast |  Building Real-World Projects |  Continuously Learning & Growing",
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 9,
  "following": 12,
  "created_at": "2025-09-27T09:53:42Z",
  "updated_at": "2026-09-17T20:34:52Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Ashishkumar')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Ashish you tube channel</h2>")
})

app.get('/github', (req, res) => {
  res.json(githubData)
})


app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})
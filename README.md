# Unexpected middleware behaviour with Fresh 2.0.0-alpha.40

## Installation

```sh
git pull git@github.com:honmanyau/fresh-2.0.0-alpha.40-middleware-issue.git

cd fresh-2.0.0-alpha.40-middleware-issue
deno run build
deno run start
```

## Steps to reproduce

1. Navigate to `http://localhost:8000/sign-in`.
2. Observe that we end up on the custom error page with a 404.
3. In the console, observe in the stack trace that the HTTP error in `routes/admin/_middleware:7:9` was triggered.
4. Stop the server.
5. Modify `deno.json` to pin Fresh's version to `jsr:@fresh/core@2.0.0-alpha.37`.
6. Start the server again.
7. Navigate to `http://localhost:8000/sign-in` and no errors should be observed.
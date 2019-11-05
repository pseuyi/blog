const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/pseuyi/blog.git",
  },
  () => {
    console.log("finished deploying")
  }
)

const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss.feedPlugin, {
    type: "rss", // or "rss", "json"
    outputPath: "/rss.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 0,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "GameNight GPT",
      subtitle: "Gamenight Updates",
      base: "https://jiggabyte.github.io/",
      author: {
        name: "GameNight GPT",
        email: "info@gamenightgpt.com", // Optional
      }
    }
  });

  function postsIndexPlugin(eleventyConfig) {
  // Collection for all posts (for index page)
  eleventyConfig.addCollection("allPosts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/posts/**/*.md")
  );
}

 // Add the posts index plugin
  eleventyConfig.addPlugin(postsIndexPlugin);

  /* 1. RSS */
  eleventyConfig.addPlugin(pluginRss);

  /* 2. Blog collection */
  eleventyConfig.addCollection("posts", (col) =>
    col.getFilteredByGlob("src/posts/**/*.md").reverse()
  );

  /* 3. Absolute URL helper for feeds/emails */
  eleventyConfig.addFilter("abs", (url, site) =>
    pluginRss.absoluteUrl(url, site.url)
  );

  /* 4. Global data */
  return {
    dir: { input: "src", output: "dist" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // pathPrefix: "/",
    pathPrefix: "/gamenightgpt-site/dist",            // change if you deploy to /repo-name
  };
};

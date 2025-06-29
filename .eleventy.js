const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
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
    pathPrefix: "/gamenightgpt-site",            // change if you deploy to /repo-name
  };
};

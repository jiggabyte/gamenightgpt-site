const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss.feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml",
		collection: {
			name: "posts", // iterate over `collections.posts`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "GameNight GPT",
			subtitle: "",
			base: "http://localhost:8080/",
			author: {
				name: "GameNight GPT",
				email: "", // Optional
			}
		}
	});

  /* 1. RSS */
  // eleventyConfig.addPlugin(pluginRss);

  /* 2. Blog collection */
// eleventyConfig.addCollection("posts", (col) =>
//   col.getFilteredByGlob("src/posts/**/*.md").reverse()
// );

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
    pathPrefix: "/gamenightgpt-site/dist/",            // change if you deploy to /repo-name
  };
};

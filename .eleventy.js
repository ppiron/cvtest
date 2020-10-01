module.exports = function (eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};

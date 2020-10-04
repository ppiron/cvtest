module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("makeDate", function (value) {
    if (typeof value === "string") {
      return value;
    }
    const dat = new Date(Date.parse(value));
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
    return `${months[dat.getMonth()]}, ${dat.getFullYear()}`;
  });

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
    passthroughFileCopy: true,
  };
};


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin/")
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

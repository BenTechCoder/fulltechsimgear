
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/admin/")
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  const {
    DateTime
  } = require("luxon");

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yy-MM-dd');
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc'
  }).toFormat("dd-MM-yy");
});

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

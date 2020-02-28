module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("build");

  return {
    pathPrefix: "/css4",
  };
};

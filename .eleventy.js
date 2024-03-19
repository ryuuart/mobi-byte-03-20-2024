module.exports = function (eleventyConfig) {
    const INPUT_DIR = "src";

    eleventyConfig.addPassthroughCopy(`${INPUT_DIR}/styles/**/*.css`);
    eleventyConfig.addPassthroughCopy(`${INPUT_DIR}/js/**/*.js`);

    return {
        dir: {
            input: INPUT_DIR,
        }
    }
}
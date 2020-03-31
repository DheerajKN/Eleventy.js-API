module.exports = function(config) {
  config.addPassthroughCopy("client/src/assets");
  // node-sass src/ -o src/ &&
  return  {
    dir: {
      input: "client/src",
      output: "build",
      data: "_data"
    }
  };

};

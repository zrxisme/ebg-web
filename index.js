const glob = require("glob");
// 获取指定路径下的入口文件
function getEntries(globPath) {
    const files = glob.sync(globPath)
    files.forEach(function(filepath) {
      require(filepath)
    });
    return entries;
  }
  
  
getEntries("./components/**/index.css");

module.exports =  require("./components")


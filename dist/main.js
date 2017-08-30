'use strict';

/**
  * @author   milan(white gourd angel)
  * @describe webpack dev-mock loaders
  * ...
  */
module.exports = function (content) {
    var contents = content.split('\n');
    var isReplaceLine, replaceCode;
    var regx = /[ ]*\/\/[ ]*devCode[ ]*/;

    for (var i = 0; i < contents.length; i++) {
        if (contents[i] && regx.test(contents[i])) {
            isReplaceLine = true;
            replaceCode = contents[i].replace(regx, '').trim();
        } else if (isReplaceLine) {
            isReplaceLine = false;
            contents[i] = replaceCode;
        }
    }
    return contents.join('\n');
};
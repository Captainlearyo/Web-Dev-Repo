let chooseyEndings = function(words) {

    let suffix = 'er'
    let filteredWords = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (!word.endsWith(suffix)) {
        filteredWords.push(word);
      }
    }

    return filteredWords;
  };

module.exports = chooseyEndings;


//console.log(chooseyEndings(['er', 'abc' , 'ccer', 'ccc']))

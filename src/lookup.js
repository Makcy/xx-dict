const request = require('request');
const cheerio = require('cheerio');
const urlencode = require('urlencode');
const isChinese = require('is-chinese')

function lookup(word) {
  //  TODO: Ugly Code！！！
  if (!word) return;
  const isCn = isChinese(word);
  const URL = isCn ? `http://dict.youdao.com/w/eng/${urlencode(word)}`:`http://dict.youdao.com/w/${word}`
  request(URL, (err, response, body) => {
    const $ = cheerio.load(body);
    if(isCn){
      $('div.trans-container > ul').find('p.wordGroup').each(function(i,elm){
        var line = $(this).text().replace(/\s+/g," ");
        console.log(line);
      });
    }else{
      console.log($('div#phrsListTab > div.trans-container > ul').text());
    }
  });
};


module.exports = lookup;
/**
  TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl
  and it returns a short URL such as http://tinyurl.com/4e9iAk.

  Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. 
  You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
**/
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
function atob(a) {
    return new Buffer(a, 'base64').toString('binary');
};

function btoa(b) {
    return new Buffer(b).toString('base64');
};

var encode = function(longUrl) {
    return 'http://tinyurl.com/' + btoa(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return atob(shortUrl.replace("http://tinyurl.com/",""));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

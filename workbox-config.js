module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{json,ico,html,png,js,txt,jpg}",
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/sw.js",
  "maximumFileSizeToCacheInBytes": 1024 * 1024 * 10 , // 10 MB
};
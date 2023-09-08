import fakeFetch from './fakefetch.js';

const htmlData = [];

fakeFetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    // console.log(response); // this is the response object
    // console.log(response.html);
    htmlData.push(response.html);

    // if html data has length 2
    if (htmlData.length === 2) {
      // I must assume youtube is in the index 1
      console.log(htmlData[1], htmlData[0]);
    }
  })
  .catch((error) => console.log(error));

/* fakeFetch('https://upleveled-example.com')
  .then((response) => {
    // console.log(response); // this is the response object
    // console.log(response.html);
    htmlData.push(response.html);

    // if html data has length 2
    if (htmlData.length === 2) {
      // I must assume youtube is in the index 0
      console.log(htmlData[0], htmlData[1]);
    }
  })
  .catch((error) => console.log(error)); */

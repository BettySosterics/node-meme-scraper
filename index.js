import * as fs from 'node:fs';
// import { argv } from 'node:process';
// import url from 'node:url';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

// create MEMES folder

const path = './memes';

fs.access(path, (error) => {
  if (error) {
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully !!');
      }
    });
  } else {
    console.log('Given Directory already exists !!');
  }
});

// Access the website
const fetchWebsite = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const body = await fetchWebsite.text();

const images = parse(body).querySelector('#images').querySelectorAll('img');

// limit the number of images
images.splice(10);

let fileName = '';

const fileNameArray = [];

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    fileName = `0${i}.jpg`;
    fileNameArray.push(fileName);
  } else {
    fileName = `${i}.jpg`;
    fileNameArray.push(fileName);
  }
}

for (let i = 0; i <= 10; i++) {
  fetch(images[i])
    .then((response) => {
      const saveFile = fs.createWriteStream(`./memes/${fileNameArray[i]}`);
      response.body.pipe(saveFile);
    })
    .catch((error) => {
      console.error(error);
    });
}

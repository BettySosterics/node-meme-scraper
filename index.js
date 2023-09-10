import { promises as fs } from 'node:fs';
import { argv } from 'node:process';
// import url from 'node:url';
import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

// create MEMES folder

/*
const newFolder = './memes';

fs.access(newFolder, (error) => {
  if (error) {
    fs.mkdir(newFolder, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('New Directory created successfully !!');
      }
    });
  } else {
    console.log('Given Directory already exists !!');
  }
});*/

// Access the website

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
// console.log(response);
const body = await response.text();
// console.log(body);

const images = parse(body).querySelector('#images').querySelectorAll('img');
// console.log(images);

// limit the number of images

images.splice(10);
// console.log(images.length);

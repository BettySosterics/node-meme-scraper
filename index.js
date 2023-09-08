// import fs from 'node:fs';
// import path from 'node:path';
// import axios from 'axios';

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
});
/*
const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();
const blob = await response.blob().then(blob);
const objectURL = await URL.createObjectURL(blob);
console.log(data);
const myImage = document.querySelector('img');
const myRequest = new Request('flowers.jpg'); */

/*
fetch('https://memegen-link-examples-upleveled.netlify.app/').then(
  (response) => {
    response.blob().then((myBlob) => {
      const objectURL = URL.createObjectURL(myBlob);
      console.log(objectURL);
    });
  },
);
*/

import { promises as fs } from 'node:fs';

/*
const downloadImage = async (url, path) => {
  const response = await fetch('https://sabe.io/images/saturn.png');
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile('memes', buffer);
};

await downloadImage('https://sabe.io/images/saturn.png', './saturn.png'); */

const url =
  'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg';

const response = await fetch(url);

const blob = await response.blob();

const arrayBuffer = await blob.arrayBuffer();

const buffer = Buffer.from(arrayBuffer);

await fs.writeFile('./memes/and_you_should_feel_bad.jpg', buffer);

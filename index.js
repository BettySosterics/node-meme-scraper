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
});*/

import { promises as fs } from 'node:fs';
import { argv } from 'node:process';
import url from 'node:url';

// const imgUrl =

const myUrl = `https://memegen-link-examples-upleveled.netlify.app/`;
console.log(myUrl);
const response = await fetch(myUrl);
console.log(response);

// const blob = await response.blob();

// const arrayBuffer = await blob.arrayBuffer();

// const buffer = Buffer.from(arrayBuffer);

// await fs.writeFile('./memes/and_you_should_feel_bad.jpg', buffer);

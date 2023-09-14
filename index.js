import * as fs from 'node:fs';
import https from 'node:https';
import path from 'node:path';
import cheerio from 'cheerio';
// import download from 'download';
import fetch from 'node-fetch';

// create MEMES folder

const folderPath = './memes';

fs.access(folderPath, (err) => {
  if (err) {
    fs.mkdir(folderPath, (error) => {
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

const $ = cheerio.load(body);
const memeUrls = [];
$('img').each((index, element) => {
  memeUrls.push($(element).attr('src'));
});

const fetchedMemes = memeUrls.slice(0, 10);

for (let i = 0; i < fetchedMemes.length; i++) {
  const imageName = `${(i + 1).toString().padStart(2, '0')}.jpg`;
  const imagePath = path.join(folderPath, imageName);
  const imageFile = fs.createWriteStream(imagePath);
  https.get(fetchedMemes[i].src, (response) => response.pipe(imageFile));
}

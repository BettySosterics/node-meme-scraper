import * as fs from 'node:fs';
import path from 'node:path';
import cheerio from 'cheerio';
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
const website = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

const body = await website.text();

const $ = cheerio.load(body);

const arrayImages = [];
for (let i = 0; i <= 9; i++) {
  arrayImages.push($('a').find('img')[i].attribs.src);
}

arrayImages.forEach((image, index) => {
  const imageURL = image;

  // The path of the directory to save the image
  const dirPath = './memes';

  // The name of the image file
  let fileName = `0${index + 1}.jpg`;

  if (index === 9) {
    fileName = `${index + 1}.jpg`;
  }
  // Create the directory if it does not exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // Use fetch to get the image data as a buffer
  fetch(imageURL)
    .then((resp) => resp.arrayBuffer())
    .then((buffer) => {
      // convert arraybuffer into buffer
      const arrBuffer = buffer;
      const nodeBuffer = Buffer.from(arrBuffer);

      fs.writeFile(path.join(dirPath, fileName), nodeBuffer, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Image downloaded successfully');
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
});

import * as fs from 'node:fs';
import path from 'node:path';
import cheerio from 'cheerio';
import download from 'download';
import fetch from 'node-fetch';

// create MEMES folder

const folderPath = './memes';

fs.access(folderPath, (error) => {
  if (error) {
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

async function fetchMemes() {
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

  const first10Memes = memeUrls.slice(0, 10);

  for (let i = 0; i < first10Memes.length; i++) {
    const imageUrl = first10Memes[i];
    const imageName = `${(i + 1).toString().padStart(2, '0')}.jpg`;
    const imagePath = path.join(folderPath, imageName);

    if (!(await fileExists(imagePath))) {
      console.log(`Downloading ${imageName}...`);
      await download(imageUrl, imagePath);
    } else {
      console.log(`${imageName} already exists. Skipping...`);
    }
  }
}

async function fileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch (error) {
    return false;
  }
}

(async () => {
  try {
    await fetchMemes();
  } catch (error) {
    console.error('Error:', error.message);
  }
})()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Unhandled error:', error.message);
    process.exit(1);
  });

// limit the number of images

/* images.splice(10);

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
*/

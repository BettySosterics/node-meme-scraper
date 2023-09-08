export default function fakeFetch(url) {
  const time = Math.floor(Math.random() * 1800 + 200);

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          url,
          html: `<html><img>${url}</img></html>`,
          time: `${time} ms`,
        }),
      time,
    );
  });
}

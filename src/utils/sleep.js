const ONE_SECOND = 1_000;

const sleep = (seconds = 0) => new Promise((resolve) => {
  setTimeout(resolve, seconds * ONE_SECOND);
})

export { sleep };
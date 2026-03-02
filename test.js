console.log("starting test");

let p1 = new Promise(() => {
  setTimeout(() => console.log("Waiting for test to complete"), 3000);
});

p1.then(() => {
  console.log("Test complete");
});

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

console.log(aliceTumbling);

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

console.log(aliceTiming);

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/*
animate alice2 when alice1 has finished, and alice3 when alice2 has finished.

The animate() method returns an Animation object.

This object has a finished property, which is a Promise that is fulfilled when the animation has finished playing. So we can use this promise to know when to start the next animation.
*/

/*
First, implement something that works, but has the promise version of the "callback hell" problem we saw in our discussion of using callbacks.
*/

alice1.animate(aliceTumbling, aliceTiming).finished.then( () => {
  alice2.animate(aliceTumbling, aliceTiming).finished.then( () => {
    alice3.animate(aliceTumbling, aliceTiming);
  })
});
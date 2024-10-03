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
approach 2: promise chain 

Next, implement it as a promise chain. Note that there are a few different ways you can write this, because of the different forms you can use for an arrow function. Try some different forms. Which is the most concise? Which do you find the most readable?
*/

alice1.animate(aliceTumbling, aliceTiming).finished
 .then(() => { return alice2.animate(aliceTumbling, aliceTiming).finished })
 .then(() => { return alice3.animate(aliceTumbling, aliceTiming)});



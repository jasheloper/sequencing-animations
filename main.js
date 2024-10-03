const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/*
animate alice2 when alice1 has finished, and alice3 when alice2 has finished.

The animate() method returns an Animation object.

This object has a finished property, which is a Promise that is fulfilled when the animation has finished playing. So we can use this promise to know when to start the next animation.

implement it using async and await.
*/


async function hiAlice () {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished
    await alice2.animate(aliceTumbling, aliceTiming).finished
    await alice3.animate(aliceTumbling, aliceTiming).finished
    console.log("Done!")
  } catch (error) {
      console.log("Error.")
  }
}

hiAlice();
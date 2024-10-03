/*
approach 1: callback hell

First, implement something that works, but has the promise version of the "callback hell" problem we saw in our discussion of using callbacks.
*/

alice1.animate(aliceTumbling, aliceTiming).finished.then( () => {
    alice2.animate(aliceTumbling, aliceTiming).finished.then( () => {
      alice3.animate(aliceTumbling, aliceTiming);
    })
  });
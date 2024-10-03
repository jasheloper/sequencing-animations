/*
approach 2: promise chain 

Next, implement it as a promise chain. Note that there are a few different ways you can write this, because of the different forms you can use for an arrow function. Try some different forms. Which is the most concise? Which do you find the most readable?
*/

alice1.animate(aliceTumbling, aliceTiming).finished
 .then(() => { return alice2.animate(aliceTumbling, aliceTiming).finished })
 .then(() => { return alice3.animate(aliceTumbling, aliceTiming)});
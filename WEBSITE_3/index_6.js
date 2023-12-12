// Promises: Object that encapsulates the result of a asynchronous operation let asynchronous methods.
//return values like sychronous methods "I promise to return something in the future"
// The STATE is 'pending' then: 'fulfilled' or 'rejected'. The RESULT is what can be 
//returned producing & consuming

const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;
    if (fileLoaded) {
        resolve("File loaded");
    }
    else {
        reject("File Not Loaded");
    }
});
promise.then(value => console.log(value)).
    catch(error => console.log(error));


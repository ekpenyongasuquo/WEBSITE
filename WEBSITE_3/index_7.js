const promise = new Promise(resolve => {
    setTimeout(resolve, 5000);
});
promise.then(() => console.log("Thanks for waiting"));
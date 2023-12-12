// asyn = makes function return a Promise


/* async function loadFile() {
    let fileLoaded = true;
    if (fileLoaded) {
        return "File loaded";
    }
    else {
        throw "File Not Loaded";
    }
}
loadFile().then(value => console.log(value)).
    catch(error => console.log(error));
*/

// OR

function loadFile() {
    let fileLoaded = true;
    if (fileLoaded) {
        return Promise.resolve("File loaded");
    }
    else {
        return Promise.reject("File Not Loaded");
    }
}
loadFile().then(value => console.log(value)).
    catch(error => console.log(error));
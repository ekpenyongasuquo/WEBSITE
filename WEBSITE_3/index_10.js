// awiat = makes a async function wait for a Promise.
async function loadFile() {
    let fileLoaded = false;
    if (fileLoaded) {
        return "File loaded";
    }
    else {
        throw "File is Not loaded"
    }
}
async function startProcess() {
    try {
        let message = await loadFile();
        console.log(message);

    }
    catch (error) {
        console.log(error);
    }
}
startProcess()
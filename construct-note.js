// add whatever parameters you deem necessary

function constructNote(message, letters) {
    if (message.length !== letters.length) return false;

    let charMsg = frequencyCounter(message);
    let charLetters = frequencyCounter(letters);

    if (charMsg.length !== charLetters.length) return false;
    
    for (let el of charMsg.keys()){
        if (!charLetters.get(el) || charMsg.get(el) > charLetters.get(el)){
            return false;
        }
    }
    return true;
}

function frequencyCounter(str){
    let freqCount = new Map();
    for (let el of str){
        valCount = freqCount.get(el || 0);
        freqCount.set(el, valCount + 1);
    }
    return freqCount
}

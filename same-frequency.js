// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let int1Arr = int1.toString().split('').sort();
    let int2Arr = int2.toString().split('').sort();

    if(int1Arr.length !== int2Arr.length) return false;

    let freq1 = frequencyCounter(int1Arr);
    let freq2 = frequencyCounter(int2Arr);

    if(freq1.length !== freq2.length) return false;
    
    for (let el of freq2.keys()){
        if (!freq1.get(el) || freq2.get(el) > freq1.get(el)){
            return false;
        }
    }
    return true;
}

function frequencyCounter(int){
    let freq = new Map();

    for (let i of int){
        let valCount = freq.get(i) || 0;
        freq.set(i, valCount + 1);
    }
    return freq;
}
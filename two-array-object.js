// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    let obj = {}

    for (let i = 0; i < keys.length; i++){
        obj[keys[i]] = vals[i] === undefined ? null : vals[i];
    }
    return obj;
}

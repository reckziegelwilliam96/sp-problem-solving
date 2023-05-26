// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length -1;

    while (left < right){
        const sum = arr[left] + arr[right];
        if (sum === avg){
            return true;
        } else if (sum > avg){
            right--;
        } else if (sum < avg){
            left++;
        }
    }
    return false;
}
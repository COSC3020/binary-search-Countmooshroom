const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        //I just put in this quick sort feature since I can assume the list is sorted.
        //This code is based on https://www.w3schools.com/js/js_array_sort.asp
        arr.sort(function(a, b){return a - b});
        if(arr.length > 0) {
            //I changed this line so that the code also succeeds if the item found
            //is equal to the expected item (in case of duplicates)
            return binarySearch(arr, arr[0]) === 0 || arr[0] == arr[binarySearch(arr, arr[0])];
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);
function binarySearch(list, element) {
    //Initialize variables
    let low = 0;
    let high = list.length;
    let index = Math.floor(high / 2);
    //Loop while searching
    while (list[index] != element) {
        //Check if item isn't in list
        if (low + 1 >= high) {
            return -1;
        }
        //Element is lower
        if (list[index] > element) {
            high = index;
        }
        //Element is higher
        else {
            low = index;
        }
        //Find new midpoint
        index = Math.floor((high + low) / 2);
    }
    return index;
}

//Test code
/*list = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 14];
console.log("Index: " + binarySearch(list, 2));*/
function lastIndexOf(array, num) {
    /*for (i = array.length; i >= 0; --i) {
        if (num === array[i]) {
            return i
        };
    }*/
    var i = array.length;
    while (i >= 0) {
        if (num === array[i]) {
            return i} else {
            --i}
           }
       return -1
        }


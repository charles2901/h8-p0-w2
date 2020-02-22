    function xo(str) {
        var count_x = 0;
        var count_o = 0;

        for(i = 0; i < str.length; i++){
            if(str[i] == 'x'){
                count_x++;
            }
            else if(str[i] == 'o'){
                count_o++;
            }
        }
        if(count_x == count_o){
            return true;
        }
        return false;
    }
    
    // TEST CASES
    console.log(xo('xoxoxo')); // true
    console.log(xo('oxooxo')); // false
    console.log(xo('oxo')); // false
    console.log(xo('xxxooo')); // true
    console.log(xo('xoxooxxo')); // true
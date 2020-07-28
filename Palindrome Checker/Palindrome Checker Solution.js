const palindrome = str => {

    str = str.match(/[a-z]|[0-9]/gi).join('').toLowerCase();
    
    return str  === str .split('')
                        .reverse()
                        .join('');
    };

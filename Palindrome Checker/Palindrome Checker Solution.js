const palindrome = str =>


str
.match(/[a-z]|[0-9]/gi)
.join('')
.toLowerCase() === str
                    .split('')
                    .reverse()
                    .join('')
                    .match(/[a-z]|[0-9]/gi)
                    .join('')
                    .toLowerCase();

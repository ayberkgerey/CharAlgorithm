const writeRepeats = (str) => {
    const chars = {};

    for (const char of str)
        chars[char] = (chars[char] || 0) + 1;

    const result = Object.entries(chars).filter(char => char[1] === 2 || char[1] === 3);
    console.log(result);
    console.log(result.length + " letters repeat.");
}

const writeOneLetterDifference = (str1, str2) => {
    let differentChars= "";
    str2.split('').forEach(function(val, i){
        if (val != str1.charAt(i))
            differentChars += val ;
    });
    if(differentChars.length === 1)
        console.log( "Found " + differentChars);
    else
        console.log( "Not Found " + differentChars);
}

writeRepeats("lsrivfotzgdxpkefaqmuiygchj");
writeOneLetterDifference('lsrjvvotzbdxpkenaqmuwjgchj', 'lsrivuotzbdxpkeiaqxuwygchj');

const myObject = {
    js: 'javascript',
    py: 'python',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
    
}

// is forIn looop worlk for array?

const myArray = ['flash', 'batman', 'superman']

for (const key in myArray) {
    console.log(myArray[key]);
}
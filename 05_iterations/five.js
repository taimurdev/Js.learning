const coding = ["java", "python", "cpp", "ruby", "js"]

// coding.forEach( function (val){
//     console.log(val);
// })


// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) =>{
//     console.log(index, item, arr);
// })


const myCoding = [
    {
        languageName: 'java',
        languageFile: 'java'
    },
    {
        languageName: 'python',
        languageFile: 'py'
    },
    {
        languageName: 'cpp',
        languageFile: 'c++'
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName)
})
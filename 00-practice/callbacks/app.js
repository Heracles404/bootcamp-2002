// METHOD 1
// setTimeout(() => {
//     document.body.style.backgroundColor = 'coral';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'olive';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'maroon';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'skyblue';
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// METHOD 2
const delayedColorChange = (newColor, delay, doNext) =>{
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}
delayedColorChange('red', 1000, () => {
    delayedColorChange('coral', 1000, () => {
        delayedColorChange('maroon', 1000, () => {
            delayedColorChange('olive', 1000, () => {
                delayedColorChange('skyblue', 1000)
            })
        })
    })
})

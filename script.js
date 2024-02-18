//Є масив
//[false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null]
//Вивести цей масив без нуль-значень (null, 0, false ....).

const newArr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null]

const filterArr = newArr.filter((elem, i)=>{
    return (elem > 0)
})
console.log(filterArr)

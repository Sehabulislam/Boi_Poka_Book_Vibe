const getStoredBook = () =>{
    const storedBook = localStorage.getItem("readList")

    if(storedBook){
        const storedBookSTR = JSON.parse(storedBook);
        return storedBookSTR
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook()

    if(storedBookData.includes(id)){
        alert("bahi ei id already exist")
    }
    else{
        storedBookData.push(id)
        console.log(storedBookData);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList",data)
    }
}

export {addToStoredDB, getStoredBook};

// const getStoredBook = () =>{
//     const storedBook = localStorage.getItem("readList");

//     if(storedBook){
//         const storedBookSTR = JSON.parse(storedBook);
//         return storedBookSTR;
//     }
//     else{
//         return []
//     }
// }

// const addToStoredDB = (id) =>{
//     const storedBookData = getStoredBook();

//     if(storedBookData.includes(id)){
//         alert("ai id ase db te")
//     }else{
//         storedBookData.push(id);
//         console.log(storedBookData);
//     }
// }

// export {addToStoredDB}
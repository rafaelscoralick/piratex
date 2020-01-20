
export function favList( page ){
    const store = JSON.parse(localStorage.getItem("isFav")) || [];
    return  store.filter(item=>
        item.isFav === true
    );
}

export function isFav(imdbID){
    const store = JSON.parse(localStorage.getItem("isFav")) || [];
    const fav = store.find(item=>
        item.imdbID === imdbID
    );
    if(fav){
        return fav.isFav;
    }
    return false;
}

export function setFavo(imdbID, estado){
    const store = JSON.parse(localStorage.getItem("isFav")) || [];
    let fav = store.find(item=>
        item.imdbID === imdbID
    );
        console.log("fav", imdbID, estado);
        
    if(fav){
        fav.isFav = estado;
    }else{
        store.push({              
            imdbID: imdbID,
            isFav : estado  
        })
    }

    localStorage.setItem("isFav", JSON.stringify([...store]) )
}


export function isFav(imdbID){
    const store = JSON.parse(sessionStorage.getItem("isFav")) || [];
    const fav = store.find(item=>
        item.imdbID === imdbID
    );

    if(fav){
        return fav.isFav;
    }
    return false;
}

export function setFavo(imdbID, estado){
    const store = JSON.parse(sessionStorage.getItem("isFav")) || [];
    let fav = store.find(item=>
        item.imdbID === imdbID
    );
    
    if(!fav){
        fav = {              
            imdbID: imdbID,
            isFav : estado  
        }
        store.push(fav)
    }
    fav.isFav = estado;
    sessionStorage.setItem("isFav", JSON.stringify([...store]) )
}
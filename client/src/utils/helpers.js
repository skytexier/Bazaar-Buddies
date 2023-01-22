import {openDB} from 'idb'; 


export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('bazaar-buddies', 1);
        let db, tx, store;
        request.onupgradeneeded = function(e) {
            const db = request.result;
            
        }
    })
}
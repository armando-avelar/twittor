function actualizaCacheDinamico(dinamycCache, req, res){
    if(res.ok){
        return caches.open(dinamycCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    }else{
        return res;
    }
}
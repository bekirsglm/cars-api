exports.logger = (req, res, next) => {
       console.log("İstek Geldi👍", "METHOD", 
        req.method + "URL:" + req.url);

        // arayazılımdan sonra  çalışıcak fonksiyolar çalışsın
        next();
}
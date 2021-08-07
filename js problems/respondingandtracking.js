var keyCapture = function(){
    let keySeries = [];
    const validKeys = /^[abcdefghijklmnopqrstuvwxyz0123456789]$/;

    document.addEventListener("keydown", function(e){
        let key = e.key;
        if(key === "Enter") {
            console.log(keySeries);
            keySeries = [];
        }else if(validKeys.test(key.toLowerCase())) {
            keySeries.push(key);
        }
        //console.log(key);
    });
};

document.addEventListener('DOMContentLoaded', function(e){
    keyCapture();
})
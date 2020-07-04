let source = [
    "https://i.pinimg.com/564x/6b/8a/13/6b8a137d90cfbee5556eebe0ffe88931.jpg"
];

function preload(source, callback) { 
    let count = 0; 
    for (let i = 0; i < source.length; i++) { 
        let img = document.createElement('img'); 
        img.src = source[i]; 
        img.onload = img.onerror = function ()  {
            count++; 
            if (count == source.length) callback(); 
            };
    } 
}
function preloadExample() {
    for (let i = 0; i < source.length; i++) {
        let img = document.createElement('img');
        img.src = source[i];
        document.getElementById('block').append (img);

    }
}
preload(source, preloadExample);
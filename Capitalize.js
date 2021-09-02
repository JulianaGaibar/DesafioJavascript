function capitalize(text){
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
        
    var words= text.split(' ');
    var wordsCapitalized = [];
    for (let index = 0; index < words.length; index++) {
        wordCapitalized = capitalizeFirstLetter(words[index]);
        wordsCapitalized.push(wordCapitalized)
    }
    capitalizedText= wordsCapitalized.join(" ");
    return capitalizedText;
    
    var listaPares = obtenerPares(10,50);
    var total= sumar(listaPares);
    console.log(total);
}
console.log(capitalize("hola mundo feliz."));
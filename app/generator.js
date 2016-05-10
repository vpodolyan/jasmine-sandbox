exports.generateHelloWorlds = function(number) {
    var result = [];
    
    for (var i = 0; i < number; i++) {
        result.push("Hello World");
    }
    
    return result;
}
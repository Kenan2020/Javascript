MORSE_CODE = { ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
    "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M",
    "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
    "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", "-----": "0",
    ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6",
    "--...": "7", "---..": "8", "----.": "9" };

    function decodeMorse(str){
        let ch = "", w = "", tmp=[], ob = {}, s=0;
        let j = 0;
        let arr = str.replace(/\s\s\s/g, "*");
        
        
        
        
        for(let i=0; i<str.length; i++){

            if(str[i] != " "){
                ch = ch + str[i];
        }
        
       
            
    }
    ob[j] = ob[j] + ch
    return arr;
}
    let x = decodeMorse("..... .- ----   .-");
    //let x = MORSE_CODE[decodeMorse("..... .-")];
    console.log(x)
    
    
const fs = require("fs");
const path = require("path");

files = fs.readdirSync(path.join(__dirname, "scss/src/foundation"))

files.forEach(file => {
    if(file[0] === "_"){
    let fullContent = fs.readFileSync(path.join(__dirname, "/scss/src/foundation/" + file), "utf-8");
    allLinesArr = fullContent.split(/\r?\n/);
    allLinesArr.forEach(line => {
        let cssVariableStart = line.indexOf("(--isw")
        if( cssVariableStart > -1){
            let cssVariableKey = line.substring(cssVariableStart + 1 ,line.indexOf(","))
            let cssVariableValue = line.substring(line.lastIndexOf("$") , line.indexOf(")"))

            fs.appendFileSync(path.join(__dirname, "result.txt"),
               `${cssVariableKey}:#{${cssVariableValue}}\n`
             )
        }
    })
    }
})

    
    const string = "      FunctionUp    "

    const totrim =function totrim()
    {
        console.log(string.trim())
    }
    
    const tolowercase=  function tolowercase()
        {
            console.log(string.toLowerCase())
                        
        }
    const touppercase= function touppercase()
    {
    
    console.log(string.toUpperCase())
    }  


    module.exports.totrim=totrim
    module.exports.tolowercase=tolowercase
    module.exports.toUpperCase=touppercase
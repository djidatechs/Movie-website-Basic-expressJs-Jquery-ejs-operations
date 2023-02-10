const {custumFilter} = require("./functions")
const searching = require("./db.json")
function paginator () {
    return (req , res , next)=> {
        const input = req.query.search
        let output = custumFilter (input , searching); 
        const page = parseInt( req.query.page ) || 1  ; 
        const limit =  8 ;
        const startIndex = (page -1) * limit ; 
        const endIndex = page  * limit ; 
        const RESPONCE = {}
        RESPONCE.result = output.slice(startIndex,endIndex); 
        if (endIndex < output.length) RESPONCE.next = {page : page +1 , limit : limit }
        if (startIndex > 0)          RESPONCE.prev = {page : page -1 , limit : limit }
        RESPONCE.pagenum = Math.ceil (output.length / limit)
        RESPONCE.input = input 
        res.RESPONCE = RESPONCE ; 
        next();
    };
}
module.exports = paginator
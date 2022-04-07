let date_ob = new Date();
let dateinfo= function printDate()
{
   
   
    console.log(date_ob.getDate())


}
let monthinfo= function printMonth()
{
    console.log(date_ob.getMonth()+1)
}


let batchinfo=function getBatchinfo()
{
     console.log("Uranium batch"+"Week2"+"Day 3"+"The topic covered nodejs")
}
module.exports.date=dateinfo
module.exports.month=monthinfo
module.exports.batch=batchinfo


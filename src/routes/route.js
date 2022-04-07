const express = require('express');
const res = require('express/lib/response');
const logger= require('../logger/logger');
const info=require('../util/helper');
const stringoperation=require('../validator/formatter')
const router = express.Router();
const d=require('lodash')

router.get('/test-me', function (req, res) {
    info.date()
    info.month()
    info.batch()
    stringoperation.toUpperCase()
    stringoperation.tolowercase()
    stringoperation.totrim()
    logger.newfunction()
    res.send('My first ever api!')
});
router.get('/hello', function (req, res) {
    // const months = Array.from({length: 12}, (item, i) => {
    //     return new Date(0, i).toLocaleString('en-US', {month: 'long'})
    //   });
      
    //   console.log(months);
    const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      
    res.send(d.chunk(months,3));
  const array=[]
  let s=1
    for (let index = 0; index < 10; index++) {
        array.push(s);
        s=s+2;
        
    }
    let newArray = d.tail(array);
    console.log(newArray);
    
console.log(d.union ([2,6,2],[3,8,6],[17,5,5],[7,4,1,7],[2,3,9]));
let pairs = [
    
    ['horror','the shining'],
    ['horror','The Shining'],
    ['drama','Titanic'],
        ['thriller','Shutter Island'],
        ['fantasy','Pans Labyrinth']

]
  
let obj = d.fromPairs(pairs);
  
console.log(obj);
    





});
module.exports = router;

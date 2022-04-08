const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function (req,res){
        console.log(req.params.abcd)
        res.send('dummy response')
}
)
router.get('/movies', function (req,res){
    let movies=['Batman' , 'Avengers' , 'lordof rings','Harry-potter','the shining']
    res.send(movies)

}
)
router.get('/movie/:indexnumber', function (req,res){
    const p=req.params.indexnumber;
    
    let movie=['Batman' , 'Avengers' , 'lordof rings','Harry-potter','the shining']
    if(p<0)
    res.send('ERROR :INVALID ID')
   else{ if (p<movie.length) {
        res.send(movie[p])
    } else {
        res.send('ERROR :Invalid MOVIE YOU ARE TRYING TO ACESS')
        
    }}    
}
)
router.get('/films', function (req,res){
    
const array2=[
    {         id: 1        , name: 'the shining'     },
    {         id: 2         ,name:  'incendies'    },
    {         id: 3         ,name:  'rang de basanti'    },
    {         id: 4         ,name:   'finding nemo'   }];
   

  res.send(array2)
}
)
router.get('/films/:filmid', function (req,res){
    const p=req.params.filmid;
    const array2=[
        {  id: 1  , name: 'the shining'     },
        {  id: 2  ,name:  'incendies'    },
        {  id: 3  ,name:  'rang de basanti'    },
        {  id: 4  ,name:   'finding nemo'   }];

        if(p<=0)
    res.send('ERROR :INVALID ID')
   else { if (p<=array2.length) {
        res.send(array2[p-1])
    } else {
        res.send('ERROR :NO MOVIE WITH THIS ID')
        
    } }
         

}
);
router.get('/find', function (req,res){
    const array3=[33,34,35,37,38,39]
    
    const s=array3[0] 
    const n=array3[array3.length-1] 
    const total=(n+1)*(n)/2;
     const initial=(s-1)*(s)/2; 
    const originalsum= total-initial; 
    let k=0; 
    for (let index = 0; index < array3.length; index++) 
    { k=k+array3[index] } 
    const missingnumber=originalsum-k;
        
    res.send(missingnumber.toString())
}
);
router.get('/find1', function (req,res){
    const array3=[1,2,3,4,5,7,8,9]
    
    
    const n=array3[array3.length-1] 
    const total=(n+1)*(n)/2;
    
    let k=0; 
    for (let index = 0; index < array3.length; index++) 
    { k=k+array3[index] } 
    const missingnumber=total-k;
        
        
         
    res.send(missingnumber.toString())
}
);






router.get('/test-me', function (req, res) {
    
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});




module.exports = router;
// adding this comment for no reason
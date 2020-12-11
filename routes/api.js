const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogpost'); 



// multer
const  multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,"uploads/");
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({ storage: storage })

// multer End



router.get('/',(req ,res)=>{
   
    BlogPost.find({ })
     .then((data)=>{
         console.log('Data:', data);
         res.json(data);

     })
     .catch((error)=>{
         console.log('error', daerrorta)

     })
    
});


router.get('/name', (req ,res)=>{
    const data = {
        username : 'anu',
        age: 6
    };
    res.json(data);

})





// API ADD FILE Data
router.post('/single', upload.single('myFile'), (req, res) => {
    console.log(req.body, "/single req.body")
    console.log(req.file, "/single req.file")
 
    const newBlogPost = new BlogPost({
        title: req.body.title,
        body:req.body.title,
        fileName:req.file.originalname,
        mimetype:req.file.mimetype,
    });

    console.log(newBlogPost, "newBlogPost")

    newBlogPost.save((error)=>{
        if (error){
            res.status(500).json({msg : 'sorry, internal server errors'});
        }else {
            res.json({
                msg:'your data has been saved'
            });
        }
    })

    
  });


module.exports = router;
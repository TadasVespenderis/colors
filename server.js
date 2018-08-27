

const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const Info = require ('./models/infoModel');
const mongoose = require('mongoose');

// const router = express.Router();

//promise integravimas i mongoose
mongoose.Promise = global.Promise;

//prisijungimas
mongoose.connect('mongodb://admin:admin123@ds139341.mlab.com:39341/colors', { useNewUrlParser: true } );
mongoose.connection
    .once('open', ()=>console.log('connected to DB'))
    .on ('error', (e)=>console.log(e));

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/login', (req, res)=>{
    res.json({
        message: 'Welcome!'
    })
});

app.post('/api/addInfo', async (req, res)=>{
    console.log(req.body)
    try {

        // naujas irasas i DB
        const info = new Info({
            name: req.body.name,
            city: req.body.city,
            email: req.body.email
        });
        await info.save();
        res.send({message: 'new Person saved'});
    }catch (err){
        console.log(err);
        res.status(400).send({message: 'ups, something went wrong'})
    };

});

app.get('/api/users', async (req, res)=>{
    const users = await Info.find();
    res.json(users)

    //arba const users = Info.find().then ((data)=> {
    // res.json(users)
    // })

})

const port = process.env.PORT || 9000;

if(process.env.NODE_ENV==='production'){
    app.get('/*', (req, res)=>{
        res.sendFile(__dirname+'/client/build/index.html')
    })
}

app.listen(port, ()=>
    console.log(`App is listening on port ${port} !`));

// module.exports = router;
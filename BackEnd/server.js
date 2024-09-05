//require('dotenv').config();
import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Server Started')
});

app.get('/api/name', (req, res)=>{
    const names = [
        {
        id:1,
        name: "Sam",
        age : "26"
        },
        {
        id:2,
        name: "Matthew",
        age : "54"
        },
        {
        id:3,
        name: "Blake",
        age : "24"
        },
        {
        id:4,
        name: "Joe",
        age : "32"
        },

    ]
    res.send(names);
})

app.listen(port, ()=>{
    console.log(`serve at http://localhost/${port}`);
})

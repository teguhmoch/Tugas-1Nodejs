const express = require ("express");
const app = express();
const port = 8000;
const apiSiswa = require ("./api-Siswa");

app.get('/',(req,res)=> {
    res.send("Selamat datang di data siswa center")
})

app.use("/DataSiswa",apiSiswa);

app.listen(port, ()=> {
    console.log(`Server Connected at Port ${port}`)
})
console.log("Basic node project");

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.post('/calculate', (req, res) => {
    console.log("request", req.body);
    const { radius } = req.body;
    const cal = radius*Math.PI;
    res.status(200).json({ message: "calculated", radius: cal, status: true })


    console.log("request body", req.body);
    // const { radius } = req.body;

    // // if (!radius || isNaN(radius)) {
    // //     return res.status(400).json({ message: "Invalid radius", status: false });
    // // }

    // const cal = radius * Math.PI;
    // res.status(200).json({ message: "calculated", data: cal, status: true });

})

app.use('/', (req, res) => {
    res.send("Hello Express");
})


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);

})

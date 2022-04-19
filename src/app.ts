import http from "http"
import express, { Request, Response } from "express"
import { router } from "./routes/routes";
import dotenv from "dotenv"
const { mongoose } = require("mongoose");
import { Todo } from "./models/user_model";
// const bodyParser = require("body-parser")
import bodyParser from "body-parser"


// http.createServer(
//     function(req,res){
//         res.write("API IS DOWN");
//         res.end();
//     }
// ).listen(8080);

// http.createServer(
//     function (req, res) {
//         res.writeHead(
//             200,
//             {
//                 "Context-Type": "text/html"
//             }
//         ),
//         res.write("We are back with content type");
//         res.end()
//     }
// ).listen(8000)

// http.createServer(
//     function(req,res){
//         res.write(req.url);
//         res.end();
//         console.log(req.url);
//     }
// ).listen(8080);

dotenv.config();
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGODB_URL as string,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    ()=>{
        console.log("Db Connected!!!")
    }
)

// app.get("/", (req: Request, res: Response) => {
//     const data = req.url;
//     res.status(200).json({
//         message: data
//     })
//     //No Need to close manually
// });

// app.get("/about", (req: Request, res: Response) => {
//     const data = req.url;
//     res.status(200).json({
//         message: data
//     })
//     //No Need to close manually
// });

app.use("/", router)

app.listen(9876, () => {
    console.log("Sever is rocking at 9876");
})
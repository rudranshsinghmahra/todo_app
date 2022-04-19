import express, { Request, Response } from "express"
import { Todo } from "../models/user_model";

const router = express.Router()

// router.get("/", (req: Request, res: Response) => {
//     res.json({
//         message: "API IS ROCKING",
//     });
// });

// router.post("/", (req: Request, res: Response) => {
//     const { name, email } = req.body;
//     console.log(name)
//     console.log(email)
//     res.json({
//         user: {
//             name,
//             email
//         }
//     });
// });

// router.get("/about", (req: Request, res: Response) => {
//     res.json({
//         message: "THIS IS ABOUT API",
//     });
// });

// router.get("/profile", (req: Request, res: Response) => {
//     res.json({
//         message: "THIS IS PROFILE OF API",
//     });
// });

// export { router };



//Method For POST Request Method For POST Request Method For POST Request
router.post("/add", async (req: Request, res: Response) => {
    const data = req.body;
    const todo = new Todo({
        title: data.title,
        description: data.description,
    })
    const response = await todo.save();
    res.status(200).json({
        message: "Todo Added Successfully",
        data: response
    })
})

//Method For GET Request Method For GET Request Method For GET Request
router.get("/", async (req: Request, res: Response) => {
    try {
        const dataItem = await Todo.find({});
        res.status(200).json({
            data: dataItem,
        })
    }
    catch (e) {
        console.log(e);
    }
})

//Method For Delete Request Method For Delete Request Method For Delete Request
router.delete("/delete", async (req: Request, res: Response) => {

    const filter = {
        title: req.body.title,
    }
    const dataItem = await Todo.deleteOne(filter).then((data) => {
        res.json({
            data: data,
        })
    }).catch((err)=>{
        return res.send(err);
    })
})

//Method For Update Request Method For Update Request Method For Update Request
router.put("/update", async (req: Request, res: Response) => {
    const filter = {
        title: req.body.title,
    }

    const updatedData = {
        description : req.body.description
    }

    const dataItem = await Todo.updateOne(filter,updatedData,{
        new: true,

    }).then((data) => {
        res.json({
            data: data,
        })
    }).catch((err)=>{
        return res.send(err);
    })
})

export { router };
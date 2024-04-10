import express from "express"
const router = express.Router();

const data = {
    'name' : 'John Doe',
    'phone' : '514-663-4214',
    'email' : 'john.d@email.com',
    'address' : '7 3254 Avenue Vic'
}

router.get("/", (req, res)=>
{
    res.status(200).send(data);
})

//new comments

export default router;
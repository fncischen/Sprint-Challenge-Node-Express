const express = require('express');
const router = express.Router();
const actionData = require("../helpers/actionModel.js");
const actionMiddleware = requre("../middleware/actionsMiddleware.js")

router.get("/" , async (req, res) => {
    try{
        const actions = await actionData.get();
        res.status(201).json(actions);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your actions"});
    }

 })

router.get("/:id", async (req, res) => { 

    try{
        const action = await actionData.get(req.params.id);
        res.status(201).json(action);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your action"});
    }

})

router.post("/", actionMiddleware, async (req, res) => { 

    try{
        const action = await actionData.get(req.params.id);
        res.status(201).json(action);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors posting your action"});
    }

})

router.put("/:id", actionMiddleware, async (req, res) => { 

    try{
        const action = await actionData.get(req.params.id);
        res.status(201).json(action);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors updating your action"});
    }

})

router.delete("/:id", async (req, res) => { 

    try{
        const action = await actionData.get(req.params.id);
        res.status(201).json(action);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors deleting your action"});
    }

})

module.exports = router;
const express = require('express');
const router = express.Router();
const projectData = require("../data/helpers/projectModel.js");

router.get("/" , async (req, res) => { 
    try{
        const posts = await projectData.get();
        res.json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.get("/:id", async (req, res) => { 
    try{
        const posts = await projectData.get(req.params.id);
        res.json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.post("/", async (req, res) => { 
    try{
        const posts = await projectData.insert(req.body);
        res.json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.put("/:id", async (req, res) => { 






})

router.delete("/:id", async (req, res) => { 





})

module.export = router;
const express = require('express');
const router = express.Router();
const projectData = require("../data/helpers/projectModel.js");

router.get("/" , async (req, res) => { 
    try{
        const posts = await projectData.get();
        res.status(201).json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.get("/:id", async (req, res) => { 
    try{
        const posts = await projectData.get(req.params.id);
        res.status(201).json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.post("/", async (req, res) => { 
    try{
        const posts = await projectData.insert(req.body);
        res.status(201).json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.put("/:id", async (req, res) => { 

    try{
        const posts = await projectData.update(req.params.id, req.body);
        res.status(201).json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }
})

router.delete("/:id", async (req, res) => { 

    try{
        const posts = await projectData.remove(req.params.id);
        res.status(201).json(posts);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your posts"});
    }

})

module.export = router;
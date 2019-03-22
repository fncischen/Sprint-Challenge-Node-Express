const express = require('express');
const router = express.Router();
const projectData = require("../data/helpers/projectModel.js");

router.get("/" , async (req, res) => { 
    try{
        const project = await projectData.get();
        res.status(201).json(project);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your projects"});
    }
})

router.get("/:id", async (req, res) => { 
    try{
        const project = await projectData.get(req.params.id);
        res.status(201).json(project);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors retrieving your project"});
    }
})

router.post("/", async (req, res) => { 
    try{
        const project = await projectData.insert(req.body);
        res.status(201).json(project);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors posting your project"});
    }
})

router.put("/:id", async (req, res) => { 

    try{
        const project = await projectData.update(req.params.id, req.body);
        res.status(201).json(project);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors updating your project"});
    }
})

router.delete("/:id", async (req, res) => { 

    try{
        const project = await projectData.remove(req.params.id);
        res.status(201).json(project);
    }
    catch
    {
        res.status(500).json({errorMessage: "We had errors deleting your project"});
    }

})

module.exports = router;
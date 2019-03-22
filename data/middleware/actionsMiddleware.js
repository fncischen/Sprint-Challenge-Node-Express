function actionsMiddleware (req, res, next) {
    if (!req.body.project_id || !req.body.description || !req.body.notes ) {
        res.status(400).json({error: "One of your fields is empty and needs to be filled out"})
      } else {
        next();
    }
}


module.exports = actionsMiddleware; 
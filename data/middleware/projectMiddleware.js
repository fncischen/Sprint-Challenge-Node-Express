function projectMiddleware (req, res, next) {
    if (!req.body.name || !req.body.description ) {
        res.status(400).json({error: "One of your fields is empty and needs to be filled out"})
      } else {
        next();
    }
}

module.exports = projectMiddleware; 
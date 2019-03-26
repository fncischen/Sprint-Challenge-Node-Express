const projectMiddleware = fn => (req, res, next) => {
    if ( !req.body.name || !req.body.description ) {
        res.status(500).json({error: "One of your fields is empty and needs to be filled out"})
      } else {
        console.log("Passing project data!");
        Promise
        .resolve(fn(req, res, next))
        .catch(next)
    }
}

module.exports = projectMiddleware; 
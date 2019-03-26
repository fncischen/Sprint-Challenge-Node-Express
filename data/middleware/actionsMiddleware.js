const actionsMiddleware = fn => (req, res, next) => {
    console.log(req.body);
    if (!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(500).json({error: "One of your fields is empty and needs to be filled out"})
      } else {
        console.log("Passing action data!");
        Promise
        .resolve(fn(req, res, next))
        .catch(next)
    }
}


module.exports = actionsMiddleware; 
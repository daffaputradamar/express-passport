module.exports = {
    index: (req, res) => res.render("welcome"),
    dashboard: (req, res) => {
        res.render("dashboard", {
            name: req.user.name
        })
    }
}
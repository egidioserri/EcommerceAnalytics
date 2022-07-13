indexHomepage = (req, res) => {
    res.render('login')
}

indexCreatorAccount = (req, res) => {
    res.render('creatorAccount')
}

indexPasswordLost = (req, res) => {
    res.render('passwordLost')
}

dashboardHomepage = (req, res) => {
    res.render('home')
}

dashboardReport = (req, res) => {
    res.render('report')
}

dashboardConfig = (req, res) => {
    res.render('config')
}

module.exports = {
    indexHomepage,
    indexCreatorAccount,
    indexPasswordLost,
    dashboardHomepage,
    dashboardReport,
    dashboardConfig

}
// Created file for Travlr page
/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'News'});
};

module.exports = {
    news
};
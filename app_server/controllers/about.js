// Created file for Travlr page
/* GET about view */
const about = (req, res) => {
    res.render('about', {title: 'About'});
};

module.exports = {
    about
};
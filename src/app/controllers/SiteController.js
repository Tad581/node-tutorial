const Course = require('../models/Course');
const { multiMongooseToObject } = require('../../utils/mongoose');

class SiteController {
    // [GET] /home
    index(req, res, next) {
        // res.render('home');

        Course.find({})
            .then((courses) => {
                courses = multiMongooseToObject(courses);
                res.render('home', {
                    courses,
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

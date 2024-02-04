exports.name = '/images/avtsang';
exports.index = async(req, res, next) => {
    try {
        const a = require('./data/json/avtsang.json');
        var image = a[Math.floor(Math.random() * a.length)].trim();
        res.jsonp({
            url: image,
            data: image,
            count: a.length,
            author: 'dthdev',
            status: true
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}


// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to  Real Estate Restful api!'
    });
});

// Import contact controller
var contactController = require('../controller/controller');
// Contact routes
router.route('/api/realestate/')
    .get(contactController.index)
    .post(contactController.new);
router.route('/api/realestate/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;

// Export API routes
module.exports = router;

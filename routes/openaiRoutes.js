const express = require('express');
const router = express.Router();
router.post('/generateimage', (req, res) => {
    res.status(200).json({
        success: true,
        id: 1,
        greeting: 'hello world'
    });
});
module.exports = router;

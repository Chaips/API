const {Router} = require('express');
const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('url');
    const users = await response.json();
    res.json(users);
});

module.exports = router;
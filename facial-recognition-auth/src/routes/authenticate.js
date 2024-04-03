const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Call FaceIO API to authenticate the user
        const response = await axios.post('https://api.faceio.io/authenticate', {
            // Add any parameters needed for authentication
        }, {
            headers: {
                'X-API-Key': '1a5a8a5b1199f7dffd0cc7d413767cac'
            }
        });

        // Send the response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error authenticating user:', error);
        // Handle authentication failure
        res.status(500).json({ error: 'Error authenticating user' });
    }
});

module.exports = router;

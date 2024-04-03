const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        // Call FaceIO API to enroll a new user
        const response = await axios.post('https://api.faceio.io/enroll', {
            payload: req.body.payload,
            // Add any other parameters needed for enrollment
        }, {
            headers: {
                'X-API-Key': '1a5a8a5b1199f7dffd0cc7d413767cac'
            }
        });

        // Send the response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error enrolling user:', error);
        // Handle enrollment failure
        res.status(500).json({ error: 'Error enrolling user' });
    }
});

module.exports = router;

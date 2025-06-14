const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Optional: Test route for browser access
app.get('/', (req, res) => {
  res.send(' Weather Alert Backend is running');
});

app.post('/send-alert', async (req, res) => {
  const { pushToken, location } = req.body;
  const { latitude, longitude } = location;

  try {
    const weatherRes = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weather = weatherRes.data.current_weather;

    // For demo: always send notification
    if (true || weather.temperature > 30 || weather.windspeed > 20) {
      await axios.post('https://exp.host/--/api/v2/push/send', {
        to: pushToken,
        title: '🌡️ Weather Alert',
        body: `Current temp: ${weather.temperature}°C, Wind: ${weather.windspeed} km/h`,
        sound: 'default',
      });
      console.log(' Notification sent!');
    }

    res.send({ success: true, weather });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: 'Failed to send alert' });
  }
});

app.listen(3001, () => console.log(' Backend running at http://localhost:3001'));

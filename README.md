
# 🌤️ Weather Assistant App

A full-stack personal weather assistant mobile app built with **React Native (Expo)** and **Node.js**, powered by the **Open-Meteo API**. It displays real-time weather data based on your location and sends **push notifications** for interesting weather conditions like high temperature or wind speed.

---

## 📱 Features

- Sleek and modern weather UI built with React Native
- Real-time location-based weather via Open-Meteo API
- Push notifications when extreme weather is detected
- Backend server built in Express.js
- Navigation between `Home` and `About` pages
- Fully tested on Android (Expo Dev Build)

---

## 📁 Project Structure

```
weather-assistant-app/
├── weather-app/            # React Native frontend
│   ├── App.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── AboutScreen.js
│   ├── assets/
│   └── app.json
├── backend/                # Express backend
│   ├── index.js
│   ├── package.json
└── README.md
```

---

## ⚙️ How to Run

### 🖥️ 1. Backend

```bash
cd backend
npm install
node index.js
```

- Server runs at: `http://<YOUR_LOCAL_IP>:3001`
- Replace `localhost` with your IP in `HomeScreen.js` for mobile access

---

### 📱 2. Frontend (Mobile App)

```bash
cd weather-app
npm install
npx expo run:android
```

> ⚠️ Note: You must use a **development build** (`expo run:android`), not Expo Go, for push notifications to work.

---

## 📦 Tech Stack

- **React Native (Expo SDK 53)**
- **Express.js + Node.js**
- **Axios**
- **expo-location**
- **expo-notifications**
- **Open-Meteo Weather API**

---

## 🔔 Push Notification Logic

- Push token registered using `expo-notifications`
- Sent to backend with current location
- If temperature > 30°C or windspeed > 20 km/h → notification sent
- Forced for demo via `if (true || ...)` in backend

---

## 📄 Pages

- **Home**: Shows temperature, wind, condition code, and notifies weather alerts
- **About**: Explains app purpose, tech stack, and context

---

## 🎥 Demo Video Script (Use this for your recording)

> Hi, I’m Yeswanth Koti. Here’s my Weather Assistant app built using React Native and Node.js.  
> On opening the app, it requests location permission and fetches real-time weather data using the Open-Meteo API.  
> The temperature, wind speed, and weather code are shown clearly.  
> In the background, the app registers for push notifications and sends my location and device token to the backend.  
> The backend checks for weather conditions and sends a push alert when needed.  
> There's also a second screen – the About page – that explains the app’s tech stack and purpose.  
> This meets all Kinetik’s requirements: full-stack, weather API, mobile UI, push notifications, and navigation.  
> Thank you for the opportunity!

---

## 👨‍💻 Author

- Yeswanth Koti  
- [LinkedIn](https://linkedin.com/in/yeswanthkoti)  
- [GitHub](https://github.com/yeswanthkoti)

---


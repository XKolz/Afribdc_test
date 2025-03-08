# Afribdc_test

A **React Native financial app** that allows users to **exchange currencies, manage their wallet, and perform financial transactions securely**. The app provides a seamless user experience with features like authentication, PIN verification, and real-time exchange rates.

## 🚀 Features

- **User Authentication**: Login, signup, and forgot password functionality.
- **Phone Number Verification**: Users verify their accounts via OTP.
- **Secure PIN Setup**: 4-digit PIN for extra security during transactions.
- **User Profile & KYC**: Collects personal details like name, address, and date of birth.
- **Wallet Management**: Fund wallet, swap currencies, buy/sell, and withdraw money.
- **Currency Exchange**: View real-time rates and interact with other users for buying/selling.
- **Responsive UI**: A clean, modern, and easy-to-use interface.

## 📲 Screenshots

- Login Screen
- Phone Number Verification
- Personal Information Form
- Set PIN Screen
- Home Dashboard (Wallet & Transactions)

## 🛠️ Tech Stack

- **React Native** `0.78.0`
- **Navigation**: `@react-navigation/native`, `@react-navigation/stack`
- **State Management**: (Specify if using Redux, Zustand, etc.)
- **UI Components**: `react-native-elements`, `react-native-vector-icons`
- **APIs**: (Mention any third-party APIs used for currency rates, transactions, etc.)

## 📦 Installation & Setup

### Prerequisites

- **Node.js** `>=18`
- **React Native CLI** installed
- **Android Studio / Xcode** (for running on emulator/simulator)

### Install Dependencies

```sh
npm install
```

### Run the App

```sh
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## 🔑 Environment Variables

Create a `.env` file in the root directory and configure:

```
API_BASE_URL=your-api-url
EXCHANGE_RATE_API_KEY=your-key
```

## 🧪 Testing

Run tests using Jest:

```sh
npm test
```

## 📖 Roadmap

- [ ] Implement Biometric Authentication (Face ID / Fingerprint)
- [ ] Add Push Notifications
- [ ] Multi-currency Wallet Support
- [ ] Dark Mode UI

## 📝 License

This project is **private** and not for commercial use.

---

### **Need Help?**

If you have any questions or need support, feel free to reach out! 🚀

<!--  -->

I will come back here please, thanks

npx @react-native-community/cli init Afribdc_test

Install dependencies:
npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-screens react-native-safe-area-context react-native-reanimated react-native-vector-icons
npm install @types/react @types/react-native @react-navigation/native-stack

npx react-native run-ios

npx react-native run-android

npm install react-native-otp-inputs

npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

npm install react-native-country-picker-modal

# Build

Manual APK Build
Navigate to the Android Directory
sh
Copy
Edit
cd android
Generate APK
sh
Copy
Edit
./gradlew assembleRelease
Find Your APK The APK will be located in:
swift
Copy
Edit
android/app/build/outputs/apk/release/app-release.apk

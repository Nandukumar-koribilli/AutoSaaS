# AutoSaaS - Workflow Wrapper App

This project is a functional implementation of the "Wrapper SaaS" concept, allowing you to turn powerful **n8n workflows** into a professional, user-facing application.

It includes a modern React web dashboard and a native Android mobile app wrapper.

![SaaS Preview](https://via.placeholder.com/800x400.png?text=AutoSaaS+Preview)

## 🚀 Features

- **Professional UI**: Built with React, Tailwind CSS, and Framer Motion for a premium look.
- **Workflow Integration**: Directly connects to n8n Webhooks to accept user input and display results.
- **Mobile App**: Includes a React Native (Expo) project that wraps the web app into an installable Android APK.
- **Configuration**: Settings panel to easily switch backend workflow URLs.

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TypeScript
- **Styling**: Tailwind CSS, Lucide Icons, clsx/tailwind-merge
- **Mobile**: React Native (Expo), React Native Webview
- **Backend Automation**: n8n (External)

## 💻 Getting Started (Web App)

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Start Development Server**:

    ```bash
    npm run dev
    ```

    The app will run at `http://localhost:5173`.

3.  **Connect a Workflow**:
    - Open the Dashboard.
    - Click **Settings**.
    - Paste your n8n Production Webhook URL.
    - Run a test!

## 📱 Getting Started (Mobile App)

The `mobile/` folder contains an Expo project that wraps your web app.

1.  **Navigate to Mobile Folder**:

    ```bash
    cd mobile
    npm install
    ```

2.  **Configure URL**:

    - Open `mobile/App.tsx`.
    - **For Development**: Use your local IP (e.g., `http://192.168.x.x:5173`).
    - **For Production**: Deploy your web app (Vercel/Netlify) and use that URL (e.g., `https://my-app.vercel.app`).

3.  **Build APK**:
    You need an [Expo Account](https://expo.dev/) for this.

    ```bash
    # Install EAS CLI if you haven't
    npm install -g eas-cli

    # Build for Android
    npx eas-cli build -p android --profile preview
    ```

## 🌍 Deployment Guide

To make the mobile app work without your computer running:

1.  **Deploy the Web App**: Push this code to GitHub and deploy it on **Vercel** or **Netlify**.
2.  **Update Mobile Config**: Change the `uri` in `mobile/App.tsx` to your new live URL.
3.  **Rebuild**: Run the build command again.

## 📄 License

This project is open source and available for personal and commercial use.

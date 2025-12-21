import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.autosaas.app',
  appName: 'AutoSaaS',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

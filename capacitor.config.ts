import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    "CapacitorHttp": {
      enabled: true
    }
  },
  appId: 'io.ionic.jlmh',
  appName: "巨量漫画",
  webDir: 'dist'
};

export default config;

/* eslint-disable */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_FIREBASE_API_KEY: string;
  readonly VITE_APP_FIREBASE_API_ID: string;
  readonly VITE_APP_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_APP_FIREBASE_PROJECT_ID: string;
  readonly VITE_APP_FIREBASE_MEASUREMENT_ID: string;
  readonly VITE_APP_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_FIREBASE_STORAGE_BUCKET_URL: string;
  readonly VITE_APP_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

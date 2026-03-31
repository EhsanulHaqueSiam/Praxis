/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASEPATH?: string;
  readonly VITE_MARKETING_TARGET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

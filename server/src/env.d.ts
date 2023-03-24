// Override the default interface
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
    }
  }
}

// To make this file a module
export {};

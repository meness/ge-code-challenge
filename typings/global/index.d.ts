declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly NEXT_PUBLIC_GRAPHQL_SERVER_URL: string;
    }
  }
}

export {};

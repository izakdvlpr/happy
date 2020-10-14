declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: number;  
    DB_URL: string;
    API_URL: string;  
  }
}
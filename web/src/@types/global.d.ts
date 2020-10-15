declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    
    REACT_APP_MAPBOX_TOKEN: string;  
    REACT_APP_API_URL: string;    
  }
}
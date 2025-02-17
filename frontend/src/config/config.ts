import { getEnvVar } from './env';

const environment = import.meta.env.MODE;
const apiUrl = getEnvVar('VITE_API_URL');

console.log('Environment Variables:', {
  MODE: environment,
  VITE_API_URL: apiUrl || 'variable_no_definida:VITE_API_URL',
  ENV: import.meta.env
});

if (!apiUrl) {
  console.warn(`⚠️ VITE_API_URL no está definida en el ambiente: ${environment}`);
}

export const config = {
  apiUrl: apiUrl,
  environment,
  endpoints: {
    productos: '/productos',
  }
};

export const getApiUrl = (endpoint: string) => {
  const url = `${config.apiUrl}${endpoint}`;
  console.log(`[${environment}] Requesting:`, url);
  return url;
};

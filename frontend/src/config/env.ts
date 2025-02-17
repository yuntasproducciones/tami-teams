export const getEnvVar = (key: string, defaultValue: string = ''): string => {
  const value = process.env[key];
  if (!value) {
    console.warn(`⚠️ La variable de entorno ${key} no está definida.`);
    return defaultValue;
  }
  return value.replace(/^"|"$/g, ''); // Eliminar comillas adicionales
};

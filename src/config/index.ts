import developmentConfig from './database.dev';
import testConfig from './database.test';
import productionConfig from './database.prod';
const configs = {
  development: developmentConfig,
  test: testConfig,
  production: productionConfig,
};
const env = process.env.NODE_ENV || 'development';
export default configs[env];

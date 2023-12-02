export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString:
    (process.env.CLEAN_NEST_MONGO_CONNECTION_STRING as string) ||
    'mongodb://localhost:27017/test-mongo',
  postgreConnectionString: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: true,
  },
};

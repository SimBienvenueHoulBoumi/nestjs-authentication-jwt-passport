export default () => ({
  port: parseInt(process.env.PORT, 10),
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true,
    synchronize: true,
  },
});

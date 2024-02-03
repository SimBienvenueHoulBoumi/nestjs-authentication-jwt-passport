import { DataSource } from 'typeorm';
import configuration from '../config/configuration';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configuration().database.host,
        port: configuration().database.port,
        username: configuration().database.username,
        password: configuration().database.password,
        database: configuration().database.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

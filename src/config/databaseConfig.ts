import {TypegooseModule} from 'nestjs-typegoose';
import * as mongodbUri from 'mongodb-uri';
import {ConfigService} from '../Common/config/config.service';

const config = new ConfigService();

const dataBaseConfigs = {
    username: config.get('DB_USER') || '',
    password: config.get('DB_PASSWD') || '',
    hosts: [{host: config.get('DB_HOST') || 'localhost', port: config.get('DB_PORT') || 27017}],
    database: config.get('DB_DATABASE') || 'api-mvp',
    options: {authSource: 'admin'},
};

console.log('dataBaseConfigs: ', dataBaseConfigs);
console.log('format: ', mongodbUri.format(dataBaseConfigs));

export const databaseConfigModule = TypegooseModule.forRoot(mongodbUri.format(dataBaseConfigs), {useNewUrlParser: true});

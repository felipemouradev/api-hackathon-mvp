import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from './Common/config/config.module';
import {HttpModule} from './Common/http/http.module';
import {databaseConfigModule} from './config/databaseConfig';
import {EmailModule} from './Module/email/email.module';
import {AuthModule} from './Module/auth/auth.module';
import {JwtMiddleware} from './Module/auth/jwt.middleware';

@Module({
    imports: [
        databaseConfigModule,
        ConfigModule,
        AuthModule,
        HttpModule,
        EmailModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //         .apply(JwtMiddleware)
    //         .exclude(
    //             {path: '/airport/:iata_code', method: RequestMethod.GET},
    //             {path: '/project/create-payment', method: RequestMethod.POST},
    //             {path: '/project/execute-payment', method: RequestMethod.POST},
    //             {path: '/project/email-confirmation', method: RequestMethod.POST},
    //             {path: '/project', method: RequestMethod.GET},
    //             {path: '/project/:id', method: RequestMethod.GET},
    //             {path: '/travel/calc-co2-travel', method: RequestMethod.POST},
    //             {path: '/travel/calc-co2-travel/batch', method: RequestMethod.POST},
    //         )
    //         .forRoutes(
    //             AirportController,
    //             ProjectController,
    //             TravelController,
    //         );
    // }
}

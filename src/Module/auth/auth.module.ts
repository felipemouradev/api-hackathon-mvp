import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {ConfigService} from '../config/config.service';
import {JwtService} from './jwt.service';

@Module({
    providers: [AuthService, ConfigService, JwtService],
    controllers: [AuthController],
})
export class AuthModule {
}

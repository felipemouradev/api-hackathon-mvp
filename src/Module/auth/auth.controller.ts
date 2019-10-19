import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {ApiUseTags} from '@nestjs/swagger';
import {AuthDto} from './dtos/auth.dto';
import {ConfigService} from '../config/config.service';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService, private readonly config: ConfigService) {}
    @Post('/')
    async auth(@Body() auth: AuthDto) {
        try {
            return await this.authService.auth(auth);
        } catch (e) {
            throw e;
        }
    }
}

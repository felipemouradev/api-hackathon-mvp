import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {ConfigService} from '../config/config.service';
import * as crypto from 'crypto';
import {JwtService} from './jwt.service';
import {AuthDto} from "./dtos/auth.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly config: ConfigService,
    ) {
    }

    async auth(authDto: AuthDto) {
        try {
            if (this.checkAuth(authDto)) {
                return {
                    token: JwtService.sign(JSON.stringify({user: authDto.user})),
                };
            } else {
                throw new UnauthorizedException('Auth Failed!');
            }
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }

    checkAuth(authDto: AuthDto) {
        return authDto.user === this.config.get('JWT_USER') && authDto.password === this.config.get('JWT_PASSWD');
    }
}
import {Injectable, UnauthorizedException} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {ConfigService} from '../config/config.service';

@Injectable()
export class JwtService {
    private static getConfig() {
        return new ConfigService();
    }

    static sign(toSign: string) {
        return jwt.sign({
            data: toSign,
        }, this.getConfig().get('JWT_SECRET_KEY'), {expiresIn: Math.floor(Date.now() / 1000) + this.getConfig().get('JWT_EXPIRE_IN')});

    }

    static verify(token: string) {
        try {
            return jwt.verify(token, this.getConfig().get('JWT_SECRET_KEY'));
        } catch (e) {
            throw new UnauthorizedException(e.message);
        }
    }
}

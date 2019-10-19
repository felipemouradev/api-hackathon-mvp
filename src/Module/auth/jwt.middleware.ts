import {Injectable, MiddlewareFunction, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {JwtService} from './jwt.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req, res, next) => {
            const authorization = JwtService.verify(req.headers.authorization);
            if (!authorization) {
                throw new UnauthorizedException('Not allowed');
            } else {
                next();
            }
        };
    }1
}

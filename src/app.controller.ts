import {Controller, Get, Header, Param, Req, Res} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('/get-files/:file')
    getFiles(@Param('file') file: string, @Res() response) {
        response.download(`${__dirname}/examples_files/${file}`);
    }
}

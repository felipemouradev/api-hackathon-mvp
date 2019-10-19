import {Controller, Get, Header, Param, Req, Res, Query} from '@nestjs/common';
import {AppService} from './app.service';
import * as json from './itinerarios.json';
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('itinerarios')
    getItinerario(
        @Query('itinerario') itinerario: string,
    ) {
        return json[itinerario];
    }
}

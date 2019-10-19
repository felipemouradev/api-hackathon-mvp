import {Injectable} from '@nestjs/common';
import * as mail from '@sendgrid/mail';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';

@Injectable()
export class EmailService {
    async sendMail({to, from, subject, template_name, object_variables}) {
        mail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to,
            from,
            subject,
            html: this.parseTemplate(template_name, object_variables),
        };
        return await mail.send(msg);
    }

    private parseTemplate(template_name, object_variables) {
        const source = fs.readFileSync('./template_emails/' + template_name + '.html', 'utf8');
        const template = Handlebars.compile(source);
        return template(object_variables);
    }
}

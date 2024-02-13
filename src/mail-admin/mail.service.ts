import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { Admin } from "../admins/entities/admin.entity";

@Injectable()
export class MailService{
    constructor (private mailerService: MailerService){}

    async sendUserConfirmation(user: Admin): Promise<void>{
        const url = `${process.env.API_HOST}/auth-admin/activate/${user.ver_link}`
        console.log(url);
        await this.mailerService.sendMail({
            to: user.email,
            subject: "Welcome to E-HOTEL App! Confirm your Email!",
            template: "./confirmation",
            context: {
                name: user.name,
                url
            },
        })
    }
}
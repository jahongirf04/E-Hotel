import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { config } from "dotenv";
import { ConfigService } from "@nestjs/config";



@Injectable()
export class JwtAuthGuard implements CanActivate{
    constructor (private readonly jwtService: JwtService,
        private readonly config: ConfigService){}
    async canActivate(
        context: ExecutionContext
    ){
        const req = context.switchToHttp().getRequest()

        const authHeader = req.headers.authorization
        if (!authHeader){
            throw new UnauthorizedException({
                message: "Foydalanuvchi auvtorizatsiyadan o'tmagan1"
            })
        }
        const bearer = authHeader.split(' ')[0]
        const token = authHeader.split(' ')[1];
        if (bearer !== "Bearer" || !token){
            throw new UnauthorizedException({
              message: "Foydalanuvchi auvtorizatsiyadan o'tmagan2",
            });
        }
        let user: any
        try{
            console.log(token);
            
            user = await this.jwtService.verify(token, {
              secret: this.config.get('REFRESH_TOKEN_KEY'),
            });
            
            
        } catch (e){
            console.log(e.message);
            
            throw new UnauthorizedException({
              message: "Foydalanuvchi auvtorizatsiyadan o'tmagan3",
            });
        }
        req.user = user
        
        return true
    }
}
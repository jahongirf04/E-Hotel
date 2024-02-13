import { ExecutionContext, ForbiddenException, createParamDecorator } from "@nestjs/common";

export const GetCurrentUserId = createParamDecorator(
    (_:undefined, context: ExecutionContext): number => {
        const request = context.switchToHttp().getRequest()
        const user = request.user
        if (!user) throw new ForbiddenException("Token noto'g'ri")
        console.log("user", user);
        
        return user.sub
    }
)
import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  UseGuards,
  Get,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import {Response} from 'express'
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';
import { RefreshTokenGuard } from '../common/guards';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { UserSelfGuard } from '../guards/user-self.guard';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Sign Up' })
  @ApiResponse({ type: Object })
  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(
    @Body() authDto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.signup(authDto, res);
  }

  @ApiOperation({ summary: 'Log In' })
  @ApiResponse({ type: Object })
  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.signin(loginDto, res);
  }

  @ApiOperation({ summary: 'Sign out' })
  @ApiResponse({ type: Object })
  @Post('signout/:id')
  @UseGuards(UserSelfGuard)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async signout(
    @Param(':id') userId: number,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.signout(userId, res);
  }

  @ApiOperation({ summary: 'Refresh token' })
  @ApiResponse({ type: Object })
  @Public()
  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokens(res);
  }

  @ApiOperation({ summary: 'Activate  user' })
  @ApiResponse({ status: 200, type: [User] })
  @Public()
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.authService.activate(link);
  }
}

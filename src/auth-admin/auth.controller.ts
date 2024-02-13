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
import { Response } from 'express';
import { GetCurrentUser, GetCurrentUserId, Public } from '../common/decorators';
import { RefreshTokenGuard } from '../common/guards';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from '../admins/entities/admin.entity';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { UserSelfGuard } from '../guards/user-self.guard';

@ApiTags('Auth admin')
@Controller('auth-admin')
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
  // @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    userId: number,
    refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshTokens(res);
  }

  @Public()
  @ApiOperation({ summary: 'Activate  admin' })
  @ApiResponse({ status: 200, type: [Admin] })
  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.authService.activate(link);
  }
}

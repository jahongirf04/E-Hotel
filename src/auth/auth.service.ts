import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { IsNull, Not, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { v4 } from 'uuid';
import { AuthDto } from './dto/auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private mailservice: MailService,
  ) {}

  async signup(authDto: AuthDto, res: Response) {
    try {
      const candidate = await this.usersRepository.findBy({
        email: authDto.email,
      });

      if (candidate[0] != undefined) {
        throw new BadRequestException('Bunday email mavjud');
      }
      const user = await this.usersRepository.create(authDto);
      user.ver_link = v4();
      this.mailservice.sendUserConfirmation(user);
      const tokens = await this.getTokens(user.id, user.email);
      await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
      user.token = tokens.refresh_token;
      this.usersRepository.save(user);
      res.cookie('refesh_token', tokens.refresh_token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return { tokens, message: 'Email confirmation link is sent' };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async signin(loginDto: LoginDto, res: Response) {
    try {
      const { email, password } = loginDto;
      const user = await this.usersRepository.findBy({ email: loginDto.email });
      if (user[0] == undefined) {
        throw new BadRequestException('Access denied');
      }
      const passwordMatches = user[0].password == loginDto.password;
      if (!passwordMatches) {
        throw new ForbiddenException('Access denied');
      }

      const tokens = await this.getTokens(user[0].id, user[0].email);
      await this.updateRefreshTokenHash(user[0].id, tokens.refresh_token);
      res.cookie('refesh_token', tokens.refresh_token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return tokens;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async signout(userId: number, res: Response) {
    try {
      const user = await this.usersRepository.update(
        { id: userId, token: Not(IsNull()) },
        { token: null },
      );
      if (!user) {
        throw new BadRequestException('Access denied');
      }
      res.clearCookie('refesh_token');
      return 'Signed Out';
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async refreshTokens(res: Response | any) {
    try {
      const tokens = await this.getTokens(1, 'gmail@gmail.com');
      res.cookie('refresh_token', tokens.refresh_token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return tokens;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async getTokens(userId: number, email: string) {
    try {
      const jwtPayload = {
        sub: userId,
        email: email,
      };
      const [acccessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.ACCESS_TOKEN_KEY,
          expiresIn: process.env.ACCESS_TOKEN_TIME,
        }),
        this.jwtService.signAsync(jwtPayload, {
          secret: process.env.REFRESH_TOKEN_KEY,
          expiresIn: process.env.REFRESH_TOKEN_TIME,
        }),
      ]);
      return {
        access_token: acccessToken,
        refresh_token: refreshToken,
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async updateRefreshTokenHash(
    userId: number,
    refreshToken: string,
  ): Promise<void> {
    try {
      await this.usersRepository.update(
        {
          id: userId,
        },
        { token: refreshToken },
        );
      } catch (e) {
        throw new BadRequestException(e.message);
      }
      }
      
      async activate(link: string) {
        try {
          if (!link) {
            throw new BadRequestException('Activation link not found');
          }
          
          const updatedUser = await this.usersRepository.update(
            { ver_link: link, is_active: false },
            { is_active: true },
            );
            
            if (!updatedUser.affected) {
              throw new BadRequestException('User already activated');
            }
            const response = {
              message: 'User activated successfuly',
              user: updatedUser,
            };
            return response;
          } catch (e) {
            throw new BadRequestException(e.message);
          }
          }
        }
        
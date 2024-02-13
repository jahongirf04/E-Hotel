import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCreditCardsService } from './user_credit_cards.service';
import { CreateUserCreditCardDto } from './dto/create-user_credit_card.dto';
import { UpdateUserCreditCardDto } from './dto/update-user_credit_card.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserCreditCard } from './entities/user_credit_card.entity';

@ApiTags('User kerdit kartalari')
@Controller('user-credit-cards')
export class UserCreditCardsController {
  constructor(
    private readonly userCreditCardsService: UserCreditCardsService,
  ) {}

  @ApiOperation({ summary: 'Create user credit card' })
  @ApiResponse({ type: UserCreditCard })
  @Post()
  create(@Body() createUserCreditCardDto: CreateUserCreditCardDto) {
    return this.userCreditCardsService.create(createUserCreditCardDto);
  }

  @ApiOperation({ summary: 'Get all user credit cards' })
  @ApiResponse({ type: UserCreditCard })
  @Get()
  findAll() {
    return this.userCreditCardsService.findAll();
  }

  @ApiOperation({ summary: 'Get One user credit card' })
  @ApiResponse({ type: UserCreditCard })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCreditCardsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update user credit card' })
  @ApiResponse({ type: UserCreditCard })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserCreditCardDto: UpdateUserCreditCardDto,
  ) {
    return this.userCreditCardsService.update(+id, updateUserCreditCardDto);
  }

  @ApiOperation({ summary: 'Delete user credit card' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCreditCardsService.remove(+id);
  }
}

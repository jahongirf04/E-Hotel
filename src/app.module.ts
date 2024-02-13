import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HotelsModule } from './hotels/hotels.module';
import { GymsModule } from './gyms/gyms.module';
import { DistrictsModule } from './districts/districts.module';
import { RegionsModule } from './regions/regions.module';
import { AdminsModule } from './admins/admins.module';
import { ImagesModule } from './images/images.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { HotelRoomsModule } from './hotel_rooms/hotel_rooms.module';
import { UserCreditCardsModule } from './user_credit_cards/user_credit_cards.module';
import { UserBookedRoomsModule } from './user_booked_rooms/user_booked_rooms.module';
import { RoomTypesModule } from './room_types/room_types.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm"
import { AuthModule } from './auth/auth.module';
import { AuthModuleAdmin } from './auth-admin/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'postgres'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + 'dist/**/*.entity{.ts, .js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UsersModule,
    HotelsModule,
    GymsModule,
    DistrictsModule,
    RegionsModule,
    AdminsModule,
    ImagesModule,
    RestaurantsModule,
    HotelRoomsModule,
    UserCreditCardsModule,
    UserBookedRoomsModule,
    RoomTypesModule,
    AuthModule,
    AuthModuleAdmin
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

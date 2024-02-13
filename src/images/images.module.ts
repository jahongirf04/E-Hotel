import { Module, forwardRef } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { HotelsModule } from '../hotels/hotels.module';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [Image], 
    )
  ],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}

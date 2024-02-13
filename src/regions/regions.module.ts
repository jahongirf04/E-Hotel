import { Module, forwardRef } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { RegionsController } from './regions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from './entities/region.entity';
import { DistrictsModule } from '../districts/districts.module';

@Module({
  imports: [TypeOrmModule.forFeature([Region]), forwardRef(() => Region)],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}

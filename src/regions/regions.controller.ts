import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Region } from './entities/region.entity';

@ApiTags('Viloyatlar/shaharlar')
@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}

  @ApiOperation({ summary: 'Create region' })
  @ApiResponse({ type: Region })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionsService.create(createRegionDto);
  }

  @ApiOperation({ summary: 'Get all regions' })
  @ApiResponse({ type: Region })
  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @ApiOperation({ summary: 'Get One region' })
  @ApiResponse({ type: Region })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update region' })
  @ApiResponse({ type: Region })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionsService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: 'Delete region' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionsService.remove(+id);
  }
}

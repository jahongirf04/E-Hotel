import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Image } from './entities/image.entity';

@ApiTags('Rasmlar')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @ApiOperation({ summary: 'Create image' })
  @ApiResponse({ type: Image })
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @ApiOperation({ summary: 'Get all images' })
  @ApiResponse({ type: Image })
  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @ApiOperation({ summary: 'Get One image' })
  @ApiResponse({ type: Image })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update image' })
  @ApiResponse({ type: Image })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @ApiOperation({ summary: 'Delete image' })
  @ApiResponse({ type: Number })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}

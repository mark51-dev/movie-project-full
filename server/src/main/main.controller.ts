import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MainService } from './main.service';
import { CreateMainDto } from './dto/create-main.dto';
import { UpdateMainDto } from './dto/update-main.dto';
import { lastValueFrom } from 'rxjs';

@Controller('main')
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Post()
  create(@Body() createMainDto: CreateMainDto) {
    return this.mainService.create(createMainDto);
  }

  @Get()
  async findAll() {
    const [movies, series] = await lastValueFrom(this.mainService.findAll());
    return {
      movies,
      series,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMainDto: UpdateMainDto) {
    return this.mainService.update(+id, updateMainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainService.remove(+id);
  }
}

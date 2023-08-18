import { Injectable } from '@nestjs/common';
import { CreateMainDto } from './dto/create-main.dto';
import { UpdateMainDto } from './dto/update-main.dto';
import { MoviesService } from 'src/movies/movies.service';
import { SeriesService } from 'src/series/series.service';
import { forkJoin } from 'rxjs';

@Injectable()
export class MainService {
  constructor(
    private readonly moviesService: MoviesService,
    private readonly seriesService: SeriesService) {
  }
  create(createMainDto: CreateMainDto) {
    return 'This action adds a new main';
  }

  findAll() {
    forkJoin([
      this.moviesService.findAll(),
      this.seriesService.findAll(),
    ]).subscribe(([result1, result2]) => {
      console.log(result1 + ' ' + result2); // Вывод: "Hello World"
    });
    return `This action returns all main`;
  }

  findOne(id: number) {
    return `This action returns a #${id} main`;
  }

  update(id: number, updateMainDto: UpdateMainDto) {
    return `This action updates a #${id} main`;
  }

  remove(id: number) {
    return `This action removes a #${id} main`;
  }
}

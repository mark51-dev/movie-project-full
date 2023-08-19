import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Series } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Series)
    private readonly seriesRepository: Repository<Series>,
  ) {}
  create(createSeriesDto: CreateSeriesDto) {
    return this.seriesRepository.save(createSeriesDto);
  }

  findAll(params?: Record<any, any>) {
    if (params) {
      return this.seriesRepository.find({
        where: params,
      });
    }
    return this.seriesRepository.find();
  }

  findAllWithPagination({ page, limit }) {
    const res = this.seriesRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return res;
  }

  findOne(imdbId: string) {
    return this.seriesRepository.findOneBy({ imdbId });
  }

  update(id: number, updateSeriesDto: UpdateSeriesDto) {
    return `This action updates a #${id} series`;
  }

  remove(id: number) {
    return this.seriesRepository.delete(id);
  }
}

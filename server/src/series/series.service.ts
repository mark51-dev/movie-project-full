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
      const { type, genre, country, year } = params;

      const query = this.seriesRepository.createQueryBuilder('series');

      query.where('series.type = :type', { type });

      if (genre && genre.length > 0) {
        query.andWhere(':genre = ANY(series.genres)', { genre });
      }

      if (country && country.length > 0) {
        query.andWhere(':country = ANY(series.countries)', { country });
      }

      if (year && year.length > 0) {
        query.andWhere(':year = ANY(series.year)', { year });
      }

      return query.getMany();
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

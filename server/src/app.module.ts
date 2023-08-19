import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/entities/movie.entity';
import { Series } from './series/entities/series.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SeriesModule } from './series/series.module';
import { MainModule } from './main/main.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // rootPath: join(__dirname, '..', 'video'), // Путь к папке с клиентским SPA
      // serveRoot: '/video', // Настройка корневого маршрута для обслуживания статики
      // renderPath: '/video/*', // Маршрут, для которого отключаем обслуживание "index.html"
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Movie, Series],
      synchronize: true,
    }),
    MoviesModule,
    SeriesModule,
    MainModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

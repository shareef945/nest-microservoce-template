import { Inject, Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { AnalyticsRepository } from './analytics.repository';
import { PAYMENTS_SERVICE } from '@app/common';
import { map } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class AnalyticsService {
  constructor(
    private readonly analyticsRepository: AnalyticsRepository,
    @Inject(PAYMENTS_SERVICE) private readonly paymentsService: ClientProxy,
  ) {}

  async create(createAnalyticsDto: CreateAnalyticsDto, userId: string) {
    return this.paymentsService
      .send('create_charge', createAnalyticsDto.charge)
      .pipe(
        map(() => {
          return this.analyticsRepository.create({
            ...createAnalyticsDto,
            timestamp: new Date(),
            userId: userId,
          });
        }),
      );
  }

  async findAll() {
    return this.analyticsRepository.find({});
  }

  async findOne(_id: string) {
    return this.analyticsRepository.findOne({ _id });
  }

  async update(_id: string, updateAnalyticsDto: UpdateAnalyticsDto) {
    return this.analyticsRepository.findOneAndUpdate(
      { _id },
      { $set: updateAnalyticsDto },
    );
  }

  async remove(_id: string) {
    return this.analyticsRepository.findOneAndDelete({ _id });
  }
}

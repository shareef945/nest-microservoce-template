import { Injectable } from '@nestjs/common';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { AnalyticsRepository } from './analytics.repository';

@Injectable()
export class AnalyticsService {
  constructor(private readonly analyticsRepository: AnalyticsRepository) {}

  create(createAnalyticsDto: CreateAnalyticsDto, userId: string) {
    return this.analyticsRepository.create({
      ...createAnalyticsDto,
      timestamp: new Date(),
      userId: userId,
    });
  }

  findAll() {
    return this.analyticsRepository.find({});
  }

  findOne(_id: string) {
    return this.analyticsRepository.findOne({ _id });
  }

  update(_id: string, updateAnalyticsDto: UpdateAnalyticsDto) {
    return this.analyticsRepository.findOneAndUpdate(
      { _id },
      { $set: updateAnalyticsDto },
    );
  }

  remove(_id: string) {
    return this.analyticsRepository.findOneAndDelete({ _id });
  }
}

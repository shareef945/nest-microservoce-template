import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { AnalyticsDocument } from './models/analytics.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnalyticsRepository extends AbstractRepository<AnalyticsDocument> {
  protected readonly logger = new Logger(AnalyticsRepository.name);

  constructor(
    @InjectModel(AnalyticsDocument.name)
    analyticsModel: Model<AnalyticsDocument>,
  ) {
    super(analyticsModel);
  }
}

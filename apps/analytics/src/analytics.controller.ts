import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { CreateAnalyticsDto } from './dto/create-analytics.dto';
import { UpdateAnalyticsDto } from './dto/update-analytics.dto';
import { CurrentUser, JwtAuthGuard, Roles, UserDto } from '@app/common';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createAnalyticsDto: CreateAnalyticsDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.analyticsService.create(createAnalyticsDto, user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.analyticsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.analyticsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnalyticsDto: UpdateAnalyticsDto,
  ) {
    return this.analyticsService.update(id, updateAnalyticsDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @Roles('Admin')
  async remove(@Param('id') id: string) {
    return this.analyticsService.remove(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get()
  @ApiOkResponse({ description: 'List all courses' })
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId')
  @ApiOkResponse({ description: 'List one course' })
  async getCoursesById(@Param('courseId') courseId) {
    const courses = await this.coursesService.getCourse(courseId);
    return courses;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Add a course' })
  async addCourse(@Body() createCourseDTO: CreateCourseDTO) {
    const courses = await this.coursesService.addCourse(createCourseDTO);
    return courses;
  }

  @Delete()
  @ApiCreatedResponse({ description: 'Remove a course' })
  async deleteCourse(@Query() query) {
    const courses = await this.coursesService.deleteCourse(query.courseId);
    return courses;
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = COURSES;
  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }
  getCourse(courseId): Promise<any> {
    let id = Number(courseId);
    return new Promise((resolve) => {
      const course = this.courses.find((course) => course.id == id);
      if (!course) {
        throw new HttpException('valid id course is required', 404);
      }
      resolve(course);
    });
  }
  addCourse(course): Promise<any> {
    return new Promise((resolve) => {
      this.courses.push(course);
      resolve(this.courses);
    });
  }
  deleteCourse(courseId): Promise<any> {
    let id = Number(courseId);
    return new Promise((resolve) => {
      let index = this.courses.findIndex((course) => courseId === id);
      if (index === -1) {
        throw new HttpException('valid id is required to remove', 400);
      }
      this.courses.splice(index, 1);
      resolve(this.courses);
    });
  }
}

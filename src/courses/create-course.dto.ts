import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDTO {
  @ApiProperty({ type: Number, description: 'Id' })
  readonly id: number;
  @ApiProperty({ type: String, description: 'title' })
  readonly title: string;
  @ApiProperty({ type: String, description: 'description' })
  readonly description: string;
}

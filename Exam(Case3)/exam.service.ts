import { Injectable } from '@nestjs/common';
import { AverageScoreDto } from './dto/exam.dto.js';

@Injectable()
export class ScoresService {
  calculateAverage(dto: AverageScoreDto) {
    const { scores } = dto

    const passMark = dto.passMark ?? 70

    const count = scores.length

    const total = scores.reduce((sum, score) => {
      return sum + score
    }, 0);

    const average = Number((total / count).toFixed(1))

    const highest = Math.max(...scores)

    const lowest = Math.min(...scores)

    const passed = scores.filter(
      (score) => score >= passMark,
    ).length

    const failed = count - passed

    return {
      success: true,
      message: 'Score summary calculated',
      data: {
        count,
        average,
        highest,
        lowest,
        passMark,
        passed,
        failed,
      },
    };
  }
}
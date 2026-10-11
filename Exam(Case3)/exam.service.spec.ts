import { Test, TestingModule } from '@nestjs/testing'
import { ExamService } from './exam.service.js'

describe('ExamService', () => {
  let service: ExamService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamService],
    }).compile()

    service = module.get<ExamService>(ExamService);
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  })

  describe('calculateAverage', () => {
    it('should calculate score summary correctly', () => {
      const result = service.calculateAverage({
        scores: [80, 90, 75, 60, 88],
        passMark: 70,
      });

      expect(result).toEqual({
        success: true,
        message: 'Score summary calculated',
        data: {
          count: 5,
          average: 78.6,
          highest: 90,
          lowest: 60,
          passMark: 70,
          passed: 4,
          failed: 1,
        },
      });
    });

    it('should use 70 as the default passMark', () => {
      const result = service.calculateAverage({
        scores: [80, 60, 90],
      });

      expect(result.data.passMark).toBe(70);
      expect(result.data.passed).toBe(2);
      expect(result.data.failed).toBe(1);
    });

    it('should round average to 1 decimal place', () => {
      const result = service.calculateAverage({
        scores: [80, 81, 82],
      });

      expect(result.data.average).toBe(81);
    });
  });
});
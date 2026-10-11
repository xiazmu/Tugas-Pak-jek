
import {
  Injectable,
  BadRequestException,
} from '@nestjs/common'

@Injectable()
export class TemperatureService {
  convertTemperature(
    value: number,
    from: string,
    to: string,
  ) {
    if (from === to) {
      throw new BadRequestException(
        'Source and target units must be different',
      )
    }

    let celsius: number

    if (from === 'C') {
      celsius = value;
    } else if (from === 'F') {
      celsius = (value - 32) * 5 / 9;
    } else if (from === 'K') {
      celsius = value - 273.15;
    } else {
      throw new BadRequestException('Invalid source unit')
    }

    let result: number

    if (to === 'C') {
      result = celsius
    } else if (to === 'F') {
      result = celsius * 9 / 5 + 32
    } else if (to === 'K') {
      result = celsius + 273.15
    } else {
      throw new BadRequestException('Invalid target unit')
    }

    return {
      success: true,
      message: 'Temperature converted',
      data: {
        value,
        from,
        to,
        result: Number(result.toFixed(2)),
      },
    };
  }
}

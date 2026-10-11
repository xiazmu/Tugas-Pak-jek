import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    calculateBMI(weightKg: number, heightCm: number) {
        const heightM = heightCm / 100;

        const bmi = Number(
            (weightKg / heightM ** 2).toFixed(2)
        )

        let status = 'Normal'

        if (bmi < 18.5) status = 'Underweight'
        else if (bmi >= 25 && bmi < 30) status= 'Overweight'
        else if (bmi >= 30) status = "Obese"

        return {
            bmi, 
            status,
        }
    }
}
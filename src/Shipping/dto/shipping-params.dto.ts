import { IsIn } from 'class-validator'

export class ShippingParamsDto {
    @IsIn(['jakarta', 'bandung', 'surabaya', 'medan', 'denpasar'])
    city: string
}
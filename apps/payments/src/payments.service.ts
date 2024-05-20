import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { Paystack } from 'paystack-api';
import { NOTIFICATIONS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaymentsCreateChargeDto } from './dto/payments-create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly paystack: ReturnType<typeof Paystack>;
  constructor(
    private readonly configService: ConfigService,
    @Inject(NOTIFICATIONS_SERVICE)
    private readonly notificationsService: ClientProxy,
  ) {
    // this.paystack = Paystack(this.configService.get('PAYSTACK_TEST_SECRET'));
  }

  async createCharge({ card, amount, email }: PaymentsCreateChargeDto) {
    // Create a payment method
    // const paymentMethod = await this.paystack.create({
    //   type: 'card',
    //   card,
    // });

    // // Create a payment intent with the payment method ID
    // const paymentIntent = await this.paystack.create({
    //   payment_method: paymentMethod.id,
    //   amount: amount,
    //   // You might need to add other necessary properties here, like currency
    // });

    this.notificationsService.emit('notify_email', {
      email,
      text: `Your payment of $${amount} has been completed successfully`,
    });
    // Return the payment intent
    return 'paymentIntent';
  }
}

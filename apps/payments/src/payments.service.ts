import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Paystack } from 'paystack-api';

@Injectable()
export class PaymentsService {
  private readonly paystack: ReturnType<typeof Paystack>;
  constructor(private readonly configService: ConfigService) {
    // this.paystack = Paystack(this.configService.get('PAYSTACK_TEST_SECRET'));
  }

  async createCharge({ card, amount }) {
    // Create a payment method
    const paymentMethod = await this.paystack.create({
      type: 'card',
      card,
    });

    // Create a payment intent with the payment method ID
    const paymentIntent = await this.paystack.create({
      payment_method: paymentMethod.id,
      amount: amount,
      // You might need to add other necessary properties here, like currency
    });

    // Return the payment intent
    return paymentIntent;
  }
}

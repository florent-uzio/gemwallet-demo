import { z } from "zod"

export const paymentSchema = z.object({
  // The amount of currency to deliver
  amount: z.string(),
  // The unique address of the account receiving the payment
  destination: z.string(),
  // The token that can be used
  currency: z.string().optional(),
  // The issuer of the token
  issuer: z.string().optional(),
})

export type PaymentTxn = z.infer<typeof paymentSchema>

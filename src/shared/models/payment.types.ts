export type Payment = {
  // The amount of currency to deliver
  amount: string
  // The unique address of the account receiving the payment
  destination: string
  // The token that can be used
  currency?: string
  // The issuer of the token
  issuer?: string
}

import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"
import { PaymentTxn } from "../../../shared/models"

const MAX_W = 400

export const PaymentForm = () => {
  const { register } = useFormContext<PaymentTxn>()

  return (
    <>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <Input {...register("amount")} maxW={MAX_W} />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl>
        <FormLabel>Currency</FormLabel>
        <Input {...register("currency")} maxW={MAX_W} />
      </FormControl>
      <FormControl>
        <FormLabel>Destination</FormLabel>
        <Input {...register("destination")} maxW={MAX_W} />
      </FormControl>
      <FormControl>
        <FormLabel>Issuer</FormLabel>
        <Input {...register("issuer")} maxW={MAX_W} />
      </FormControl>
    </>
  )
}

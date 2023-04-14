import { Button, Heading, Stack, VStack } from "@chakra-ui/react"
import { sendPayment } from "@gemwallet/api"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { PaymentTxn } from "../../../shared/models"
import { PaymentForm } from "./payment-form"

export const Payment = () => {
  const formControls = useForm<PaymentTxn>({
    defaultValues: {
      currency: "XRP",
    },
  })

  const submitHandler: SubmitHandler<PaymentTxn> = (values) => {
    sendPayment(values).then((trHash) => {
      console.log("Transaction Hash: ", trHash)
    })
  }

  return (
    <Stack gap={2}>
      <Heading as="h3" size="xs">
        Create a payment
      </Heading>

      <FormProvider {...formControls}>
        <form onSubmit={formControls.handleSubmit(submitHandler)}>
          <VStack gap={2} alignItems="flex-start">
            <PaymentForm />

            <Button variant="primary" type="submit">
              Send Payment
            </Button>
          </VStack>
        </form>
      </FormProvider>
    </Stack>
  )
}

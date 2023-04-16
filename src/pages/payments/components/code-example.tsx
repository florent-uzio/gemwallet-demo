import { CodeBlock } from "../../../shared/components"

const code = `  const formControls = useForm<PaymentTxn>({
    defaultValues: {
      currency: "XRP",
    },
  })

  const [txns, setTxns] = useState<string[]>([])

  const submitHandler: SubmitHandler<PaymentTxn> = (values) => {
    sendPayment(values).then((trHash) => {
      if (!trHash) return
      setTxns((current) => current.concat(trHash))
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

      <CodeExample />
    </Stack>
  )
`

export const CodeExample = () => {
  return <CodeBlock code={code} />
}

import { CodeBlock } from "../../../shared/components"

const code = `import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import { sendPayment } from "@gemwallet/api"
import { useState } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { PaymentTxn } from "../../../shared/models"
import { CodeExample } from "./code-example"
import { PaymentForm } from "./payment-form"

export const Payment = () => {
  const formControls = useForm<PaymentTxn>({
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
    <Stack gap={5}>
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

      <Heading as="h3" size="xs">
        Transactions
      </Heading>

      <UnorderedList>
        {txns.length ? (
          txns.map((txn) => {
            return (
              <ListItem key={txn}>
                <Link href={https://test.bithomp.com/explorer/txn} isExternal={true}>
                  {txn}
                </Link>
              </ListItem>
            )
          })
        ) : (
          <Text>No transaction found.</Text>
        )}
      </UnorderedList>

      <Heading as="h3" size="xs">
        Code
      </Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Show Code
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box border="1px solid black">
              <CodeExample />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  )
}
`

export const CodeExample = () => {
  return <CodeBlock code={code} />
}

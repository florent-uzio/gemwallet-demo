import { Heading } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useGemWalletContext } from "../../../shared/contexts/gemwallet-connection-context"
import { PaymentTxn } from "../../../shared/models"

export const Payment = () => {
  const { isConnected } = useGemWalletContext()
  const { register } = useForm<PaymentTxn>()

  // useEffect(() => {
  //   isConnected().then((response) => {
  //     alert(response)
  //   })
  // }, [])
  return (
    <Heading as="h3" size="xs">
      Create a payment {isConnected ? "YES" : "NO"}
    </Heading>
  )
}

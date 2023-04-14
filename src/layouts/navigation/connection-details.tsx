import { ChakraProps, Circle, HStack, Text } from "@chakra-ui/react"
import { useGemWalletContext } from "../../shared/contexts"

type ConnectionDetailsProps = {
  sx?: ChakraProps["sx"]
}

export const ConnectionDetails = ({ sx }: ConnectionDetailsProps) => {
  const { isConnected } = useGemWalletContext()

  if (isConnected) {
    return (
      <HStack sx={sx}>
        <Circle size="10px" bg="green.400" /> <Text>Connected</Text>
      </HStack>
    )
  } else {
    return (
      <HStack sx={sx}>
        <Circle size="10px" bg="red.400" /> <Text>Not Connected</Text>
      </HStack>
    )
  }
}

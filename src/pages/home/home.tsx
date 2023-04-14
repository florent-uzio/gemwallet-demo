import { DownloadIcon } from "@chakra-ui/icons"
import { Button, Center, Divider, Flex, Heading, Highlight, Link, VStack } from "@chakra-ui/react"
import { Controls, Player } from "@lottiefiles/react-lottie-player"
import GemWalletLogo from "../../images/gemwallet.svg"
import LottieCurrency from "../../images/lottie/lottie-currency.json"
import { useGemWalletContext } from "../../shared/contexts"

export const Home = () => {
  const { isConnected } = useGemWalletContext()
  return (
    <Center h="100%">
      <VStack gap={20}>
        <Flex alignItems="center" gap={100}>
          <Heading>
            <Highlight
              query={["XRPL", "GemWallet"]}
              styles={{ px: "3", py: "1", rounded: "full", bg: "blue.100" }}
            >
              Build on the XRPL with GemWallet.
            </Highlight>
          </Heading>
          <Player autoplay loop src={LottieCurrency} style={{ height: "300px", width: "300px" }}>
            <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
          </Player>
        </Flex>

        <VStack gap={3}>
          <Flex alignItems="center" gap={5}>
            <img alt="GemWallet" src={GemWalletLogo} />
            <Heading as="h2" size="md">
              <Link href="https://gemwallet.app/" isExternal={true}>
                GemWallet: A crypto wallet & Web3 layer for the XRPL
              </Link>
            </Heading>
            <img alt="GemWallet" src={GemWalletLogo} />
          </Flex>
          {!isConnected && (
            <Button
              as={Link}
              colorScheme="blue"
              href="https://chrome.google.com/webstore/detail/gemwallet/egebedonbdapoieedfcfkofloclfghab"
              leftIcon={<DownloadIcon />}
              isExternal={true}
            >
              Download GemWallet
            </Button>
          )}
        </VStack>

        <Divider />

        <VStack>
          <Heading as="h2" size="md">
            <Link href="https://xrpl.org" isExternal={true}>
              The XRP Ledger: A Scalable, Sustainable Blockchain
            </Link>
          </Heading>
        </VStack>
      </VStack>
    </Center>
  )
}

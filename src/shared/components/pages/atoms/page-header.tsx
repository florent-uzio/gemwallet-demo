import { ChakraProps, Flex } from "@chakra-ui/react"

type PageHeaderProps = React.HTMLAttributes<HTMLHeadElement> & {
  borderless?: boolean
  css?: ChakraProps["sx"]
} & ({ returnUrl?: never; returnPageName?: never } | { returnUrl: string; returnPageName: string }) // 👇🏻 Make sure that if one of the two props is defined then the other one must be defined too.

// const headerStyle = chakra.css({
//   m: [5, 5, 4],
//   variants: {
//     bordered: {
//       true: {
//         borderBottom: "1px solid $border200",
//         pb: 3,
//       },
//     },
//   },
// })

/**
 * Child component for Page that renders a title, as well as optional action and children.
 * @param {Object} props Component props
 * @param {boolean} [props.borderless] Optional boolean to hide the bottom border. Useful for pages that have tab navigation below the title.
 * @param {string} [props.returnPageName] Optional string to indicate the page name the user is redirected to.
 * @param {string} [props.returnUrl] Optional the url the user is redirected to. For example "/accounts".
 * @returns PageHeader content
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  borderless,
  css,
  children,
  //   className,
  returnPageName,
  returnUrl,
  ...rest
}) => {
  return (
    <Flex
      {...rest}
      alignItems="center"
      as="header"
      justifyContent="space-between"
      mb="4"
      mt="5"
      mx="5"
      sx={css}
      wrap="wrap"
    >
      {/* {returnUrl && returnPageName && (
          <FlexChild basis="100%" css={{ mb: 1 }}>
            <InternalLink
              to={returnUrl}
              css={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <ArrowLeftIcon css={{ ml: -0.75 }} /> Back To {returnPageName}
            </InternalLink>
          </FlexChild>
        )} */}
      {children}
    </Flex>
  )
}

import { Text } from "@chakra-ui/react"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Page } from "./page"

const meta: Meta<typeof Page> = {
  title: "Components/Page",
  component: Page,
  parameters: {
    fullscreen: true,
  },
}

export default meta
type Story = StoryObj<typeof Page>

const PageContent: React.FC = () => (
  <>
    <Text css={{ mb: 4 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas accumsan auctor.
      Donec enim libero, facilisis at nunc nec, fringilla vestibulum augue. Vivamus laoreet
      dignissim enim vel iaculis. Praesent ultricies elit nisl, et auctor eros mattis et. Praesent
      molestie lacus eget risus commodo, in laoreet lorem rutrum. Maecenas feugiat, arcu at lobortis
      varius, mi dolor venenatis ipsum, at vestibulum justo sapien eget dolor. Duis eget sagittis
      ante. Aliquam erat volutpat.
    </Text>
    <Text css={{ my: 4 }}>
      Integer et nibh finibus ex auctor elementum. Ut at nibh a felis sollicitudin iaculis mollis
      eget nunc. Curabitur lacus ipsum, vulputate non turpis vel, volutpat aliquet nunc. Ut
      porttitor est odio, id tempor turpis varius pretium. Nullam et lobortis metus. Ut vel orci
      lobortis, tincidunt risus non, suscipit urna. Nam et lacus sit amet magna sodales finibus ut a
      tortor. Sed eros dui, laoreet quis mollis vel, semper et arcu. Proin et nisl finibus, porta
      massa fermentum, auctor urna. Proin aliquet, nulla id posuere faucibus, arcu libero elementum
      libero, vehicula faucibus lacus lectus eget eros. Donec ligula arcu, porttitor in pellentesque
      vel, ultrices sed tortor. Sed et orci id justo egestas ultrices non at tellus.
    </Text>
    <Text css={{ my: 4 }}>
      Donec porta lacus nec eleifend tristique. Praesent vulputate aliquet felis. Cras orci tellus,
      gravida eu congue sed, varius eget odio. Integer tincidunt scelerisque dui, eu laoreet orci
      fermentum sit amet. Morbi cursus aliquam ultrices. Ut ligula arcu, convallis non dictum ac,
      lobortis sed libero. Pellentesque est lacus, dignissim lacinia risus at, tempus tincidunt
      neque.
    </Text>
    <Text css={{ my: 4 }}>
      Aliquam pharetra, arcu in dictum volutpat, nisl metus condimentum est, et tempus quam ante sed
      mi. Nam pellentesque venenatis risus vel vehicula. Nulla et nulla eu lacus pellentesque cursus
      vitae sed felis. Aenean condimentum orci at mauris ultrices, vitae tempor nulla rhoncus.
      Praesent nec tellus dolor. Vivamus dui dui, consectetur sit amet magna vitae, viverra posuere
      massa. Phasellus sit amet tempor libero. Cras sollicitudin lectus luctus purus dignissim, sit
      amet venenatis urna sollicitudin. Pellentesque vestibulum lorem at vehicula posuere.
    </Text>
    <Text css={{ my: 4 }}>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Aliquam vitae tortor luctus tortor hendrerit pulvinar sit amet ut mauris. Suspendisse potenti.
      In eu justo cursus augue laoreet lobortis id eu mi. In placerat tellus eget sapien laoreet
      eleifend. Fusce eleifend efficitur aliquet. Fusce lacinia nec nulla ut rhoncus. Nunc vel mi
      eleifend, ornare elit ultricies, tempus ante. Sed ut maximus nunc. Etiam ac tempor leo. Etiam
      quis laoreet neque. Aliquam vehicula erat vel tortor volutpat, quis ornare elit fringilla.
      Mauris nisl elit, dictum at pharetra sit amet, venenatis vel diam. Suspendisse maximus neque
      mauris, aliquet facilisis mauris convallis eget.
    </Text>
    <Text css={{ my: 4 }}>
      Vivamus rutrum ornare libero vitae sagittis. In fermentum, erat et vulputate ultrices, dui
      magna maximus est, nec suscipit magna mi ut est. Pellentesque sodales condimentum mi, nec
      aliquam augue pulvinar in. Curabitur at diam elementum, mollis ipsum sed, tempor lectus. Cras
      vel neque finibus, commodo dui sed, pellentesque nulla. Nunc commodo libero nisi, sit amet
      convallis nulla vestibulum sit amet. Praesent scelerisque, lacus dignissim congue cursus,
      mauris nisl euismod mauris, quis consectetur elit magna non ligula. Nulla facilisi. Aliquam
      rhoncus pretium semper. Cras vitae dolor enim. Duis eget faucibus diam. Suspendisse nec
      hendrerit augue, et dictum lectus. Aenean ante dolor, condimentum vitae quam in, semper porta
      metus. Donec vel magna eget nunc consectetur semper.
    </Text>
    <Text css={{ my: 4 }}>
      Sed id libero hendrerit, facilisis est vel, viverra justo. Donec id ullamcorper arcu, eu
      commodo massa. Sed suscipit neque id faucibus euismod. Nam rhoncus sem eget sodales
      vestibulum. Nullam finibus vel dui sed aliquet. Etiam vitae feugiat justo, at consectetur
      mauris. Nunc elementum, lectus vel sollicitudin tincidunt, nulla tellus euismod tellus, eget
      laoreet odio quam sed ligula. Sed imperdiet aliquet tortor vitae iaculis. Aenean placerat,
      arcu nec aliquam viverra, turpis diam ornare nulla, ut dictum dolor erat ac turpis. Aenean
      molestie dolor ut sollicitudin gravida. Duis elementum non dui vel mollis. Aliquam felis elit,
      ultrices quis mauris vitae, dictum ullamcorper dui. Nunc a ante ex. Quisque a blandit quam.
      Aenean ipsum orci, egestas eget libero vitae, suscipit commodo dui. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </Text>
    <Text css={{ my: 4 }}>
      Ut eget eros ut urna interdum luctus. Nullam lacinia, sem nec tempus cursus, ante metus
      hendrerit quam, id sollicitudin justo tellus sit amet libero. Proin tincidunt vitae nibh
      auctor sodales. Sed vel ultricies quam. In viverra arcu non mauris porta, tempor vulputate ex
      volutpat. Integer dictum dui condimentum sem sagittis porta. Nullam scelerisque aliquam neque,
      et porta ex euismod nec. Praesent auctor sit amet tellus vel pretium. Aliquam ullamcorper ut
      sapien vehicula interdum. Vivamus malesuada varius vulputate. In quis imperdiet augue. Mauris
      sollicitudin, massa et porta porttitor, nunc eros efficitur purus, non molestie odio massa
      vehicula erat.
    </Text>
    <Text css={{ my: 4 }}>
      Aliquam sed semper nisi. Sed ultrices aliquam quam quis vestibulum. Aenean bibendum ornare
      tortor. Mauris odio mauris, fermentum ac sapien sed, imperdiet eleifend velit. Duis efficitur
      magna non risus aliquam, at accumsan tellus mollis. Sed eget quam eros. Duis ut nibh magna.
      Morbi dapibus odio sit amet fermentum ultrices. Orci varius natoque penatibus et magnis dis
      parturient montes, nascetur ridiculus mus. Maecenas quis dictum lorem. Fusce feugiat suscipit
      eleifend. Morbi a erat eget nisi ornare pellentesque quis et mi. Fusce quis euismod mi, vitae
      ullamcorper magna. Maecenas lobortis lectus at risus rutrum pellentesque. Praesent nec ante
      nec arcu rhoncus bibendum. Vestibulum vitae rhoncus urna, non molestie metus.
    </Text>
    <Text css={{ mt: 4 }}>
      Fusce facilisis nibh eget mauris ornare, at viverra lorem iaculis. Duis cursus id metus at
      ultrices. Quisque condimentum imperdiet ipsum, ac sollicitudin est rutrum volutpat. Nulla
      facilisi. Proin laoreet elit nec lorem venenatis, non efficitur metus pulvinar. Vestibulum
      nulla ipsum, malesuada ac lorem quis, tristique feugiat tortor. Pellentesque vulputate
      interdum neque ac blandit. Mauris tristique placerat turpis nec pellentesque. Nulla facilisi.
      Vestibulum cursus pretium arcu. Donec fringilla magna quis libero laoreet scelerisque.
    </Text>
  </>
)

export const Basic: Story = {
  render: () => {
    return (
      <Page>
        <Page.Header>
          <Page.Title title="Accounts" />
        </Page.Header>
        <Page.Body>
          <PageContent />
        </Page.Body>
      </Page>
    )
  },
}

// export const HeaderButton: Story = {
//   render: () => {
//     const handleClick = () => {
//       alert("You clicked me!")
//     }
//     return (
//       <Page>
//         <Page.Header>
//           <Page.Title title="Accounts" />
//           <Page.HeaderActions>
//             <Button colorScheme="blue" onClick={handleClick}>
//               Click Me
//             </Button>
//           </Page.HeaderActions>
//         </Page.Header>
//         <Page.Body>
//           <PageContent />
//         </Page.Body>
//       </Page>
//     )
//   },
// }

// export const HeaderChildren: Story = {
//   render: () => {
//     return (
//       <Page>
//         <Page.Header>
//           <Page.Title title="Accounts" />
//           <Flex gap={8}>
//             <Text>
//               <LabelText as="span" size="sm" css={{ display: "block" }}>
//                 Total Supply
//               </LabelText>
//               1,000,026
//             </Text>
//             <Text>
//               <LabelText as="span" size="sm" css={{ display: "block" }}>
//                 Total Distributed
//               </LabelText>
//               6,224
//             </Text>
//           </Flex>
//         </Page.Header>
//         <Page.Body>
//           <PageContent />
//         </Page.Body>
//       </Page>
//     )
//   },
// }

// export const HeaderButtonAndChildren: Story = {
//   render: () => {
//     const handleClick = () => {
//       alert("You clicked me!")
//     }
//     return (
//       <Page>
//         <Page.Header>
//           <Page.Title title="Accounts" />
//           <Page.HeaderActions>
//             <Flex gap={8}>
//               <Text>
//                 <LabelText as="span" size="sm" css={{ display: "block" }}>
//                   Total Supply
//                 </LabelText>
//                 1,000,026
//               </Text>
//               <Text>
//                 <LabelText as="span" size="sm" css={{ display: "block" }}>
//                   Total Distributed
//                 </LabelText>
//                 6,224
//               </Text>
//             </Flex>
//             <PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>
//           </Page.HeaderActions>
//         </Page.Header>
//         <Page.Body>
//           <PageContent />
//         </Page.Body>
//       </Page>
//     )
//   },
// }

// export const BorderlessHeader: Story = {
//   render: () => {
//     const handleClick = () => {
//       alert("You clicked me!")
//     }
//     return (
//       <Page>
//         <Page.Header borderless={true}>
//           <Page.Title title="Accounts" />
//           <Page.HeaderActions>
//             <PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>
//           </Page.HeaderActions>
//         </Page.Header>
//         <Page.Body>
//           <PageContent />
//         </Page.Body>
//       </Page>
//     )
//   },
// }

/* eslint-disable react/prop-types */
import {Flex, Heading, Text} from '@chakra-ui/core'
import {useTranslation} from 'react-i18next'
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogBody,
} from '../../shared/components/components'
import {Link} from '../../shared/components'
import {PrimaryButton} from '../../shared/components/button'

export function LayoutContainer(props) {
  return (
    <Flex
      align="stretch"
      flexWrap="wrap"
      color="brand.gray"
      fontSize="md"
      minH="100vh"
      {...props}
    />
  )
}

export function Page(props) {
  return (
    <Flex
      flexDirection="column"
      align="flex-start"
      flexBasis={0}
      flexGrow={999}
      maxH="100vh"
      minW="50%"
      px={20}
      py={6}
      overflowY="auto"
      {...props}
    />
  )
}

export function PageTitle(props) {
  return (
    <Heading as="h1" fontSize="xl" fontWeight={500} py={2} mb={4} {...props} />
  )
}

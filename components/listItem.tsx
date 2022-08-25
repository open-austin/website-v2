import {
  ChakraComponent,
  ListItem as ChakraListItem,
  Text,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

export type ListItemProps = {
  children: ReactElement | string
}

const ListItem = ({ children }: ListItemProps) => (
  <ChakraListItem>
    <Text>{children}</Text>
  </ChakraListItem>
)

export default ListItem

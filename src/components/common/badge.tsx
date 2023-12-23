import { IBadge } from '#/data/badges'
import { Flex, Text, Tooltip } from '@chakra-ui/react'

interface IBadgeProps extends IBadge {}

export function Badge({ color, icon: Icon, text, tip }: IBadgeProps) {
  return (
    <Tooltip label={tip} placement="top" isDisabled={!tip} hasArrow textAlign="center">
      <Flex wrap="wrap" gap={2} mb={2}>
        <Flex
          bg={`${color}.700`}
          color={`${color}.200`}
          align="center"
          display="inline-flex"
          borderRadius="full"
          p={1}
          fontSize={14}
          fontWeight={500}
        >
          <Icon size={20} />
          <Text px={1}>{text}</Text>
        </Flex>
      </Flex>
    </Tooltip>
  )
}

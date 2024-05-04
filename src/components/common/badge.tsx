import { IBadge } from '#/data/badges'
import { Flex, Text, Tooltip } from '@chakra-ui/react'

interface IBadgeProps extends IBadge {}

export function Badge({ color, icon: Icon, text, tip }: IBadgeProps) {
  return (
    <Tooltip label={tip} placement="top" isDisabled={!tip} hasArrow textAlign="center">
      <Flex
        color={`${color}.200`}
        align="center"
        display="inline-flex"
        borderRadius="full"
        fontSize={14}
        fontWeight={500}
        mb={2}
        gap={1}
        tabIndex={0}
      >
        <Text fontSize="xs">{text}</Text>
        <Icon size={16} />
      </Flex>
    </Tooltip>
  )
}

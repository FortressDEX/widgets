import { Trans } from '@lingui/macro'
import Row from 'components/Row'
import { Logo } from 'icons'
import { memo } from 'react'
import styled from 'styled-components/macro'
import { brand, ThemedText } from 'theme'

import ExternalLink from './ExternalLink'

const UniswapA = styled(ExternalLink)`
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  text-decoration: none;

  ${Logo} {
    fill: ${({ theme }) => theme.secondary};
    height: 1em;
    transition: transform 0.25s ease, fill 0.25s ease;
    width: 1em;
    will-change: transform;
  }

  :hover ${Logo} {
    fill: ${brand};
    transform: rotate(-5deg);
  }
`

export default memo(function BrandedFooter() {
  return (
    <Row justify="center">
      <UniswapA href={`https://uniswap.org/`}>
        <Row gap={0.25}>
          <Logo />
          <ThemedText.Caption>
            <Trans>Powered by the Candle protocol</Trans>
          </ThemedText.Caption>
        </Row>
      </UniswapA>
    </Row>
  )
})

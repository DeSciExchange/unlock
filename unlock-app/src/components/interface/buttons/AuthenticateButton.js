import styled from 'styled-components'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { ActionButton } from './ActionButton'
import { rpcForWalletConnect, selectProvider } from '../LoginPrompt'
import { ConfigContext } from '../../../utils/withConfig'

const AuthenticateButton = ({
  web3Provider,
  showAccount,
  onProvider,
  login,
}) => {
  const config = useContext(ConfigContext)

  const authenticateWithProvider = () => {
    onProvider(web3Provider)
  }

  const authenticateWithWalletConnect = () => {
    const walletConnectProvider = new WalletConnectProvider({
      rpc: rpcForWalletConnect(config),
    })
    onProvider(walletConnectProvider)
  }

  return (
    <Container>
      <Button disabled={!web3Provider} onClick={authenticateWithProvider}>
        Wallet
      </Button>
      <WalletConnectButton onClick={authenticateWithWalletConnect}>
        <svg
          width="27"
          height="16"
          viewBox="0 0 27 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.82274 3.12612C10.0628 -1.04204 16.9372 -1.04204 21.1773 3.12612L21.6876 3.62777C21.8996 3.83617 21.8996 4.17407 21.6876 4.38248L19.942 6.09851C19.836 6.20271 19.6641 6.20271 19.5581 6.09851L18.8559 5.40818C15.8979 2.50037 11.1021 2.50037 8.14416 5.40818L7.39213 6.14746C7.28613 6.25166 7.11426 6.25166 7.00826 6.14746L5.26264 4.43143C5.05064 4.22303 5.05064 3.88513 5.26264 3.67672L5.82274 3.12612ZM24.7874 6.67505L26.341 8.20232C26.553 8.41073 26.553 8.74862 26.341 8.95703L19.3357 15.8437C19.1237 16.0521 18.78 16.0521 18.568 15.8437C18.568 15.8437 18.568 15.8437 18.568 15.8437L13.596 10.956C13.543 10.9039 13.4571 10.9039 13.4041 10.956C13.4041 10.956 13.4041 10.956 13.4041 10.956L8.43224 15.8437C8.22024 16.0521 7.87652 16.0521 7.66451 15.8437C7.66451 15.8437 7.66451 15.8437 7.66451 15.8437L0.659001 8.95694C0.447 8.74853 0.447 8.41064 0.659001 8.20223L2.21261 6.67496C2.42461 6.46655 2.76833 6.46655 2.98034 6.67496L7.95235 11.5627C8.00535 11.6148 8.09129 11.6148 8.14429 11.5627C8.14429 11.5627 8.14429 11.5627 8.14429 11.5627L13.1161 6.67496C13.3281 6.46655 13.6718 6.46654 13.8838 6.67494C13.8838 6.67494 13.8838 6.67495 13.8838 6.67495L18.8558 11.5627C18.9088 11.6148 18.9947 11.6148 19.0477 11.5627L24.0197 6.67505C24.2317 6.46664 24.5754 6.46664 24.7874 6.67505Z"
            fill="white"
          />
        </svg>
      </WalletConnectButton>
      <Button disabled={!showAccount || web3Provider} onClick={login}>
        Sign-in
      </Button>
    </Container>
  )
}

AuthenticateButton.propTypes = {
  web3Provider: PropTypes.func.isRequired,
  showAccount: PropTypes.bool.isRequired,
  onProvider: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
}

const Container = styled.div`
  display: flex;
  flex-direction: horizontal;
`

const Button = styled(ActionButton)`
  margin: 5px;
  height: 40px;
`

const WalletConnectButton = styled(Button)`
  display: grid;
  padding-left: 5px;
  padding-right: 5px;
  align-items: center;
  justify-items: center;
`
export default AuthenticateButton
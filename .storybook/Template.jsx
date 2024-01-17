import React from "react"
import "~/styles/helpers/resetNew.scss"
import "~/styles/helpers/animations.scss"
import "~/styles/helpers/moving-objects.scss"
import "~/styles/ui/index.scss"

import { createWeb3Modal } from "@web3modal/wagmi/react"
import { walletConnectProvider } from "@web3modal/wagmi"
import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { mainnet, polygon, arbitrum, bsc, sepolia } from "wagmi/chains"
import { InjectedConnector } from "wagmi/connectors/injected"

import { infuraProvider } from "wagmi/providers/infura"
import { publicProvider } from "wagmi/providers/public"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import mainconfig from "../src/config"

const infuraId = mainconfig.services.infura.key
const alchemyId = mainconfig.services.alchemy.key

const projectId = mainconfig.services.walletconnect.key

const selectedChains = [mainnet, polygon, arbitrum, bsc]

const { chains, publicClient, webSocketPublicClient } = configureChains(
	selectedChains,
	[infuraProvider({ apiKey: infuraId, stallTimeout: 1_000 }), alchemyProvider({ apiKey: alchemyId }), walletConnectProvider({ projectId }), publicProvider()],
	{ stallTimeout: 3000 }
)

const connectors = [
	new InjectedConnector({ chains: selectedChains }),
	new WalletConnectConnector({
		chains,
		options: {
			infuraId,
			projectId: projectId,
			showQrModal: false,
		},
	}),
]

const wagmiConfig = createConfig({
	autoConnect: false,
	connectors: connectors,
	publicClient,
	webSocketPublicClient,
})

createWeb3Modal({
	defaultChain: mainnet,
	wagmiConfig,
	projectId,
	chains,
})

export const TemplateSection = ({ children }) => {
	return (
		<div id="content-wrap">
			<main className="main-sections">{children}</main>
		</div>
	)
}

export const TemplateSectionWeb3 = ({ children }) => {
	return (
		<WagmiConfig config={wagmiConfig}>
			<div id="content-wrap">
				<main className="main-sections">{children}</main>
			</div>
		</WagmiConfig>
	)
}

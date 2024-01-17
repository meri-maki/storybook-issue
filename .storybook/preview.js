/** @type { import('@storybook/react').Preview } */

import "../src/styles/helpers/resetNew.scss"
import "../src/styles/ui/index.scss"

const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "dark",
			values: [
				{ name: "dark", value: "#282828" },
				{ name: "light", value: "#ffffff" },
			],
		},
	},
}

export default preview

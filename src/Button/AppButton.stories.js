import React from "react"
import { AppButton } from "./AppButton"

export default {
	title: "UI/Buttons/AppButton",
	component: AppButton,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],

	argTypes: {
		backgroundColor: { control: "color" },
		app: {
			control: { type: "radio" },
			options: ["AppStore", "Google Play"],
			defaultValue: "AppStore",
		},
	},
}

const Template = (args) => <AppButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}

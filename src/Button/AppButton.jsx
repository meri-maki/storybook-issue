import { Button, ButtonColor } from "./Button"
import AppStore from "@/UI/icons/apple.svg"
import GooglePlay from "@/UI/icons/google_play.svg"
import React from "react"
import cls from "./AppButton.module.scss"

export const AppButton = ({ app }) => {
	return (
		<Button className={cls.app} link color={ButtonColor.pink} href='/'>
			<div className={cls.info}>
				<img src={app === "AppStore" ? AppStore : GooglePlay} alt={app} width="24" height="24" />
				<div className={cls.text}>
					<div className={cls.download}>Available on {app === "AppStore" && "the"}</div>
					<div className={cls.store}>{app === "AppStore" ? "App Store" : "Google Play"}</div>
				</div>
			</div>
		</Button>
	)
}

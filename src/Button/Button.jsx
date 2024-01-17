import React from "react"
import cls from "./Button.module.scss"
import { classNames } from "../tools/classNames"

export const ButtonColor = { pink: "pink", blue: "blue", yellow: "yellow", cian: "cian" }
export const ButtonStyle = { primary: "primary", icon: "icon", onlyIcon: "onlyIcon", outlined: "outlined" }

export const ButtonSize = { full: "full" }

export const Button = (props) => {
	const { link, pseudo, href, size, style, color, header, className, children, onClick, discord, type = "button", discordMain, mint, styles, ...otherProps } = props
	const mods = {
		[cls.header]: header,
		[cls[size]]: size,
		[cls.discord]: discord,
		[cls.discordMain]: discordMain,
		[cls.mint]: mint,
		[cls[color]]: color,
		[cls[style]]: style,
	}
	return (
		<>
			{link ? (
				<div className={`flex ${className ? className : ""}`}>
					<a href={href} target="_blank" rel="noreferrer" className={classNames(cls.Button, mods, [className])} style={styles} onClick={onClick} {...otherProps}>
						{children}
						<div data-sh />
					</a>
				</div>
			) : pseudo ? (
				<div className={classNames(cls.Button, mods, [className])} onClick={onClick} {...otherProps} style={styles}>
					{children}
					<div data-sh />
				</div>
			) : (
				<button className={classNames(cls.Button, mods, [className])} onClick={onClick} {...otherProps} type={type ? type : "button"} style={styles}>
					{children}
					<div data-sh />
				</button>
			)}
		</>
	)
}

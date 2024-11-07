import * as React from "react";
import { Slot } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";
import defaultConfig from "@tamagui/config/v3";
import { AuthenticationProvider } from "@/context/auth-context";

const config = createTamagui({
	...defaultConfig,
	fonts: {
		body: { family: "System", size: {} },
	},
});

export default function RootLayout() {
	return (
		<TamaguiProvider config={config}>
			<AuthenticationProvider>
				<Slot />
			</AuthenticationProvider>
		</TamaguiProvider>
	);
}

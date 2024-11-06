import * as React from "react";
import { Slot } from "expo-router";
import { createTamagui, TamaguiProvider } from "tamagui";
import defaultConfig from "@tamagui/config/v3";

const config = createTamagui({
	...defaultConfig,
	fonts: {
		body: { family: "System", size: {} },
	},
});

export default function RootLayout() {
	return (
		<TamaguiProvider config={config}>
			<Slot />
		</TamaguiProvider>
	);
}

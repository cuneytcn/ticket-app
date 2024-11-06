import * as React from "react";
import { Stack } from "expo-router";

export default function EventLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, headerBackTitle: "Events" }} />
	);
}

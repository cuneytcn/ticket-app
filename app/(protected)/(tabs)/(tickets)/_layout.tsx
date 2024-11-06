import * as React from "react";
import { Stack } from "expo-router";

export default function TicketLayout() {
	return (
		<Stack screenOptions={{ headerShown: false, headerBackTitle: "Tickets" }} />
	);
}

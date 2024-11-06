import * as React from "react";
import { Tabs } from "expo-router";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
	const tabs = [
		{
			showFor: [],
			name: "(events)",
			displayName: "Events",
			icon: "calendar",
			options: {
				headerShown: true,
			},
		},
		{
			showFor: [],
			name: "(tickets)",
			displayName: "My Tickets",
			icon: "ticket",
			options: {
				headerShown: true,
			},
		},
		{
			showFor: [],
			name: "(scan-tickets)",
			displayName: "Scan Tickets",
			icon: "scan",
			options: {
				headerShown: true,
			},
		},
		{
			showFor: [],
			name: "(settings)",
			displayName: "Settings",
			icon: "cog",
			options: {
				headerShown: true,
			},
		},
	];

	return (
		<Tabs>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						...tab.options,
						headerTitle: tab.displayName,
						tabBarStyle: {
							paddingBottom: 10,
							paddingTop: 4,
						},
						tabBarLabel: ({ focused }) => (
							<Text style={{ color: focused ? "black" : "gray", fontSize: 12 }}>
								{tab.displayName}
							</Text>
						),
						tabBarIcon: ({ focused }) => (
							<Ionicons
								name={tab.icon as React.ComponentProps<typeof Ionicons>["name"]}
								color={focused ? "black" : "gray"}
							/>
						),
					}}
				/>
			))}
		</Tabs>
	);
}

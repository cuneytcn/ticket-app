import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import {
	Button,
	Input,
	ScrollView,
	Text,
	XStack,
	YStack,
	ZStack,
} from "tamagui";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function index() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [authMode, setAuthMode] = React.useState("");

	return (
		<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
			<ScrollView contentContainerStyle={{ flex: 1 }}>
				<YStack
					fullscreen
					justifyContent="center"
					alignItems="center"
					gap={40}
					padding={40}
				>
					<XStack gap={10}>
						<Text fontSize={30} fontWeight={"bold"}>
							Ticket Booking
						</Text>
						<Text>
							<Ionicons name="ticket" size={50} color="black" />
						</Text>
					</XStack>

					<YStack width={"100%"} gap={30}>
						<YStack gap={5}>
							<Text marginLeft={10}>Email</Text>
							<Input
								value={email}
								onChangeText={setEmail}
								placeholder="Enter your details..."
							/>
						</YStack>
						<YStack gap={5}>
							<Text marginLeft={10}>Password</Text>
							<Input
								value={password}
								onChangeText={setPassword}
								secureTextEntry
								autoCapitalize="none"
								placeholder="Password your details..."
							/>
						</YStack>
						<Button themeInverse>Register</Button>
					</YStack>
				</YStack>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import {
	Button,
	Input,
	ScrollView,
	Separator,
	Text,
	XStack,
	YStack,
	ZStack,
} from "tamagui";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@/context/auth-context";

export default function index() {
	const { authenticate, isLoadingAuth } = useAuth();

	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [authMode, setAuthMode] = React.useState("login");

	async function onAuthenticate() {
		await authenticate(authMode, email, password);
	}

	const toggleAuthMode = () => {
		setAuthMode(authMode === "login" ? "register" : "login");
	};

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

						<Button themeInverse onPress={onAuthenticate}>
							{authMode == "login" ? "Login" : "Register"}
						</Button>

						<XStack justifyContent="center">
							<Separator maxWidth="90%" />
						</XStack>

						<XStack justifyContent="center">
							<Text textDecorationLine="underline" fontWeight="bold">
								{authMode == "login"
									? "Register new account"
									: "Login to account"}
							</Text>
						</XStack>
					</YStack>
				</YStack>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

import { useAuth } from "@/context/auth-context";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function ProtectedLayout() {
	const { isLoggedIn } = useAuth();

	if (!isLoggedIn) {
		return <Redirect href="/(auth)/sign-in" />;
	}

	return <Stack screenOptions={{ headerShown: false }} />;
}

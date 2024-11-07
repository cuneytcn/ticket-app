import React, { createContext, PropsWithChildren } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { userService } from "@/services/user";
import { User } from "@/types/user";

interface AuthContextProps {
	isLoggedIn: boolean;
	isLoadingAuth: boolean;
	authenticate: (
		authMode: "login" | "register",
		email: string
	) => Promise<void>;
	logout: VoidFunction;
	user: User | null;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
	return React.useContext(AuthContext);
}

export function AuthenticationProvider({ children }: PropsWithChildren) {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	const [isLoadingAuth, setIsLoadingAuth] = React.useState(false);
	const [user, setUser] = React.useState<User | null>(null);

	React.useEffect(() => {
		async function checkIfLoggedIn() {
			const token = await AsyncStorage.getItem("token");
			const user = await AsyncStorage.getItem("user");

			if (!token && !user) {
				setIsLoggedIn(false);
			}

			if (token && user) {
				setIsLoggedIn(true);
				setUser(JSON.parse(user));
				router.replace("/(auth)/sign-in");
			}
		}

		checkIfLoggedIn();
	}, []);

	async function authenticate(
		authMode: "login" | "register",
		email: string,
		password: string
	) {
		try {
			setIsLoadingAuth(true);
			const response = await userService[authMode]({ email, password });

			if (response) {
				const { data } = response;
				const { user, token } = data;

				await AsyncStorage.setItem("token", token);
				await AsyncStorage.setItem("user", JSON.stringify(user));
				setUser(user);

				router.replace("/(auth)/sign-in");
			}
		} catch (error) {
			setIsLoggedIn(false);
		} finally {
			setIsLoadingAuth(false);
		}
	}

	async function logout() {
		setIsLoggedIn(false);
		await AsyncStorage.removeItem("token");
		await AsyncStorage.removeItem("user");
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{ isLoadingAuth, isLoggedIn, authenticate, user, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}

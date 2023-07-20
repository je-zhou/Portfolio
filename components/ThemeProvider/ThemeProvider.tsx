'use client';

import { createContext, useContext } from 'react';

const ThemeContext = createContext({});

export function useThemeContext() {
	return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: any) {
	const currentHour = new Date().getHours();

	return (
		<ThemeContext.Provider value={currentHour > 17 || currentHour < 9 ? "dark" : "light"}>
			{children}
		</ThemeContext.Provider>
	);
}
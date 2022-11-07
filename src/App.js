import 'highlight.js/styles/dark.css'; // the styles chosen is the theme
import 'highlightjs-badge/highlightjs-badge';
import { createContext, useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Docs from './Routes/Docs';
import Home from './Routes/Home';
import { initialLocalStorageState } from './utils/constants';
import { rgbAddA } from './utils/utils';
import rgbaToRgb from 'rgba-to-rgb';

export const GlobalContext = createContext();
const localStorageKey = 'actions-file-manager.dev';

function App() {
	const [localStorage, _setLocalStorage] = useState(() => {
		const data = window.localStorage.getItem(localStorageKey);
		if (data) return JSON.parse(data);
		else {
			window.localStorage.setItem(
				localStorageKey,
				JSON.stringify(initialLocalStorageState)
			);
			return initialLocalStorageState;
		}
	});
	const { themeSettings } = localStorage;
	const [theme, setTheme] = useState('light');
	const [prefersColorSchemeDark, setPrefersColorSchemeDark] = useState(
		window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
	);
	const appRef = useRef();

	useEffect(() => {
		const eventHandler = (e) => {
			setPrefersColorSchemeDark(e.matches);
		};
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', eventHandler);
		return () => {
			window
				.matchMedia('(prefers-color-scheme: dark)')
				.removeEventListener('change', eventHandler);
		};
	}, []);

	useEffect(() => {
		let theme;
		if (themeSettings !== 'systemDefault') {
			theme = themeSettings;
		} else {
			theme = prefersColorSchemeDark ? 'dark' : 'light';
		}
		setTheme(theme);
	}, [themeSettings, prefersColorSchemeDark]);

	const setLocalStorage = (data) => {
		_setLocalStorage(data);
		window.localStorage.setItem(localStorageKey, JSON.stringify(data));
	};

	const rgba2rgb = (rgba) => {
		return rgbaToRgb('rgb(255, 255, 255)', rgba);
	};

	// theme changes to custom-css
	useEffect(() => {
		const light = ['0', '0.1', '0.2', '0.3'];
		const dark = ['0.9', '0.8', '0.7', '0.6'];
		const app = appRef.current;
		const black = 'rgb(0,0,0)';
		if (theme === 'light') {
			light.forEach((alpha, i) => {
				app.style.setProperty(
					`--bg-shade-${i + 1}`,
					rgba2rgb(rgbAddA(black, alpha))
				);
			});
		} else {
			dark.forEach((alpha, i) => {
				app.style.setProperty(
					`--bg-shade-${i + 1}`,
					rgba2rgb(rgbAddA(black, alpha))
				);
			});
		}
	}, [theme]);

	useEffect(() => {
		console.log({ theme });
	}, [theme]);

	const value = {
		localStorage,
		setLocalStorage,
		theme,
	};

	return (
		<GlobalContext.Provider value={value}>
			<div
				ref={appRef}
				className="App container mx-auto px-4 bg-shade-4"
				style={{ color: theme === 'dark' ? 'white' : 'black' }}
			>
				<BrowserRouter>
					<NavigationBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/docs" element={<Docs />} />
					</Routes>
				</BrowserRouter>
			</div>
		</GlobalContext.Provider>
	);
}

export default App;

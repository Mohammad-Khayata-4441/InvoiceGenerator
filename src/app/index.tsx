import { BrowserRouter, useNavigate } from "react-router-dom";
import Router from "../router/Router";
import { ThemeProvider } from "@mui/material/styles";
import { useDarkMode } from 'usehooks-ts'
import { useEffect, useMemo } from 'react'
import { darkTheme } from "@/config/theme/dark.theme";
import { lightTheme } from "@/config/theme/light.theme";
import FeedBackProvider from "@/shared/components/FeedBackProvider";
import 'rsuite/dist/rsuite.min.css';
import { Provider } from 'react-redux'
import { store } from "@/store";
function App() {
  const { isDarkMode } = useDarkMode(false);

  const activeTheme = useMemo(() => isDarkMode ? darkTheme : lightTheme, [isDarkMode])
  // const { isExpired, logOut } = useAuth()

  useEffect(() => {
    // Set body dark class To turn on dark mode in tailwind css
    isDarkMode ? document.body.classList.add('dark') : document.body.classList.remove('dark')

  }, [isDarkMode])


  return (
    <>
      <div className="app">
        <Provider store={store}>


          <ThemeProvider theme={lightTheme}>
            <FeedBackProvider >
              <Router></Router>
            </FeedBackProvider>
          </ThemeProvider>
        </Provider>
      </div >
    </>
  );
}

export default App;

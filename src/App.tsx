import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/system';
import Home from './components/Home.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Stack from "./assets/Stack.tsx";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0, // Extra small devices (portrait phones)
            sm: 600, // Small devices (landscape phones)
            md: 960, // Medium devices (tablets)
            lg: 1280, // Large devices (desktops)
            xl: 1920, // Extra large devices (large desktops)
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Stack style={{ minHeight: '100vh' }}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            </Stack>
        </ThemeProvider>
    );
}

export default App;

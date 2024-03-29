import Stack from "../assets/Stack.tsx";
import {useState} from "react";
import MenuIcon from '../assets/menu.svg'
import Box from "../assets/Box.tsx";
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}
               sx={{
                   backgroundColor: '#672F2F',
                   color: 'white',
                   width: '100vw',
                   px: '2rem',
                   position: 'sticky',
                   top: 0
               }}>
            <p>[IMG] MARCA/LOGO</p>

            <Stack direction={'row'} sx={{
                gap: '20px',
                display: {xs: 'none', sm: 'inherit'},
                '& a': {color: 'white'},
                '& a:hover': {color: '#B2A59B'}
            }}>
                <Link smooth to={'/#nosotros'}>Nosotros</Link>
                <Link smooth to={'/#alimento'}>Alimento</Link>
                <Link smooth to={'/#resultados'}>Resultados</Link>
                <Link smooth to={'/#contacto'}>Contacto</Link>
            </Stack>

            <Box
                component='img'
                src={MenuIcon}
                alt={'menu'}
                onClick={toggleSidebar}
                sx={{width: '20px', display: {xs: 'inherit', sm: 'none'}}}
            />

            {sidebarOpen && (
                <Stack direction={'column'} sx={{
                    gap: '20px',
                    position: 'absolute',
                    top: '50px',
                    right: '0',
                    backgroundColor: 'white',
                    width: '150px',
                    display: {xs: 'inherit', sm: 'none'}
                }}>
                    <Link smooth to={'/#nosotros'}>Nosotros</Link>
                    <Link smooth to={'/#alimento'}>Alimento</Link>
                    <Link smooth to={'/#resultados'}>Resultados</Link>
                    <Link smooth to={'/#contacto'}>Contacto</Link>
                </Stack>
            )}
        </Stack>


    )
}

export default Navbar


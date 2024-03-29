import Stack from "../assets/Stack.tsx";
import AlimentoImage from "../assets/alimento.png";
import Box from "../assets/Box.tsx";
import FeathersImage from "../assets/feather.svg"
// import emailjs from 'emailjs-com'

const data = {
    benefits: [
        'PUBLICHERRY 1',
        'PUBLICHERRY 2',
        'PUBLICHERRY 3',
    ],
    icons: [
        FeathersImage,
        FeathersImage,
        FeathersImage,
    ]
}
const Home = () => {

    const sendEmail = () => {
        // e.preventDefault();
        //
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     })
    }

    return (
        <Stack sx={{backgroundColor: '#FAF5EF',}}>
            <Stack direction={{xs: 'column', sm: 'row'}} justifyContent={'center'}
                   alignItems={{xs: 'center', sm: 'flex-start'}} sx={{
                gap: '10px',
                padding: '20px',
                color: 'black'
            }}>
                <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
                    <p style={{fontSize: 'clamp(1.5rem, 3vw, 4rem)', fontWeight: 'bold', marginBottom: '20px'}}>Alimento
                        de Pollos y
                        Gallos</p>
                    <p style={{fontSize: 'clamp(1.2rem, 2vw, 4rem)', marginTop: '0'}}>¡La mejor nutrición para tus
                        aves!</p>
                    <button style={{width: '10rem', backgroundColor: '#672F2F'}}>
                        Contactanos
                    </button>
                </Stack>
                <Box component='img' src={AlimentoImage} alt={'alimento'} sx={{width: {xs: '60%', sm: '30%'}}}/>

            </Stack>

            <Stack direction={{xs: 'column', sm: 'row'}} justifyContent={'center'} sx={{
                backgroundColor: '#D7D1C9', padding: '20px', gap: {xs: '20px', sm: '40px'}
            }}>
                {data.benefits.map((benefit, index) => {
                    return (
                        <Stack key={index} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Box component='img' src={data.icons[index]} alt={'icon'}
                                 sx={{width: '50px', marginRight: '20px'}}/>
                            <Box>
                                <h3>{benefit}</h3>
                            </Box>
                        </Stack>
                    );
                })}
            </Stack>

            <Stack id="nosotros" sx={{color: 'black', padding: '0px 10rem',}}>
                <p style={{fontSize: 'clamp(1.8rem, 3vw, 4rem)', fontWeight: 'bold', marginBottom: '10px'}}>Nosotros</p>
                <p style={{fontSize: 'clamp(1.2rem, 1.5vw, 4rem)', }}>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                </p>
            </Stack>

            {/* ALIMENTO */}
            <Stack id="alimento" sx={{color: 'black', padding: '0px 10rem',}}>
                <p style={{fontSize: 'clamp(1.5rem, 3vw, 4rem)', fontWeight: 'bold', marginBottom: '20px'}}>Alimento
                </p>
                <p
                    style={{
                        fontSize: 'clamp(1.5rem, 2vw, 4rem)',
                        fontWeight: 'bold',
                        marginTop: '0px',
                        marginBottom: '0px'
                    }}>¿Por qué
                    elegir nuestro
                    alimento?</p>
                <p style={{fontSize: 'clamp(1.2rem, 1.5vw, 4rem)'}}>Nuestro alimento para pollos y gallos está formulado
                    con los mejores ingredientes para
                    garantizar el
                    crecimiento saludable, la resistencia a enfermedades y la producción de huevos de
                    calidad.</p>
                <Box>
                    <h2>Algunos de los beneficios de nuestro alimento son:</h2>
                    <ul style={{fontSize: 'clamp(1.2rem, 1.5vw, 1.5rem)'}}>
                        <li>Promueve un plumaje brillante</li>
                        <li>Aumenta la producción de huevos</li>
                        <li>Fortalece el sistema inmunológico</li>
                        <li>Proporciona energía sostenida</li>
                        <li>Libre de hormonas</li>
                        <li>Libre de conservadores</li>
                        <li>Libre de colorantes</li>
                    </ul>
                </Box>
            </Stack>

            <Stack id="resultados">
                {/* Resultados section */}
            </Stack>

            <Stack id={'contacto'} sx={{color: 'black', padding: '0px 10rem'}}>
                <p style={{fontSize: 'clamp(1.5rem, 3vw, 4rem)', fontWeight: 'bold',}}>Contactanos</p>
                <Stack
                    component="form"
                    className="contact-form"
                    onSubmit={sendEmail}
                    spacing={2}
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        margin: '0 auto',
                        padding: '20px',
                        backgroundColor: '#D7D1C9',
                        borderRadius: '8px',
                    }}
                >
                    <Stack sx={{width: '100%'}}>
                        <label style={{...titleStyle}}> Name </label>
                        <input type="text" name="user_name" style={{...inputStyle}}/>
                        <label style={{...titleStyle}}> Email </label>
                        <input type="email" name="user_email" style={{...inputStyle}}/>
                        <label style={{...titleStyle}}> Message </label>
                        <textarea name="message" style={{...inputStyle, height: '120px',}}/>
                        <input
                            type="submit"
                            value="Send"
                            style={{
                                ...inputStyle,
                                borderRadius: '4px',
                                border: 'none',
                                backgroundColor: '#672F2F',
                                color: '#fff',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>


        </Stack>
    );
}

const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
    display: 'block'
}

const inputStyle = {
    boxSizing: 'border-box' as const,
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginBottom: '16px',
    backgroundColor: 'white'
}
export default Home;

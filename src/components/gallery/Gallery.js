import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

export default function Gallery() {
    return (
        <Box sx={{ width: 1274 }}>
            <Masonry columns={3} spacing={3}>
                {itemData.map((item) => (
                    <div key={item.id}>
                        <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 5,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}

const itemData = [
    {
        id: 300,
        img: 'https://www.hotelstheone.com/Galeria/Recepcion.jpg',
        title: 'Reception',
    },
    {
        id: 301,
        img: 'https://www.hotelstheone.com/Galeria/Detalle-Cava.jpg',
        title: 'Cava in room',
    },
    {
        id: 302,
        img: 'https://www.hotelstheone.com/Galeria/2.%20Detalle-lobby-y-conserjeria-de-dia.jpg',
        title: 'Lobby',
    },
    {
        id: 303,
        img: 'https://www.hotelstheone.com/Galeria/22.%2029-9-19_Rincon-Terraza-Moods-nocturna.jpg',
        title: 'Terrace',
    },
    {
        id: 304,
        img: 'https://www.hotelstheone.com/Galeria/22.%20Terraza-Piscina-de-dia_0074.jpg',
        title: 'Terrace',
    },
    {
        id: 305,
        img: 'https://www.hotelstheone.com/Galeria/14.%20Fachada-hotel-al-anochecer_Retocada.jpg',
        title: 'Hotel',
    },
    {
        id: 306,
        img: 'https://www.hotelstheone.com/Galeria/32.%2029-9-19_Cocktail-Moodberry_0013.jpg',
        title: 'Сocktail',
    },
    {
        id: 307,
        img: 'https://www.hotelstheone.com/Galeria/11b.Editada_HTOMoodRooftopBar1.jpg',
        title: 'Bar',
    },
    {
        id: 308,
        img: 'https://www.hotelstheone.com/Galeria/Restaurante-Somni-3hto.jpg',
        title: 'Restaurant',
    },
    {
        id: 309,
        img: 'https://www.hotelstheone.com/Galeria/Video%20The%20One%20Barcelona.jpg',
        title: 'Hotel',
    },
    {
        id: 310,
        img: 'https://www.hotelstheone.com/Galeria/Cockteleria-Somni-6.jpg',
        title: 'Lobby',
    },
    {
        id: 311,
        img: 'https://www.hotelstheone.com/Galeria/15.%20Detalle-Mesa-Restaurante-Moods-1.jpg',
        title: 'Restaurant',
    },
    {
        id: 312,
        img: 'https://www.hotelstheone.com/Galeria/31.%2026-9-19_The-One-Barcelona-2019_Manzana-de-chocolate-con-helado-de-fruta-de-la-pasion.jpg',
        title: 'Restaurant',
    },
    {
        id: 313,
        img: 'https://www.hotelstheone.com/Galeria/Detalle-coffee-break.jpg',
        title: 'Hats',
    },
    {
        id: 314,
        img: 'https://www.hotelstheone.com/Galeria/11.%20Bodegon-Sala-Tratamientos-Despacio.jpg',
        title: 'Coffee',
    },
    {
        id: 315,
        img: 'https://www.hotelstheone.com/Galeria/16.HTOCoffeeBreak4.jpg',
        title: 'Lobby',
    },
    {
        id: 316,
        img: 'https://www.hotelstheone.com/Galeria/Penthouse%20Suite%20The%20One.jpg',
        title: 'Hotel',
    },
    {
        id: 317,
        img: 'https://www.hotelstheone.com/Galeria/Parrilada-de-verduras-ahumadas.jpg',
        title: 'Restaurant',
    },
    {
        id: 318,
        img: 'https://www.hotelstheone.com/Galeria/12-10-17_Servicio-Transfer-y-botones_0008.jpg',
        title: 'Transfer',
    },
];
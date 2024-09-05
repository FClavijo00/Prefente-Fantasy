export interface Noticia {
    id?: number;
    titulo: string;
    descripcion?: string;
    url: string;
    urlImagen: string;
    fechaPublicacion: Date;
    autor?: string;
}

const noticias: Noticia[] = [
    {
        titulo: 'Más movimientos en el CD Castellar Íbero',
        url: 'https://www.alberoymikasa.com/mas-movimientos-en-el-cd-castellar-ibero/',
        urlImagen: '/assets/noticias/nono-alvaro-movimientos.jpg',
        fechaPublicacion: new Date('2024-09-03'),
        autor: 'Pedro Expósito'
    },
    {
        titulo: 'Juan Diéguez, nuevo entrenador para el CD Úbeda Rapids',
        url: 'https://www.alberoymikasa.com/juan-dieguez-nuevo-entrenador-para-el-cd-ubeda-rapids/',
        urlImagen: '/assets/noticias/dieguez-rapids.jpg',
        fechaPublicacion: new Date('2024-09-02'),
        autor: 'Pedro Expósito'
    },
    {
        titulo: 'El CD Castellar Íbero asegura gol con la llegada de Javi Lalo',
        url: 'https://www.alberoymikasa.com/el-cd-castellar-ibero-asegura-gol-con-la-llegada-de-javi-lalo/',
        urlImagen: '/assets/noticias/lalo-fichaje.jpeg',
        fechaPublicacion: new Date('2024-08-27'),
        autor: 'Pedro Expósito'
    },
    {
        titulo: 'Nick Greatex, nuevo presidente del CD Úbeda Rapids',
        url: 'https://www.alberoymikasa.com/nick-greatex-nuevoPresidente-del-cd-ubeda-rapids/',
        urlImagen: '/assets/noticias/nick-greatex.jpg',
        fechaPublicacion: new Date('2024-08-27'),
        autor: 'Pedro Expósito'
    },
    {
        titulo: 'Comunicado oficial sobre el cambio de propiedad del CD Úbeda Rapids',
        url: 'https://www.alberoymikasa.com/comunicado-oficial-sobre-el-cambio-de-propiedad-del-cd-ubeda-rapids/',
        urlImagen: '/assets/noticias/comunicado-rapids.jpg',
        fechaPublicacion: new Date('2024-08-26'),
        autor: 'Pedro Expósito'
    }
]

export { noticias };




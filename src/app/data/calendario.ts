export interface Jornada {
    id?: number;
    numero: number;
    partidos: Partido[];
}

export interface Partido {
    id?: number;
    descansa?: boolean;
    fecha?: string;
    hora?: string;
    equipoLocal?: string;
    equipoVisitante?: string;
    golesLocal?: number;
    golesVisitante?: number;
    escudoLocal?: string;
    escudoVisitante?: string;
}

const jornadas: Jornada[] = [
    {
        numero: 1,
        partidos : [
            {
                fecha: 'Domingo 15 Sept.',
                hora: '-:-',
                equipoLocal: 'Atlético Sabiote',
                equipoVisitante: 'CD Castellar Íbero',
                escudoLocal: '/assets/escudos/atco-sabiote.png',
                escudoVisitante: '/assets/escudos/cd-castellar-ibero.png'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '-:-',
                equipoLocal: 'Arquillos CF',
                equipoVisitante: 'CF Arroyo del Ojanco',
                escudoLocal: '/assets/escudos/arquillos-cf.png',
                escudoVisitante: '/assets/escudos/cf-arroyo.png'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Úbeda Rapids',
                equipoVisitante: 'CD Canena Atlético',
                escudoLocal: '/assets/escudos/cd-ubeda-rapids.png',
                escudoVisitante: '/assets/escudos/canena-atco.png'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Torreperogil B',
                equipoVisitante: 'Huesa UD',
                escudoLocal: '/assets/escudos/cd-torreperogil.png',
                escudoVisitante: '/assets/escudos/huesa-ud.png'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Tugia Juego Limpio',
                equipoVisitante: 'Mogón CF',
                escudoLocal: '/assets/escudos/cd-tugia.png',
                escudoVisitante: '/assets/escudos/mogon-cf.png'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Sorihuela',
                escudoLocal: '/assets/escudos/cd-sorihuela.png',
                equipoVisitante: 'Jódar CF',
                escudoVisitante: '/assets/escudos/jodar-cf.png'
            }
        ]
    },
    {
        numero: 2,
        partidos : [
            {
                fecha: 'Domingo 22 Sept.',
                hora: '-:-',
                equipoLocal: 'CF Arroyo del Ojanco',
                escudoLocal: '/assets/escudos/cf-arroyo.png',
                equipoVisitante: 'CD Sorihuela',
                escudoVisitante: '/assets/escudos/cd-sorihuela.png'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '-:-',
                equipoLocal: 'Huesa UD',
                equipoVisitante: 'CD Tugia Juego Limpio',
                escudoLocal: '/assets/escudos/huesa-ud.png',
                escudoVisitante: '/assets/escudos/cd-tugia.png'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '-:-',
                equipoLocal: 'Mogón CF',
                equipoVisitante: 'Atlético Sabiote',
                escudoLocal: '/assets/escudos/mogon-cf.png',
                escudoVisitante: '/assets/escudos/atco-sabiote.png'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Canena Atlético',
                equipoVisitante: 'CD Torreperogil B',
                escudoLocal: '/assets/escudos/canena-atco.png',
                escudoVisitante: '/assets/escudos/cd-torreperogil.png'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Castellar Íbero',
                equipoVisitante: 'Arquillos CF',
                escudoLocal: '/assets/escudos/cd-castellar-ibero.png',
                escudoVisitante: '/assets/escudos/arquillos-cf.png'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '-:-',
                equipoLocal: 'Jódar CF',
                equipoVisitante: 'CD Úbeda Rapids',
                escudoLocal: '/assets/escudos/jodar-cf.png',
                escudoVisitante: '/assets/escudos/cd-ubeda-rapids.png'
            }
        ]
    },
    {
        numero: 3,
        partidos : [
            {
                fecha: 'Domingo 29 Sept.',
                hora: '-:-',
                equipoLocal: 'Arquillos CF',
                equipoVisitante: 'Mogón CF',
                escudoLocal: '/assets/escudos/arquillos-cf.png',
                escudoVisitante: '/assets/escudos/mogon-cf.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '-:-',
                equipoLocal: 'CF Arroyo del Ojanco',
                equipoVisitante: 'CD Castellar Íbero',
                escudoLocal: '/assets/escudos/cf-arroyo.png',
                escudoVisitante: '/assets/escudos/cd-castellar-ibero.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Torreperogil B',
                equipoVisitante: 'Jódar CF',
                escudoLocal: '/assets/escudos/cd-torreperogil.png',
                escudoVisitante: '/assets/escudos/jodar-cf.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Tugia Juego Limpio',
                equipoVisitante: 'CD Canena Atlético',
                escudoLocal: '/assets/escudos/cd-tugia.png',
                escudoVisitante: '/assets/escudos/canena-atco.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '-:-',
                equipoLocal: 'Atlético Sabiote',
                equipoVisitante: 'Huesa UD',
                escudoLocal: '/assets/escudos/atco-sabiote.png',
                escudoVisitante: '/assets/escudos/huesa-ud.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '-:-',
                equipoLocal: 'CD Sorihuela',
                escudoLocal: '/assets/escudos/cd-sorihuela.png',
                equipoVisitante: 'CD Úbeda Rapids',
                escudoVisitante: '/assets/escudos/cd-ubeda-rapids.png'
            }
        ]
    },
    {
        numero: 4,
        partidos : [
            {
                fecha: 'Domingo 6 Oct.',
                hora: '-:-',
                equipoLocal: 'Jódar CF',
                equipoVisitante: 'CD Tugia Juego Limpio',
                escudoLocal: '/assets/escudos/jodar-cf.png',
                escudoVisitante: '/assets/escudos/cd-tugia.png'
            },
            {
                fecha: 'Domingo 6 Oct.',
                hora: '-:-',
                equipoLocal: 'CD Castellar Íbero',
                escudoLocal: '/assets/escudos/cd-castellar-ibero.png',
                equipoVisitante: 'CD Sorihuela',
                escudoVisitante: '/assets/escudos/cd-sorihuela.png'
            },
            {
                fecha: 'Domingo 6 Oct.',
                hora: '-:-',
                equipoLocal: 'CD Canena Atlético',
                equipoVisitante: 'Atlético Sabiote',
                escudoLocal: '/assets/escudos/canena-atco.png',
                escudoVisitante: '/assets/escudos/atco-sabiote.png'
            },
            {
                fecha: 'Domingo 6 Oct.',
                hora: '-:-',
                equipoLocal: 'Huesa UD',
                equipoVisitante: 'Arquillos CF',
                escudoLocal: '/assets/escudos/huesa-ud.png',
                escudoVisitante: '/assets/escudos/arquillos-cf.png'
            },
            {
                fecha: 'Domingo 6 Oct.',
                hora: '-:-',
                equipoLocal: 'Mogón CF',
                equipoVisitante: 'CF Arroyo del Ojanco',
                escudoLocal: '/assets/escudos/mogon-cf.png',
                escudoVisitante: '/assets/escudos/cf-arroyo.png'
            },
            {
                fecha: 'Domingo 6 Oct.',
                hora: '-:-',
                equipoLocal: 'CD Úbeda Rapids',
                equipoVisitante: 'CD Torreperogil B',
                escudoLocal: '/assets/escudos/cd-ubeda-rapids.png',
                escudoVisitante: '/assets/escudos/cd-torreperogil.png'
            },
           
        ]
    },
    {
        numero: 5,
        partidos : [
            {
                fecha: 'Domingo 13 Oct.',
                hora: '-:-',
                equipoLocal: 'CF Arroyo del Ojanco',
                equipoVisitante: 'Huesa UD',
                escudoLocal: '/assets/escudos/cf-arroyo.png',
                escudoVisitante: '/assets/escudos/huesa-ud.png'
            },
            {
                fecha: 'Domingo 13 Oct.',
                hora: '-:-',
                equipoLocal: 'CD Castellar Íbero',
                equipoVisitante: 'Mogón CF',
                escudoLocal: '/assets/escudos/cd-castellar-ibero.png',
                escudoVisitante: '/assets/escudos/mogon-cf.png'
            },
            {
                fecha: 'Domingo 13 Oct.',
                hora: '-:-',
                equipoLocal: 'CD Tugia Juego Limpio',
                equipoVisitante: 'CD Úbeda Rapids',
                escudoLocal: '/assets/escudos/cd-tugia.png',
                escudoVisitante: '/assets/escudos/cd-ubeda-rapids.png'
            },
            {
                fecha: 'Domingo 13 Oct.',
                hora: '-:-',
                equipoLocal: 'Atlético Sabiote',
                equipoVisitante: 'Jódar CF',
                escudoLocal: '/assets/escudos/atco-sabiote.png',
                escudoVisitante: '/assets/escudos/jodar-cf.png'
            },
            {
                fecha: 'Domingo 13 Oct.',
                hora: '-:-',
                equipoLocal: 'CD Sorihuela',
                escudoLocal: '/assets/escudos/cd-sorihuela.png',
                equipoVisitante: 'CD Torreperogil B',
                escudoVisitante: '/assets/escudos/cd-torreperogil.png'
            },
            {
                fecha: 'Domingo 13 Oct.',
                hora: '-:-',
                equipoLocal: 'Arquillos CF',
                equipoVisitante: 'CD Canena Atlético',
                escudoLocal: '/assets/escudos/arquillos-cf.png',
                escudoVisitante: '/assets/escudos/canena-atco.png'
            }
        ]
    }
]

export { jornadas };
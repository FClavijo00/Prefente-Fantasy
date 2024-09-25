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
    tieneResultado?: boolean;
    resultado?: string;
}

const jornadas: Jornada[] = [
    {
        numero: 1,
        partidos : [
            {
                fecha: 'Domingo 15 Sept.',
                hora: '11:45',
                equipoLocal: 'Arquillos CF',
                equipoVisitante: 'CF Arroyo del Ojanco',
                escudoLocal: '/assets/escudos/arquillos-cf.png',
                escudoVisitante: '/assets/escudos/cf-arroyo.png',
                tieneResultado: true,
                resultado: '3 - 2'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '12:00',
                equipoLocal: 'CD Torreperogil B',
                equipoVisitante: 'Huesa UD',
                escudoLocal: '/assets/escudos/cd-torreperogil.png',
                escudoVisitante: '/assets/escudos/huesa-ud.png',
                tieneResultado: true,
                resultado: '4 - 2'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '18:30',
                equipoLocal: 'Atlético Sabiote',
                equipoVisitante: 'CD Castellar Íbero',
                escudoLocal: '/assets/escudos/atco-sabiote.png',
                escudoVisitante: '/assets/escudos/cd-castellar-ibero.png',
                tieneResultado: true,
                resultado: '5 - 1'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '19:00',
                equipoLocal: 'CD Tugia Juego Limpio',
                equipoVisitante: 'Mogón CF',
                escudoLocal: '/assets/escudos/cd-tugia.png',
                escudoVisitante: '/assets/escudos/mogon-cf.png',
                tieneResultado: true,
                resultado: '1 - 0'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '19:30',
                equipoLocal: 'Jódar CF',
                escudoLocal: '/assets/escudos/jodar-cf.png',
                equipoVisitante: 'CD Sorihuela',
                escudoVisitante: '/assets/escudos/cd-sorihuela.png',
                tieneResultado: true,
                resultado: '3 - 0'
            },
            {
                fecha: 'Domingo 15 Sept.',
                hora: '20:00',
                equipoLocal: 'CD Úbeda Rapids',
                equipoVisitante: 'CD Canena Atlético',
                escudoLocal: '/assets/escudos/cd-ubeda-rapids.png',
                escudoVisitante: '/assets/escudos/canena-atco.png',
                tieneResultado: true,
                resultado: 'SUSP'
            }
        ]
    },
    {
        numero: 2,
        partidos : [
            {
                fecha: 'Domingo 22 Sept.',
                hora: '18:30',
                equipoLocal: 'CD Canena Atlético',
                equipoVisitante: 'CD Torreperogil B',
                escudoLocal: '/assets/escudos/canena-atco.png',
                escudoVisitante: '/assets/escudos/cd-torreperogil.png',
                tieneResultado: true,
                resultado: '1 - 2'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '19:00',
                equipoLocal: 'CF Arroyo del Ojanco',
                escudoLocal: '/assets/escudos/cf-arroyo.png',
                equipoVisitante: 'CD Sorihuela',
                escudoVisitante: '/assets/escudos/cd-sorihuela.png',
                tieneResultado: true,
                resultado: '5 - 0'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '19:00',
                equipoLocal: 'Huesa UD',
                equipoVisitante: 'CD Tugia Juego Limpio',
                escudoLocal: '/assets/escudos/huesa-ud.png',
                escudoVisitante: '/assets/escudos/cd-tugia.png',
                tieneResultado: true,
                resultado: '1 - 2'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '19:00',
                equipoLocal: 'Mogón CF',
                equipoVisitante: 'Atlético Sabiote',
                escudoLocal: '/assets/escudos/mogon-cf.png',
                escudoVisitante: '/assets/escudos/atco-sabiote.png',
                tieneResultado: true,
                resultado: '3 - 3'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '19:00',
                equipoLocal: 'Jódar CF',
                equipoVisitante: 'CD Úbeda Rapids',
                escudoLocal: '/assets/escudos/jodar-cf.png',
                escudoVisitante: '/assets/escudos/cd-ubeda-rapids.png',
                tieneResultado: true,
                resultado: '4 - 1'
            },
            {
                fecha: 'Domingo 22 Sept.',
                hora: '20:00',
                equipoLocal: 'CD Castellar Íbero',
                equipoVisitante: 'Arquillos CF',
                escudoLocal: '/assets/escudos/cd-castellar-ibero.png',
                escudoVisitante: '/assets/escudos/arquillos-cf.png',
                tieneResultado: true,
                resultado: '4 - 0'
            },
        ]
    },
    {
        numero: 3,
        partidos : [
            {
                fecha: 'Domingo 29 Sept.',
                hora: '11:45',
                equipoLocal: 'Arquillos CF',
                equipoVisitante: 'Mogón CF',
                escudoLocal: '/assets/escudos/arquillos-cf.png',
                escudoVisitante: '/assets/escudos/mogon-cf.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '12:15',
                equipoLocal: 'CD Torreperogil B',
                equipoVisitante: 'Jódar CF',
                escudoLocal: '/assets/escudos/cd-torreperogil.png',
                escudoVisitante: '/assets/escudos/jodar-cf.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '18:00',
                equipoLocal: 'Atlético Sabiote',
                equipoVisitante: 'Huesa UD',
                escudoLocal: '/assets/escudos/atco-sabiote.png',
                escudoVisitante: '/assets/escudos/huesa-ud.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '18:30',
                equipoLocal: 'CF Arroyo del Ojanco',
                equipoVisitante: 'CD Castellar Íbero',
                escudoLocal: '/assets/escudos/cf-arroyo.png',
                escudoVisitante: '/assets/escudos/cd-castellar-ibero.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '19:00',
                equipoLocal: 'CD Tugia Juego Limpio',
                equipoVisitante: 'CD Canena Atlético',
                escudoLocal: '/assets/escudos/cd-tugia.png',
                escudoVisitante: '/assets/escudos/canena-atco.png'
            },
            {
                fecha: 'Domingo 29 Sept.',
                hora: '19:00',
                equipoLocal: 'CD Úbeda Rapids',
                escudoLocal: '/assets/escudos/cd-ubeda-rapids.png',
                equipoVisitante: 'CD Sorihuela',
                escudoVisitante: '/assets/escudos/cd-sorihuela.png'
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
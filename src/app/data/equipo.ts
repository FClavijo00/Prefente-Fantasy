export interface Equipo {
    id?: number;
    jugadores: Jugadores[];
}

export interface Jugadores {
    id?: number;
    orden: number;
    nombre: string;
    sobrenombre?: string;
    urlImagen: string;
    urlEscudo: string;
    posicion: string;
    posicionInicial?: string;
    precio: string;
    subiendo?: boolean;
    bajando?: boolean;
    valorSubidaBajada?: string;
    titular?: boolean;
    suplente?: boolean;
    puntuacionJornadas?: {};
}

const jugadores: Jugadores[] = [
    {
        orden: 0,
        nombre: 'Fran Aguilar',
        urlImagen: 'assets/caras-futbolistas/Huesa/300x300-fran-aguilar.png',
        urlEscudo: '/assets/escudos/huesa-ud.png',
        posicion: 'POR',
        posicionInicial: 'POR',
        precio: '7.000.000',
        bajando: true,
        valorSubidaBajada: '50.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 3
            },
            2: {
                puntos: 6
            }
        }
    },
    {
        orden: 1,
        nombre: 'Francisco Javier Torres',
        sobrenombre: 'Espi',
        urlImagen: 'assets/caras-futbolistas/Arroyo/300x300-espi.png',
        urlEscudo: '/assets/escudos/cf-arroyo.png',
        posicion: 'DEF',
        posicionInicial: 'LD',
        precio: '8.000.000',
        bajando: true,
        valorSubidaBajada: '150.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 1
            },
            2: {
                puntos: 8
            }
        }
    },
    {
        orden: 1,
        nombre: 'Jesús Alcázar',
        sobrenombre: 'Alcázar',
        urlImagen: 'assets/caras-futbolistas/Castellar-Ibero/300x300-jesus-alcazar.png',
        urlEscudo: '/assets/escudos/cd-castellar-ibero.png',
        posicion: 'DEF',
        posicionInicial: 'CEND',
        precio: '6.000.000',
        bajando: true,
        valorSubidaBajada: '250.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: -2
            },
            2: {
                puntos: 8
            }
        }
    },
    {
        orden: 3,
        nombre: 'Miguel Ángel Alcázar',
        sobrenombre: 'Miguel Ángel',
        urlImagen: 'assets/caras-futbolistas/Tugia/300x300-miguel-alcazar.png',
        urlEscudo: '/assets/escudos/cd-tugia.png',
        posicion: 'DEL',
        posicionInicial: 'CENI',
        precio: '4.500.000',
        subiendo: true,
        valorSubidaBajada: '500.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 5
            },
            2: {
                puntos: 5
            }
        }
    },
    {
        orden: 1,
        nombre: 'Frank Villar',
        urlImagen: 'assets/caras-futbolistas/Castellar-Ibero/300x300-frank-villar.png',
        urlEscudo: '/assets/escudos/cd-castellar-ibero.png',
        posicion: 'DEF',
        posicionInicial: 'LI',
        precio: '8.000.000',
        bajando: true,
        valorSubidaBajada: '50.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: -2
            },
            2: {
                puntos: 2
            }
        }
    },
    {
        orden: 2,
        nombre: 'Hugo Cortés',
        urlImagen: 'assets/caras-futbolistas/Atco-Sabiote/300x300-hugo-cortes.png',
        urlEscudo: '/assets/escudos/atco-sabiote.png',
        posicion: 'MED',
        posicionInicial: 'MEDI',
        precio: '2.550.000',
        subiendo: true,
        valorSubidaBajada: '550.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 7
            },
            2: {
                puntos: 5
            }
        }
    },
    {
        orden: 2,
        nombre: 'Enrique Sánchez',
        urlImagen: 'assets/caras-futbolistas/Castellar-Ibero/300x300-enrique-sanchez.png',
        urlEscudo: '/assets/escudos/cd-castellar-ibero.png',
        posicion: 'MED',
        posicionInicial: 'MEDD',
        precio: '6.000.000',
        bajando: true,
        valorSubidaBajada: '50.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 3
            },
            2: {
                puntos: 8
            }
        }
    },
    {
        orden: 2,
        nombre: 'Raúl Olid',
        sobrenombre: 'Pichi',
        urlImagen: 'assets/caras-futbolistas/Castellar-Ibero/300x300-pichi.png',
        urlEscudo: '/assets/escudos/cd-castellar-ibero.png',
        posicion: 'MED',
        posicionInicial: 'MCO',
        precio: '15.020.000',
        subiendo: true,
        valorSubidaBajada: '20.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 9
            },
            2: {
                puntos: 9
            }
        }
    },
    {
        orden: 3,
        nombre: 'Andrés Ballesteros',
        urlImagen: 'assets/caras-futbolistas/Castellar-Ibero/300x300-andres-ballesteros.png',
        urlEscudo: '/assets/escudos/cd-castellar-ibero.png',
        posicion: 'DEL',
        posicionInicial: 'EXTD',
        precio: '10.000.000',
        subiendo: true,
        valorSubidaBajada: '500.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 1
            },
            2: {
                puntos: 5
            }
        }
    },
    {
        orden: 3,
        nombre: 'Javier Calderón',
        sobrenombre: 'Javi Calderón',
        urlImagen: 'assets/caras-futbolistas/Arroyo/300x300-javi-calderon.png',
        urlEscudo: '/assets/escudos/cf-arroyo.png',
        posicion: 'DEL',
        posicionInicial: 'EXTI',
        precio: '6.200.000',
        subiendo: true,
        valorSubidaBajada: '200.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 5
            },
            2: {
                puntos: 19
            }
        }
    },
    {
        orden: 3,
        nombre: 'Francisco José Clavijo',
        sobrenombre: 'Traga',
        urlImagen: 'assets/caras-futbolistas/Castellar-Ibero/300x300-traga.png',
        urlEscudo: '/assets/escudos/cd-castellar-ibero.png',
        posicion: 'DEL',
        posicionInicial: 'DC',
        precio: '5.930.000',
        bajando: true,
        valorSubidaBajada: '70.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 1
            },
            2: {
                puntos: 12
            }
        }
    }
]

const equipo: Equipo = {
    jugadores: jugadores
}

export { equipo };
export { jugadores };
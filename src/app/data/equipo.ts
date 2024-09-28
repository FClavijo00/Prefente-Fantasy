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
                puntos: 3,
                puntosXCronico: 2,
                puntosXMinJugados: 1,
                puntosXGoles: 0,
                puntosXAsistencias: 0
            },
            2: {
                puntos: 6,
                puntosXCronico: 5,
                puntosXMinJugados: 1,
                puntosXGoles: 0,
                puntosXAsistencias: 0
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
        posicionInicial: 'DC',
        precio: '4.500.000',
        subiendo: true,
        valorSubidaBajada: '500.000',
        suplente: true,
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
                puntos: 1,
                puntosXCronico: 0,
                puntosXMinJugados: 1,
                puntosXGoles: 0,
                puntosXAsistencias: 0
            },
            2: {
                puntos: 12,
                puntosXCronico: 8,
                puntosXMinJugados: 1,
                puntosXGoles: 3,
                puntosXAsistencias: 0
            }
        }
    },
    {
        orden: 0,
        nombre: 'Pedro Jesús García Casado',
        sobrenombre: 'Cubi',
        urlImagen: 'assets/caras-futbolistas/Canena/300x300-cubi.png',
        urlEscudo: '/assets/escudos/canena-atco.png',
        posicion: 'POR',
        posicionInicial: 'POR',
        precio: '9.000.000',
        bajando: true,
        valorSubidaBajada: '100.000',
        titular: false,
        suplente: true,
        puntuacionJornadas: {
            1: {
                puntos: null
            },
            2: {
                puntos: 1
            }
        }
    },
    {
        orden: 1,
        nombre: 'Ángel Berbel Moreno',
        sobrenombre: 'Ángel Berbel',
        urlImagen: 'assets/caras-futbolistas/Huesa/300x300-berbel.png',
        urlEscudo: '/assets/escudos/huesa-ud.png',
        posicion: 'DEF',
        posicionInicial: 'CENI',
        precio: '2.000.000',
        bajando: true,
        valorSubidaBajada: '20.000',
        titular: true,
        puntuacionJornadas: {
            1: {
                puntos: 3
            },
            2: {
                puntos: 3
            }
        }
    },
    {
        orden: 2,
        nombre: 'Mateo Ezequiel Flores Pizichini',
        sobrenombre: 'Mateo Flores',
        urlImagen: 'assets/caras-futbolistas/Rapids/300x300-mateo-flores.png',
        urlEscudo: '/assets/escudos/cd-ubeda-rapids.png',
        posicion: 'MED',
        posicionInicial: 'MEDI',
        precio: '3.000.000',
        bajando: true,
        valorSubidaBajada: '250.000',
        suplente: true,
        puntuacionJornadas: {
            1: {
                puntos: null
            },
            2: {
                puntos: 5
            }
        }
    },
    {
        orden: 3,
        nombre: 'Antonio José Cano Montávez',
        sobrenombre: 'Deko',
        urlImagen: 'assets/caras-futbolistas/Jodar/300x300-deko.png',
        urlEscudo: '/assets/escudos/jodar-cf.png',
        posicion: 'DEL',
        posicionInicial: 'EXTI',
        precio: '5.000.000',
        subiendo: true,
        valorSubidaBajada: '500.000',
        suplente: true,
        puntuacionJornadas: {
            1: {
                puntos: 17
            },
            2: {
                puntos: 20
            }
        }
    },
]

const equipo: Equipo = {
    jugadores: jugadores
}

export { equipo };
export { jugadores };
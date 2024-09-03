export interface Usuario {
    id?: number;
    nombre: string;
    dinero: string;
    urlImagen: string;
    puntos?: number;
    posicion?: string;
}

const clasificacionUsuarios: Usuario[] = [
    {
        nombre: 'El Tiburón Traga',
        dinero: '177.912.263€',
        urlImagen: '/assets/usuarios/ferran.jpg',
        puntos: 96,
        posicion: 'up'
    },
    {
        nombre: 'El Atérmico Kike',
        dinero: '176.449.089€',
        urlImagen: '/assets/usuarios/kroos.jpg',
        puntos: 80,
        posicion: 'down'
    },
    {
        nombre: 'Titi Pichi',
        dinero: '114.637.970€',
        urlImagen: '/assets/usuarios/pichi.jpg',
        puntos: 76,
        posicion: 'down'
    },
    {
        nombre: 'Ponte Canilleras LCTH',
        dinero: '189.850.809€',
        urlImagen: '/assets/usuarios/uruguayo.jfif',
        puntos: 69,
        posicion: 'equal'
    },
    {
        nombre: 'KunFariña',
        dinero: '117.351.109€',
        urlImagen: '/assets/usuarios/mbappe.jpeg',
        puntos: 55,
        posicion: 'equal'
    },
]

export { clasificacionUsuarios };



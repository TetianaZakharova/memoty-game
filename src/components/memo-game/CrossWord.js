import React from 'react'
import Crossword, { ThemeProvider, reset } from '@jaredreisinger/react-crossword';

import './crossWord.css';

const clue = '';

const data = {
  across: {
    12: { clue: '¿Quién es muy divertido?', answer: 'PERRO', row: 1, col: 9 },
    15: { clue: '¿Cómo se llama el deportista?', answer: 'RAMON', row: 1, col: 9 },  
    18: { clue: '¿Cómo es la tortuga?', answer: 'TRANQUILA', row: 1, col: 9 },
    19: { clue: 'Es listo y travieso. ¿Quién es?', answer: 'GATO', row: 2, col: 5 },
    20: { clue: 'La chinchilla: “Me gusta comer …”', answer: 'COL', row: 3, col: 13 },
    21: { clue: 'Pirata: “Me gusta …”', answer: 'PESCA', row: 5, col: 3 },
    22: { clue: '¿Quién es de color gris?', answer: 'RATA', row: 5, col: 15 },
    23: { clue: '¿Cómo es el hámster?,', answer: 'AMISTROSO', row: 6, col: 8 },
    24: { clue: '¿Quién es Andrés?', answer: 'PEZ', row: 8, col: 12 },
    25: { clue: 'Pirata es … ', answer: 'LISTRO', row: 8, col: 16 },
    26: { clue: 'Álvaro: “Me gusta …”', answer: 'CANTAR', row: 9, col: 6 },
    27: { clue: '¿Quién es pensativo?', answer: 'LAGARTO', row: 12, col: 5 },
    28: { clue: 'El lagarto: “Me gusta jugar al …”', answer: 'AJEDREZ', row: 14, col: 5 },
    29: { clue: '¿Cómo es la rata?', answer: 'GRIS', row: 14, col: 13 },
    30: { clue: 'El color de la tortuga', answer: 'AZUL', row: 15, col: 17 },
    31: { clue: 'El lagarto es de color … ', answer: 'VERDE', row: 16, col: 0 },
    32: { clue: '¿Cómo se llama la cobaya?', answer: 'ANAIA', row: 18, col: 1 },
    33: { clue: 'El caracol: “Me gusta jugar al …”.', answer: 'FUTBOL', row: 18, col: 14 },
  },
    down: {
        1: { clue: 'El color del conejo', answer: 'CAFE', row: 0, col: 17 },
        2: { clue: '¿Quién es Ramón?', answer: 'CARACOL', row: 1, col: 6 },
        3: { clue: '¿Cómo se llama el pez?', answer: 'ANDRES', row: 1, col: 11 },
        4: { clue: '¿Cómo es el gato?', answer: 'TRAVIESO', row: 1, col: 20 },
        5: { clue: '¿Quién es Manolo?', answer: 'LORO', row: 3, col: 15 },
        6: { clue: '¿Cómo es la chinchilla?', answer: 'NERVIOSA', row: 4, col: 4 },
        7: { clue: '¿Quién es de color morado?', answer: 'RATON', row: 5, col: 8 },
        8: { clue: '¿Quién es Alejo?', answer: 'CONEJO', row: 5, col: 13 },
        9: { clue: '¿Cómo es el canario?', answer: 'TIMIDO', row: 5, col: 17 },
        10: { clue: 'La tortuga: “Me gusta nadar en el…”.', answer: 'MAR', row: 7, col: 2 },
        11: { clue: '¿Cómo es Salomón?' , answer: 'TRAGON', row: 8, col: 19 },
        12: { clue: '¿Cómo es el lagarto?', answer: 'PENSATIVO', row: 9, col: 0 },
        13: { clue: '¿Cómo es Manolo?' , answer: 'ALEGRE', row: 9, col: 7 },
        14: { clue: 'El caracol es de color … ', answer: 'ROJO', row: 9, col: 11 },
        15: { clue: '¿Cómo es la chinchilla?' , answer: 'ROSA', row: 12, col: 16 },
        16: { clue: 'El hámster y el perro son de color … ', answer: 'MARRON', row: 13, col: 2 },
        17: { clue: 'Soy Salomón. Me gusta comer … ', answer: 'QUESO', row: 14, col: 18 },
      },


};

export const CrossWord = () => {

    return (
        <div style={{ width: '75%', margin: "0 auto" }}>
        <ThemeProvider
        theme={{
          columnBreakpoint: '9999px',
          gridBackground: 'transparent',
          cellBackground: '#a9e5c5',
          cellBorder: '#ffe',
          textColor: '#d617f2',
          numberColor: '#30161f',
          focusBackground: '#eea9c0',
          highlightBackground: '#f99',   
          }}
        >

          <Crossword 
            data={data}
            useStorage={false}
            // onCorrect={onCorrect}
            // closestdiv={closestdiv}            
            reset={reset}
          /> 

        </ThemeProvider>

        </div>
    )
}


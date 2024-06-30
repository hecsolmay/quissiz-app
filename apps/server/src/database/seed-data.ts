import { type Test as TestType } from '../types/tests'

const now = Date.now()
const oneDayInMilliseconds = 24 * 60 * 60 * 1000
const yesterdayTimestamp = now - oneDayInMilliseconds
const yesterday = new Date(yesterdayTimestamp)

export const seedTests: TestType[] = [
  // CAPITALES DEL MUNDO
  {
    name: 'Examen de Capitales del Mundo',
    imageUrl: 'https://m.media-amazon.com/images/I/712xbU6mWWL.jpg',
    createdAt: yesterday,
    questions: [
      {
        question: '¿Cuál es la capital de Francia?',
        options: ['París', 'Madrid', 'Roma'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Japón?',
        options: ['Tokio', 'Beijing', 'Seúl'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Brasil?',
        options: ['Brasilia', 'Buenos Aires', 'Lima'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Canadá?',
        options: ['Ottawa', 'Toronto', 'Vancouver'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Australia?',
        options: ['Canberra', 'Sídney', 'Melbourne'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Rusia?',
        options: ['Moscú', 'San Petersburgo', 'Kiev'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Italia?',
        options: ['Roma', 'Milán', 'Venecia'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de México?',
        options: ['Ciudad de México', 'Guadalajara', 'Monterrey'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Egipto?',
        options: ['El Cairo', 'Alejandría', 'Giza'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de India?',
        options: ['Nueva Delhi', 'Mumbai', 'Kolkata'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de China?',
        options: ['Beijing', 'Shanghái', 'Hong Kong'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Sudáfrica?',
        options: ['Pretoria', 'Ciudad del Cabo', 'Johannesburgo'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Argentina?',
        options: ['Buenos Aires', 'Córdoba', 'Rosario'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de España?',
        options: ['Madrid', 'Barcelona', 'Valencia'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Reino Unido?',
        options: ['Londres', 'Edimburgo', 'Manchester'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Alemania?',
        options: ['Berlín', 'Múnich', 'Hamburgo'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Colombia?',
        options: ['Bogotá', 'Medellín', 'Cali'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Turquía?',
        options: ['Ankara', 'Estambul', 'Izmir'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Suecia?',
        options: ['Estocolmo', 'Gotemburgo', 'Malmö'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Noruega?',
        options: ['Oslo', 'Bergen', 'Trondheim'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Finlandia?',
        options: ['Helsinki', 'Tampere', 'Turku'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Dinamarca?',
        options: ['Copenhague', 'Aarhus', 'Odense'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Grecia?',
        options: ['Atenas', 'Salónica', 'Patras'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Polonia?',
        options: ['Varsovia', 'Cracovia', 'Lodz'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Portugal?',
        options: ['Lisboa', 'Oporto', 'Braga'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Bélgica?',
        options: ['Bruselas', 'Amberes', 'Gante'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Suiza?',
        options: ['Berna', 'Zúrich', 'Ginebra'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Austria?',
        options: ['Viena', 'Salzburgo', 'Graz'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Hungría?',
        options: ['Budapest', 'Debrecen', 'Szeged'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Irlanda?',
        options: ['Dublín', 'Cork', 'Galway'],
        correctIndex: 0
      }
    ]
  },

  // OPERACIONES BÁSICAS MATEMÁTICAS
  {
    name: 'Examen de Operaciones Básicas Matemáticas',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXHiIEdETa0697CK4hQlKzowrrdIj6DYQ2A&s',
    createdAt: yesterday,
    questions: [
      {
        question: '¿Cuál es la suma de 5 + 3?',
        options: ['7', '8', '9'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 10 - 4?',
        options: ['6', '5', '4'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el producto de 6 * 3?',
        options: ['18', '21', '24'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el cociente de 20 / 4?',
        options: ['4', '5', '6'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 7 + 8?',
        options: ['14', '15', '16'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 15 - 9?',
        options: ['6', '5', '7'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el producto de 4 * 4?',
        options: ['12', '16', '18'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el cociente de 36 / 6?',
        options: ['5', '6', '7'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 9 + 6?',
        options: ['14', '15', '16'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 14 - 8?',
        options: ['5', '6', '7'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el producto de 5 * 5?',
        options: ['20', '25', '30'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el cociente de 42 / 7?',
        options: ['5', '6', '7'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 12 + 7?',
        options: ['18', '19', '20'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 18 - 11?',
        options: ['6', '7', '8'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el producto de 3 * 7?',
        options: ['20', '21', '22'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el cociente de 54 / 9?',
        options: ['5', '6', '7'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 8 + 9?',
        options: ['16', '17', '18'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 20 - 13?',
        options: ['6', '7', '8'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el producto de 2 * 9?',
        options: ['16', '17', '18'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el cociente de 63 / 7?',
        options: ['8', '9', '10'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 11 + 11?',
        options: ['21', '22', '23'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 25 - 17?',
        options: ['7', '8', '9'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el producto de 6 * 4?',
        options: ['20', '24', '28'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el cociente de 81 / 9?',
        options: ['8', '9', '10'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 15 + 9?',
        options: ['23', '24', '25'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 30 - 21?',
        options: ['8', '9', '10'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el producto de 7 * 3?',
        options: ['20', '21', '22'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el cociente de 48 / 6?',
        options: ['7', '8', '9'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la suma de 13 + 8?',
        options: ['20', '21', '22'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la resta de 27 - 19?',
        options: ['7', '8', '9'],
        correctIndex: 1
      }
    ]
  },

  // JAVASCRIPT BÁSICO
  {
    name: 'Examen de JavaScript Básico',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    createdAt: yesterday,
    questions: [
      {
        question: '¿Cómo se crea una variable en JavaScript?',
        options: [
          'var myVariable;',
          'variable myVariable;',
          'myVariable = var;'
        ],
        correctIndex: 0
      },
      {
        question:
          '¿Cómo se escribe un comentario de una sola línea en JavaScript?',
        options: [
          '/* Esto es un comentario */',
          '// Esto es un comentario',
          '-- Esto es un comentario'
        ],
        correctIndex: 1
      },
      {
        question: '¿Cómo se declara una función en JavaScript?',
        options: [
          'function myFunction() {}',
          'def myFunction() {}',
          'func myFunction() {}'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el resultado de 2 + \'2\' en JavaScript?',
        options: ['4', '\'22\'', 'NaN'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el operador de igualdad estricta en JavaScript?',
        options: ['==', '=', '==='],
        correctIndex: 2
      },
      {
        question:
          '¿Cómo se llama el objeto que representa la ventana del navegador en JavaScript?',
        options: ['browser', 'document', 'window'],
        correctIndex: 2
      },
      {
        question:
          '¿Cómo se accede al primer elemento de un array en JavaScript?',
        options: ['array[0]', 'array[1]', 'array.first()'],
        correctIndex: 0
      },
      {
        question:
          '¿Cómo se convierte una cadena a un número entero en JavaScript?',
        options: [
          'parseInt(cadena)',
          'int(cadena)',
          'Number.parseInteger(cadena)'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el resultado de \'5\' === 5?',
        options: ['true', 'false', 'undefined'],
        correctIndex: 1
      },
      {
        question:
          '¿Qué método se usa para agregar un elemento al final de un array en JavaScript?',
        options: ['add()', 'push()', 'append()'],
        correctIndex: 1
      },
      {
        question: '¿Qué devuelve la función Array.isArray()?',
        options: [
          'true si el argumento es un array, de lo contrario false',
          'true si el argumento es un objeto, de lo contrario false',
          'true si el argumento es un array o un objeto, de lo contrario false'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cómo se escribe una condición \'if\' en JavaScript?',
        options: ['if x > 0 then {}', 'if (x > 0) {}', 'if x > 0 {}'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el operador lógico \'AND\' en JavaScript?',
        options: ['&&', '||', '&'],
        correctIndex: 0
      },
      {
        question:
          '¿Qué método se usa para eliminar el último elemento de un array en JavaScript?',
        options: ['remove()', 'pop()', 'delete()'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el resultado de \'10\' - 5?',
        options: ['5', '\'5\'', 'NaN'],
        correctIndex: 0
      },
      {
        question: '¿Cómo se accede a un elemento con id=\'myId\' en el DOM?',
        options: [
          'document.getElementById(\'myId\')',
          'document.querySelector(\'#myId\')',
          'Ambas respuestas son correctas'
        ],
        correctIndex: 2
      },
      {
        question:
          '¿Qué método se usa para unir todos los elementos de un array en una cadena?',
        options: ['concat()', 'join()', 'merge()'],
        correctIndex: 1
      },
      {
        question: '¿Qué significa JSON?',
        options: [
          'JavaScript Object Notation',
          'Java Source Object Notation',
          'JavaScript Oriented Notation'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la diferencia entre let y var en JavaScript?',
        options: [
          'let tiene un ámbito de bloque, var tiene un ámbito de función',
          'let tiene un ámbito de función, var tiene un ámbito de bloque',
          'No hay diferencia'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cómo se declara una constante en JavaScript?',
        options: [
          'const myConstant;',
          'let myConstant = 5;',
          'const myConstant = 5;'
        ],
        correctIndex: 2
      },
      {
        question: '¿Cómo se escribe una función anónima en JavaScript?',
        options: [
          'function() {}',
          'function anonymous() {}',
          'function() => {}'
        ],
        correctIndex: 0
      },
      {
        question: '¿Qué método se usa para buscar un elemento en un array?',
        options: ['find()', 'search()', 'lookup()'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el resultado de typeof null en JavaScript?',
        options: ['\'null\'', '\'undefined\'', '\'object\''],
        correctIndex: 2
      },
      {
        question:
          '¿Qué método se usa para convertir un objeto a una cadena JSON en JavaScript?',
        options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()'],
        correctIndex: 0
      },
      {
        question:
          '¿Qué método se usa para recorrer todos los elementos de un array?',
        options: ['each()', 'forEach()', 'loop()'],
        correctIndex: 1
      },
      {
        question:
          '¿Cómo se agrega un elemento al principio de un array en JavaScript?',
        options: ['push()', 'unshift()', 'shift()'],
        correctIndex: 1
      },
      {
        question:
          '¿Qué palabra clave se usa para definir una clase en JavaScript?',
        options: ['class', 'Class', 'function'],
        correctIndex: 0
      },
      {
        question:
          '¿Qué método se usa para verificar si un array incluye un determinado elemento?',
        options: ['contains()', 'has()', 'includes()'],
        correctIndex: 2
      },
      {
        question:
          '¿Qué operador se usa para la concatenación de cadenas en JavaScript?',
        options: ['+', '&', 'concat()'],
        correctIndex: 0
      },
      {
        question: '¿Qué es NaN en JavaScript?',
        options: ['Not a Number', 'Null and Nothing', 'Number and Null'],
        correctIndex: 0
      }
    ]
  },

  // CULTURA GENERAL

  {
    name: 'Examen de Cultura General',
    imageUrl: 'https://image.europafm.com/clipping/cmsimages01/2018/02/27/20055F6D-B819-4D02-AA50-3C141C98B2AB/58.jpg',
    createdAt: new Date(),
    questions: [
      {
        question: '¿Cuál es el país más grande del mundo por superficie?',
        options: ['Canadá', 'China', 'Rusia'],
        correctIndex: 2
      },
      {
        question: '¿Quién pintó la Mona Lisa?',
        options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el río más largo del mundo?',
        options: ['Amazonas', 'Nilo', 'Misisipi'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la capital de Australia?',
        options: ['Sídney', 'Melbourne', 'Canberra'],
        correctIndex: 2
      },
      {
        question: '¿En qué año llegó el hombre a la Luna?',
        options: ['1965', '1969', '1972'],
        correctIndex: 1
      },
      {
        question: '¿Quién escribió \'Don Quijote de la Mancha\'?',
        options: [
          'Miguel de Cervantes',
          'Gabriel García Márquez',
          'Jorge Luis Borges'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cuál es el idioma más hablado en el mundo?',
        options: ['Español', 'Inglés', 'Mandarín'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es la moneda oficial de Japón?',
        options: ['Yen', 'Won', 'Yuan'],
        correctIndex: 0
      },
      {
        question: '¿Qué científico formuló la teoría de la relatividad?',
        options: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el océano más grande del mundo?',
        options: ['Atlántico', 'Pacífico', 'Índico'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el planeta más grande del sistema solar?',
        options: ['Saturno', 'Júpiter', 'Neptuno'],
        correctIndex: 1
      },
      {
        question: '¿En qué país se encuentra la Torre Eiffel?',
        options: ['Italia', 'España', 'Francia'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el país con mayor población del mundo?',
        options: ['India', 'Estados Unidos', 'China'],
        correctIndex: 2
      },
      {
        question: '¿Quién es el autor de \'Cien años de soledad\'?',
        options: [
          'Gabriel García Márquez',
          'Mario Vargas Llosa',
          'Julio Cortázar'
        ],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la montaña más alta del mundo?',
        options: ['Monte Everest', 'K2', 'Kangchenjunga'],
        correctIndex: 0
      },
      {
        question: '¿En qué continente se encuentra el desierto del Sahara?',
        options: ['Asia', 'África', 'América del Sur'],
        correctIndex: 1
      },
      {
        question: '¿Quién fue el primer presidente de los Estados Unidos?',
        options: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el animal terrestre más rápido del mundo?',
        options: ['León', 'Guepardo', 'Tigre'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el elemento químico con el símbolo \'O\'?',
        options: ['Oro', 'Oxígeno', 'Osmio'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es la ciudad más poblada del mundo?',
        options: ['Tokio', 'Nueva York', 'Shanghai'],
        correctIndex: 0
      },
      {
        question: '¿Cuál es la capital de Egipto?',
        options: ['Alejandría', 'El Cairo', 'Giza'],
        correctIndex: 1
      },
      {
        question: '¿Qué país es famoso por su torre inclinada?',
        options: ['España', 'Grecia', 'Italia'],
        correctIndex: 2
      },
      {
        question: '¿Quién escribió \'La Odisea\'?',
        options: ['Platón', 'Homero', 'Sófocles'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el nombre del órgano más grande del cuerpo humano?',
        options: ['Cerebro', 'Hígado', 'Piel'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el país más pequeño del mundo?',
        options: ['Mónaco', 'San Marino', 'Ciudad del Vaticano'],
        correctIndex: 3
      },
      {
        question: '¿Qué gas es esencial para la respiración?',
        options: ['Dióxido de carbono', 'Oxígeno', 'Nitrógeno'],
        correctIndex: 1
      },
      {
        question: '¿Quién pintó \'La última cena\'?',
        options: ['Miguel Ángel', 'Rafael', 'Leonardo da Vinci'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el país con la mayor cantidad de islas?',
        options: ['Filipinas', 'Indonesia', 'Suecia'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es la capital de Tailandia?',
        options: ['Bangkok', 'Phuket', 'Chiang Mai'],
        correctIndex: 0
      },
      {
        question:
          '¿Qué país es conocido por sus tulipanes y molinos de viento?',
        options: ['Bélgica', 'Dinamarca', 'Países Bajos'],
        correctIndex: 2
      }
    ]
  }
]

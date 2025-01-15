# Reglas Generales
- Sigue las convenciones de codificación de TypeScript y React.
- Mantén el código limpio y legible.
- Evita el uso de código duplicado.
- Usa ESLint y Prettier para garantizar un formato consistente.

# Nombres de Variables y Funciones
- Usa camelCase para variables y funciones.
- Usa nombres descriptivos que reflejen el propósito de la variable o función.

# Correcto
```
const userName = 'JohnDoe';
function calculateTotal(price: number, tax: number): number {
  return price + tax;
}
```

# Incorrecto
```
const User_name = 'JohnDoe';
function calc(price, tax) {
  return price + tax;
}
```

# Formato de código
- Usa 2 espacios para la indentación.
- Coloca una línea en blanco entre bloques de código y funciones.
- Usa comillas simples para cadenas de texto.

# Correcto
```
function add(a: number, b: number): number {
  return a + b;
}

const greeting = 'Hello, world!';
console.log(greeting);
```

# Incorrecto
```
function add(a:number,b:number){return a+b;}
const greeting="Hello, world!";console.log(greeting);
```

# Tipos y Interfaces
- Preferible usar interface sobre type cuando sea posible.
- Usar readonly para propiedades que no deben cambiar.

# Correcto
```
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: 'John Doe' };
```

# Incorrecto
```
type User = {
  id: number;
  name: string;
};

const user: User = { id: 1, name: 'John Doe' };
user.id = 2; // Esto debería estar prohibido xd
```

# Manejo de Errores
- Usa try/catch para manejar errores.
- Proporciona mensajes de error claros y útiles.

# Correcto
```
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred while performing the operation:', error);
}
```

# Incorrecto
```
const result = riskyOperation();
console.log(result); // Sin manejo de errores
```

# Comentarios
- Usa comentarios JSDoc para documentar funciones y clases.
- Escribe comentarios en inglés.

# Correcto
```
/**
 * Calculates the sum of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of `a` and `b`.
 */
function add(a: number, b: number): number {
  return a + b;
}
```

# Incorrecto
```
// Suma dos números
function add(a: number, b: number): number {
  return a + b;
}
```

# Importaciones
- Ordena las importaciones: primero módulos externos, luego internos.
- Usa importaciones específicas en lugar de globales.

# Correcto
```
import React from 'react';
import { useState } from 'react';
import { myFunction } from './utils';
import type { User } from './types';
```

# Incorrecto
```
import * as Utils from './utils';
import React, { useState } from 'react';
```

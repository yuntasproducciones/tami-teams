-- Eliminar la base de datos si ya existe

DROP DATABASE IF EXISTS tamiperu;

-- Crear la base de datos y usarla

CREATE DATABASE tamiperu;
USE tamiperu;

DROP TABLE IF EXISTS productos;

-- Estructura de tabla para la tabla categorias

CREATE TABLE categorias (
                            id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                            nombre VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Estructura de tabla para la tabla productos

CREATE TABLE productos (
                           id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           imagen VARCHAR(255),
                           descripcion TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Estructura de tabla para la relación productos_categorias

CREATE TABLE productos_categorias (
                                      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                      producto_id INT(11) NOT NULL,
                                      categoria_id INT(11) NOT NULL,
                                      FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE,
                                      FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Estructura de tabla para detalles_productos

CREATE TABLE detalles_productos (
                                    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    producto_id INT(11) NOT NULL,
                                    titulo VARCHAR(255) NOT NULL,
                                    valoracion DECIMAL(3,2),
                                    comentarios TEXT,
                                    descripcion TEXT,
                                    longitud DECIMAL(10,2),
                                    ancho DECIMAL(10,2),
                                    altura DECIMAL(10,2),
                                    cantidad INT(11),
                                    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#


-- Crear la tabla contactos

CREATE TABLE contactos (
                           id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                           nombre VARCHAR(100) NOT NULL,
                           apellido VARCHAR(100) NOT NULL,
                           email VARCHAR(100) NOT NULL,
                           telefono VARCHAR(20) NOT NULL,
                           fecha_creacion TIMESTAMP NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#


-- Tabla de roles

CREATE TABLE roles (
                       id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       nombre VARCHAR(100) NOT NULL,
                       descripcion TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Crear la tabla usuarios

CREATE TABLE usuarios (
                          id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                          nombre VARCHAR(100) NOT NULL,
                          email VARCHAR(100) NOT NULL,
                          usuario VARCHAR(100) NOT NULL,
                          contrasena VARCHAR(100) NOT NULL,
                          rol_id INT(11) NOT NULL,
                          fecha_creacion TIMESTAMP NOT NULL DEFAULT current_timestamp(),
                          FOREIGN KEY (rol_id) REFERENCES roles(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla de permisos

CREATE TABLE permisos (
                          id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                          nombre VARCHAR(100) NOT NULL,
                          descripcion TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla de roles_permisos

CREATE TABLE roles_permisos (
                                rol_id INT(11) NOT NULL,
                                permiso_id INT(11) NOT NULL,
                                PRIMARY KEY (rol_id, permiso_id),
                                FOREIGN KEY (rol_id) REFERENCES roles(id),
                                FOREIGN KEY (permiso_id) REFERENCES permisos(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Tabla de usuarios_roles

CREATE TABLE usuarios_roles (
                                usuario_id INT(11) NOT NULL,
                                rol_id INT(11) NOT NULL,
                                PRIMARY KEY (usuario_id, rol_id),
                                FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
                                FOREIGN KEY (rol_id) REFERENCES roles(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


#-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------#


-- Insertar roles

INSERT INTO roles (nombre, descripcion) VALUES
    ('Administrador', 'Rol con todos los permisos'),
    ('Usuario', 'Rol con permisos limitados');


-- Insertar un usuario con la contraseña encriptada usando SHA2

INSERT INTO usuarios (nombre, email, usuario, contrasena, rol_id)VALUES
    ('Juan', 'juan@example.com', 'admin', SHA2('admin', 256), 1),
    ('Maria', 'maria@example.com', 'maria123', SHA2('usuario', 256), 2);

-- Insertar permisos

INSERT INTO permisos (nombre, descripcion) VALUES
    ('ver_usuarios', 'Permiso para ver usuarios'),
    ('editar_usuarios', 'Permiso para editar usuarios'),
    ('eliminar_usuarios', 'Permiso para eliminar usuarios'),
    ('ver_productos', 'Permiso para ver productos'),
    ('editar_productos', 'Permiso para editar productos'),
    ('eliminar_productos', 'Permiso para eliminar productos');

-- Insertar roles_permisos

INSERT INTO roles_permisos (rol_id, permiso_id) VALUES
    (1, 1), -- Administrador - ver_usuarios
    (1, 2), -- Administrador - editar_usuarios
    (1, 3), -- Administrador - eliminar_usuarios
    (1, 4), -- Administrador - ver_productos
    (1, 5), -- Administrador - editar_productos
    (1, 6), -- Administrador - eliminar_productos
    (2, 4), -- Usuario - ver_productos
    (2, 5); -- Usuario - editar_productos


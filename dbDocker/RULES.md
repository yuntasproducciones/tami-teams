# Correr el contenedor de MARIABD en docker

Sigue estas instrucciones para correr el contenedor de MariaDB en Docker:

## Primer paso
En la consola darle
```
cd dbDocker
```
## Segundo paso
Una vez dentro de la carpeta dbDocker, ejecutar el siguiente comando:
```
docker compose up --build -d
```
## Tercer paso
Se generara el archivo mariabd-data en la carpeta dbDocker, este archivo es donde se guardaran los datos de la base de datos.

## Cuarto paso
Para detener el contenedor de MariaDB, ejecutar el siguiente comando:
```
docker compose down 
```
## Quinto paso
Si se desea volver a levantar el contenedor de MariaDB, ejecutar el siguiente comando:
```
docker compose up -d
```

## Pasos para la conexión a la base de datos
En el gestor de base de datos que tengan instalado, crear una nueva conexión con los siguientes datos:

- Name: En el nombre de la conexión pueden poner el que deseen.
- Host: En el host deben poner: 127.0.0.1
- Port: En el puerto deben poner: 3306
- User: En el user deben poner: root
- Password: En el password deben poner: tamigod

## Explicaciones extras
En el docker compose, no trae el usuario pero se infiere que es root.

La contraseña de la bd, esta en el docker compose, pueden cambiarla si gustan, pero preferible que no.


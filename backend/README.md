Backend

Base de datos Mongo DB =mongodb+srv://camilodar...

Servidor en  --> http://localhost:4500

Prueba de crear usuario desde THUNDERCLIENT --> Ok (contrasena encriptada)
Prueba de iniciar sesion desde THUNDERCLIENT --> Ok (Solicitud del token Ok)
Prueba de crear rutina desde THUNDERCLIENT --> Ok (Necesita Token del usuario Ok)
Prueba de marcar rutina como favorita desde THUNDERCLIENT --> Ok (Necesita Token del usuario + ID de la rutina Ok)

Dependencias instaladas: 
                     - bcrypts: Encriptar contrasenas
                     - cors : Aceptar peticiones desde otros dominios 
                     - dotenv : Cargar variables del entorno
                     - express : Facilita el manejo de rutas
                     - jsonwebtoken : Genera y verifica TOKENS jwt
                     - mongodb : Conecta con la base de datos
                     - mongoose : Facilita las validaciones
                     - nodemon : Reinicia el servidor cuando ve cambios.
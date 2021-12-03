# Puedo hacerlo mejor! Lo prometo!!!

Este es el readme general.

## Declaraciones:

A Quise hacerlo lo más rapido posible así que hice lo minimo indispensabe
B Como veran no soy un capo del diseño jaja
C Agregue unas pequeñas querys para el diseño responsive ESTA HECHO MOBILE FIRST
D la base de datos y la api estan deployadas en Heroku

[link a la api](https://still-river-75502.herokuapp.com/)
La API tiene un solo endpoint que permite hacer un crud a la tabla productos.
[link al repo de la api](https://github.com/lean4339/ApiStoryDot)
como veran en el repo usé clases y separe lo mejor posible las responsabilidades siguiendo el principio de responsabilidad unica.
utilicé Sequelize porque me encanta jaja
la tabla fue creada a partir del modelo
para finalizar los endpoints son abiertos pero para que los prueben solamente
si quisieran podria cerrarlos o limitarlos solo a la web del cliente
[link al cliente](https://pacific-reaches-87926.herokuapp.com/)
bueno el cliente como les conte trata de ser responsive aunque no tiene buen diseño
el tratamiento de las fotos se ve mal pero no queria quitar la imagen y poner un background image en un div por cuestiones de accesibilidad 
aunque ahora que lo pienso no puse bien el alt. Podria definirlo con la variable del nombre del producto si asi lo quisieran.
el cliente tiene dos componentes basicos el modal del detalle y los productos. ambos son parecidos.
el modal require sus datos de una variable definida con setstate que se pasa por props.
me hubiera gustado hacer el crud.
[link del repo del cliente](a es este perdon jaja)

las librerias que use son react, express, cors, dotenv y joi hay otras instaladas en la api pero son todas de prueba y olvide desinstalarlas
ah! sequelize tambien use.
el endpoint del backend /products y ahi se pueden hacer las cuatro operaciones crud.

consideraciones finales:
me hubiera gustado meterle mas tiempo pero estoy en otro proceso de selecion.
mi plan es hacer las dos tablas extras de usuarios y marcas ambas con su propio crud
el json web token para el inicio de sesion
me gustaria tambien hacer un diseño mas lindo en el front 
y por ultimo me gustaria hacer el crud en front ya que considero la app incompleta.


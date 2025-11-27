# Examen RA6

---

## Usuario 1 (Creador del repositorio)
Este usuario se encarga de crear el repositorio y de crear los archivos que va a contener el proyecto, aunque esten vacios.

Yo me he creado una cuenta de github y he llama al repositorio **practica-examen-despliegue**.

Tambien deberia crear el workflow para hacer la documentacion automática(en este caso con jsdoc) y comprobar que pasa las pruebas unitarias (con jest).

Por último, creariamos la rama deploy para que el usuario 2 saque las features desde hay y luego haga el pull request a deploy.

---

## Usuario 2 (Desarrollador de la aplicación)

Primero se hace un clone de la rama deploy en su máquina local, se crea una rama features/nombre-feature y va programando ahí su aplicación

Tambien se encargaría de hacer el archivo de las pruebas unitarias y la documentación de todo lo que vaya haciendo.

Cuando haya terminado de hacer su aplicación y las pruebas unitarias, tendría que documentar el proceso, por si otra persona coge el proyecto, que le sea mas sencillo trabajarlo.

Cuando termine de programar y todo este bien, le haria un pull request a la rama deploy, que tendria que revisarla y aceptarla el **Usuario 1** que digamos que es el jefe del proyecto.


## Usuario 1
El usuario 1 comprobaria que el pull request que ha hecho el usuario 2 esta bien y que no tiene fallos, y entonces lo aceptaria y haría merge de la rama feature que haya creado el usuario 2 en deploy.

Este merge activaria el workflow que había creado el **Usuario 1** al principio, que comprobaria que pasa todos los tests y desplegaría esa aplicación (Bucket S3, EC2, Vercel , GitHub Pages)

Por último con la pagina ya terminada haría un merge de la rama deploy a la rama main para que en la rama main quede ya la aplicacion terminada y le pondría un tag. 


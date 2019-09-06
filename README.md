# app-booking

Aplicacion creada en Ionic Lastest.

La aplicacion consta de dos servicios:

AuthenticationServices: Servicio encargado de realizar peticion hacia el api de login para obtener token de autenticacion

BookingServices: Servicio encargado de realizar peticion al api para obtener listado de Booking y mostrarlo en ionic-list

La aplicacion consta de dos pages los cuales son login y booking.

La aplicacion al momento de realizar login guarda el token en un store local, para luego ser obtenido en el page de booking, esto con el fin de realizar la peticion con el token enviado.
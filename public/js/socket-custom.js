var socket = io();
// los on sirven para escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Irving',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp)
});

// Escucahr información
socket.on('enviarMensaje', function(mensaje)  {
    console.log('servidor: ', mensaje);
});
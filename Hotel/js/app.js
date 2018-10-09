// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {
	$('.index header ul li a:contains("Inicio")').parent().addClass('active');
	$('.contacto header ul li a:contains("Contacto")').parent().addClass('active');
	$('.galeria header ul li a:contains("Galeria")').parent().addClass('active');
	$('.servicios header ul li a:contains("Servicios")').parent().addClass('active');
	$('.habitaciones header ul li a:contains("Habitaciones")').parent().addClass('active');
	$('.habitacion header ul li a:contains("Habitaciones")').parent().addClass('active');
});
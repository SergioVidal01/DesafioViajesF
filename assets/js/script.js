document.getElementById('termsLink').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el desplazamiento hacia arriba
    var termsModal = new bootstrap.Modal(document.getElementById('termsModal'));
    termsModal.show();
});
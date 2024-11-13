
document.addEventListener('DOMContentLoaded', function() {
    // Confirmación antes de cerrar sesión
    document.getElementById('logoutForm').addEventListener('submit', function(event) {
        if (!confirm('¿Estás seguro de que deseas cerrar sesión?')) {
            event.preventDefault();
        }
    });

    // Confirmación antes de eliminar un registro
    const deleteForms = document.querySelectorAll('.delete-form');
    deleteForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!confirm('¿Estás seguro de que deseas eliminar este registro?')) {
                event.preventDefault();
            }
        });
    });

    // Confirmación antes de editar un registro
    const editForms = document.querySelectorAll('.edit-form');
    editForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!confirm('¿Estás seguro de que deseas guardar los cambios?')) {
                event.preventDefault();
            }
        });
    });

    // Confirmación antes de agregar un registro
    document.getElementById('addForm').addEventListener('submit', function(event) {
        if (!confirm('¿Estás seguro de que deseas agregar este registro?')) {
            event.preventDefault();
        }
    });
});
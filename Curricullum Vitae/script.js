document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillItems = document.querySelectorAll('.skill-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Gérer la classe active sur les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Récupérer le filtre sélectionné
            const filterValue = button.getAttribute('data-filter');

            // 3. Filtrer les compétences
            skillItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Optionnel : ajouter un effet initial sur les skills
    skillItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
    });
});
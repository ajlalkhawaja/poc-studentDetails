// JavaScript for toggling views and handling clicks
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const gridView = document.getElementById('grid-view');
    const tileView = document.getElementById('tile-view');
    const expandedView = document.getElementById('expanded-view');
    const backButton = document.getElementById('back-button');
    const backGridButton = document.getElementById('back-Gridbutton');
  
    // Switch from Grid to Tile view
    gridView.addEventListener('click', () => {
      gridView.classList.add('hidden');
      tileView.classList.remove('hidden');
      gridView.classList.remove('show');
    });
  
    // Show Expanded View on Tile Click
    tileView.addEventListener('click', (e) => {
      if (e.target.classList.contains('tile') || e.target.closest('.tile')) {
        tileView.classList.add('hidden');
        expandedView.classList.remove('hidden');
        gridView.classList.remove('show');
      }
    });
  
    // Back to Tile View from Expanded View
    backButton.addEventListener('click', () => {
      expandedView.classList.add('hidden');
      tileView.classList.remove('hidden');
      gridView.classList.remove('show');
    });

    // Back to Grid View from Tile View
    backGridButton.addEventListener('click', () => {
        gridView.classList.add('show');
        expandedView.classList.add('hidden');
        tileView.classList.add('hidden');
    });

    // Hamburger Menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active'); // Toggle hamburger to cross
        navMenu.classList.toggle('active'); // Toggle navigation visibility
      });
  });
  
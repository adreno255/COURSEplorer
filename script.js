document.addEventListener("DOMContentLoaded", 

function() 
{
    var currentPage = window.location.pathname.split("/").pop();

    const list = document.querySelectorAll('.list');

    function activeLink()
    {
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    }

    list.forEach((item) => item.addEventListener('click', activeLink));
})

document.addEventListener("DOMContentLoaded", function() {
    // Function to load HTML file into a section
    function loadHTMLFile(url, targetId) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(targetId).innerHTML = html;

                window.scrollTo({ top: 0})
            })
            .catch(error => {
                console.error('Error loading HTML file:', error);
            });
    }

    // Load HTML file into section
    function loadPageContent(page) {
        loadHTMLFile(page + '.html', 'dynamic-content'); // Load HTML content based on page name
    }

    // Event listeners for navbar links
    document.getElementById('home').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        loadPageContent('homepage');
    });

    document.getElementById('courses').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        loadPageContent('courses');
    });

    document.getElementById('about').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        loadPageContent('about');
    });

    // Load initial page content (e.g., home page)
    loadPageContent('homepage');
});
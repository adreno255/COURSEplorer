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
    function loadHTMLFile(url, targetId, callback) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(targetId).innerHTML = html;
                window.scrollTo({ top: 0})
                if (callback) callback();
            })
            .catch(error => {
                console.error('Error loading HTML file:', error);
            });
    }

    function loadPageContent(page) {
        loadHTMLFile(page + '.html', 'dynamic-content', function() {
            if(page == 'courses'){
                const humanities = document.getElementById('humanities');
                if(humanities){
                    humanities.addEventListener('click', function(event){
                        event.preventDefault(); 
                        loadPageContent('Courses HTML/Humanities/humanities');  
                    })
                }
            }
        }); 
    }

    document.getElementById('home').addEventListener('click', function(event) {
        event.preventDefault(); 
        loadPageContent('homepage');
    });

    document.getElementById('courses').addEventListener('click', function(event) {
        event.preventDefault(); 
        loadPageContent('courses');
    });

    document.getElementById('careers').addEventListener('click', function(event) {
        event.preventDefault(); 
        loadPageContent('careers');
    });

    document.getElementById('about').addEventListener('click', function(event) {
        event.preventDefault(); 
        loadPageContent('about');
    });
    
    loadPageContent('homepage');
});
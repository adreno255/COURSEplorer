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

    function loadPage(page_id, page_path){
            document.getElementById(page_id).addEventListener('click', function(event) {
            event.preventDefault(); 
            loadPageContent(page_path);
        });
    }

    function loadPageContent(page) {
        loadHTMLFile(page + '.html', 'dynamic-content', function() {
            if(page == 'courses'){
                loadPage('agriculture', 'Courses HTML/Agriculture/agriculture');
            }

            if(page == 'Courses HTML/Agriculture/agriculture'){
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }
        }); 
    }

    loadPage('home', 'homepage');
    loadPage('courses', 'courses');
    loadPage('careers', 'careers');
    loadPage('about', 'about');
    
    loadPageContent('homepage');
});
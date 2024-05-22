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
                loadPage('architecture-and-design', 'Courses HTML/Architecture-and-Design/architecture-and-design');
                loadPage('business', 'Courses HTML/Business/business');
                loadPage('education', 'Courses HTML/Education/education');
                loadPage('engineering', 'Courses HTML/Engineering/engineering');
                loadPage('formal-sciences', 'Courses HTML/Formal-Sciences/formal-sciences');
                loadPage('health-sciences', 'Courses HTML/Health-Sciences/health-sciences');
                loadPage('humanities', 'Courses HTML/Humanities/humanities');
                loadPage('media-and-communication', 'Courses HTML/Media-and-Communication/media-and-communication');
                loadPage('natural-sciences', 'Courses HTML/Natural-Sciences/natural-sciences');
                loadPage('nutrition', 'Courses HTML/Nutrition/nutrition');
                loadPage('public-administration', 'Courses HTML/Public-Administration/public-administration');
                loadPage('social-sciences', 'Courses HTML/Social-Sciences/social-sciences');
                loadPage('transportation', 'Courses HTML/Transportation/transportation');
            }

            if(page == 'Courses HTML/Agriculture/agriculture'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Architecture-and-Design/architecture-and-design'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Business/business'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Education/education'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Engineering/engineering'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Formal-Sciences/formal-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Health-Sciences/health-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Humanities/humanities'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Media-and-Communication/media-and-communication'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Natural-Sciences/natural-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Nutrition/nutrition'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Public-Administration/public-administration'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Social-Sciences/social-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
            }

            if(page == 'Courses HTML/Transportation/transportation'){
                loadPage('back-button', 'courses');
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
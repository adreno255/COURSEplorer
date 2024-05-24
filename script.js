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
                loadPage('agriculture', 'Courses HTML/agriculture');
                loadPage('architecture-and-design', 'Courses HTML/architecture-and-design');
                loadPage('business', 'Courses HTML/business');
                loadPage('education', 'Courses HTML/education');
                loadPage('engineering', 'Courses HTML/engineering');
                loadPage('formal-sciences', 'Courses HTML/formal-sciences');
                loadPage('health-sciences', 'Courses HTML/health-sciences');
                loadPage('humanities', 'Courses HTML/humanities');
                loadPage('media-and-communication', 'Courses HTML/media-and-communication');
                loadPage('natural-sciences', 'Courses HTML/natural-sciences');
                loadPage('nutrition', 'Courses HTML/nutrition');
                loadPage('public-administration', 'Courses HTML/public-administration');
                loadPage('social-sciences', 'Courses HTML/social-sciences');
                loadPage('transportation', 'Courses HTML/transportation');
            }

            if(page == 'Courses HTML/agriculture'){
                loadPage('back-button', 'courses');
                loadPage('bs-agriculture', 'Courses HTML/Agriculture/bs-agriculture');
                loadPage('bs-agribusiness', 'Courses HTML/Agriculture/bs-agribusiness');
                loadPage('bs-agroforestry', 'Courses HTML/Agriculture/bs-agroforestry');
            }

            if(page == 'Courses HTML/architecture-and-design'){
                loadPage('back-button', 'courses');
                loadPage('bs-architecture', 'Courses HTML/Architecture-and-Design/bs-architecture');
                loadPage('b-landscape-architecture', 'Courses HTML/Architecture-and-Design/b-landscape-architecture');
                loadPage('bs-interior-design', 'Courses HTML/Architecture-and-Design/bs-interior-design');
            }

            if(page == 'Courses HTML/business'){
                loadPage('back-button', 'courses');
                loadPage('bs-accountancy', 'Courses HTML/Business/bs-accountancy');
                loadPage('bs-accounting-technology', 'Courses HTML/Business/bs-accounting-technology');
                loadPage('bs-business-administration-be', 'Courses HTML/Business/bs-business-administration-be');
                loadPage('bs-business-administration-fm', 'Courses HTML/Business/bs-business-administration-fm');
                loadPage('bs-business-administration-hrdm', 'Courses HTML/Business/bs-business-administration-hrdm');
                loadPage('bs-business-administration-mm', 'Courses HTML/Business/bs-business-administration-mm');
                loadPage('bs-business-administration-om', 'Courses HTML/Business/bs-business-administration-om');
                loadPage('bs-hotel-and-restaurant-management', 'Courses HTML/Business/bs-hotel-and-restaurant-management');
                loadPage('bs-entrepreneurship', 'Courses HTML/Business/bs-entrepreneurship');
                loadPage('bs-office-administration', 'Courses HTML/Business/bs-office-administration');
                loadPage('bs-real-estate-management', 'Courses HTML/Business/bs-real-estate-management');
                loadPage('bs-tourism-management', 'Courses HTML/Business/bs-tourism-management');
            }

            if(page == 'Courses HTML/education'){
                loadPage('back-button', 'courses');
                loadPage('b-secondary-education', 'Courses HTML/Education/b-secondary-education');
                loadPage('b-elementary-education', 'Courses HTML/Education/b-elementary-education');
                loadPage('bsed-tle', 'Courses HTML/Education/bsed-tle');
                loadPage('bsed-biological-sciences', 'Courses HTML/Education/bsed-biological-sciences');
                loadPage('bsed-english', 'Courses HTML/Education/bsed-english');
                loadPage('bsed-filipino', 'Courses HTML/Education/bsed-filipino');
                loadPage('bsed-mathematics', 'Courses HTML/Education/bsed-mathematics');
                loadPage('bsed-islamic-studies', 'Courses HTML/Education/bsed-islamic-studies');
                loadPage('bsed-mapeh', 'Courses HTML/Education/bsed-mapeh');
                loadPage('bsed-physical-sciences', 'Courses HTML/Education/bsed-physical-sciences');
                loadPage('bsed-social-studies', 'Courses HTML/Education/bsed-social-studies');
                loadPage('bsed-values-education', 'Courses HTML/Education/bsed-values-education');
                loadPage('beed-preschool-education', 'Courses HTML/Education/beed-preschool-education');
                loadPage('beed-special-education', 'Courses HTML/Education/beed-special-education');
                loadPage('b-library-and-information', 'Courses HTML/Education/b-library-and-information');
                loadPage('b-physical-education', 'Courses HTML/Education/b-physical-education');
            } 

            if(page == 'Courses HTML/engineering'){
                loadPage('back-button', 'courses');
                loadPage('bs-aeronautical-engineering', 'Courses HTML/Engineering/bs-aeronautical-engineering');
                loadPage('bs-ceramic-engineering', 'Courses HTML/Engineering/bs-ceramic-engineering');
                loadPage('bs-chemical-engineering', 'Courses HTML/Engineering/bs-chemical-engineering');
                loadPage('bs-civil-engineering', 'Courses HTML/Engineering/bs-civil-engineering');
                loadPage('bs-computer-engineering', 'Courses HTML/Engineering/bs-computer-engineering');
                loadPage('bs-electrical-engineering', 'Courses HTML/Engineering/bs-electrical-engineering');
                loadPage('bs-ece', 'Courses HTML/Engineering/bs-ece');
                loadPage('bs-geodetic-engineering', 'Courses HTML/Engineering/bs-geodetic-engineering');
                loadPage('bs-geological-engineering', 'Courses HTML/Engineering/bs-geological-engineering');
                loadPage('bs-industrial-engineering', 'Courses HTML/Engineering/bs-industrial-engineering');
                loadPage('bs-marine-engineering', 'Courses HTML/Engineering/bs-marine-engineering');
                loadPage('bs-materials-engineering', 'Courses HTML/Engineering/bs-materials-engineering');
                loadPage('bs-mechanical-engineering', 'Courses HTML/Engineering/bs-mechanical-engineering');
                loadPage('bs-metallurgical-engineering', 'Courses HTML/Engineering/bs-metallurgical-engineering');
                loadPage('bs-mining-engineering', 'Courses HTML/Engineering/bs-mining-engineering');
                loadPage('bs-petroleum-engineering', 'Courses HTML/Engineering/bs-petroleum-engineering');
                loadPage('bs-sanitary-engineering', 'Courses HTML/Engineering/bs-sanitary-engineering');
            }         

            if(page == 'Courses HTML/formal-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-computer-science', 'Courses HTML/Formal-Sciences/bs-computer-science');
                loadPage('bs-information-technology', 'Courses HTML/Formal-Sciences/bs-information-technology');
                loadPage('bs-information-systems', 'Courses HTML/Formal-Sciences/bs-information-systems');
                loadPage('bs-mathematics', 'Courses HTML/Formal-Sciences/bs-mathematics');
                loadPage('bs-applied-mathematics', 'Courses HTML/Formal-Sciences/bs-applied-mathematics');
                loadPage('bs-statistics', 'Courses HTML/Formal-Sciences/bs-statistics');
            }            

            if(page == 'Courses HTML/health-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-medical-technology', 'Courses HTML/Health-Sciences/bs-medical-technology');
                loadPage('bs-midwifery', 'Courses HTML/Health-Sciences/bs-midwifery');
                loadPage('bs-nursing', 'Courses HTML/Health-Sciences/bs-nursing');
                loadPage('bs-occupational-therapy', 'Courses HTML/Health-Sciences/bs-occupational-therapy');
                loadPage('bs-pharmacy', 'Courses HTML/Health-Sciences/bs-pharmacy');
                loadPage('bs-physical-therapy', 'Courses HTML/Health-Sciences/bs-physical-therapy');
                loadPage('bs-radiologic-technology', 'Courses HTML/Health-Sciences/bs-radiologic-technology');
                loadPage('bs-respiratory-therapy', 'Courses HTML/Health-Sciences/bs-respiratory-therapy');
                loadPage('bs-speech-language-pathology', 'Courses HTML/Health-Sciences/bs-speech-language-pathology');
                loadPage('bs-sports-science', 'Courses HTML/Health-Sciences/bs-sports-science');
            }            

            if(page == 'Courses HTML/humanities'){
                loadPage('back-button', 'courses');
                loadPage('ab-history', 'Courses HTML/Humanities/ab-history');
                loadPage('ab-philosophy', 'Courses HTML/Humanities/ab-philosophy');
                loadPage('bfa-industrial-design', 'Courses HTML/Humanities/bfa-industrial-design');
                loadPage('bfa-painting', 'Courses HTML/Humanities/bfa-painting');
                loadPage('bfa-sculpture', 'Courses HTML/Humanities/bfa-sculpture');
                loadPage('bfa-visual-communication', 'Courses HTML/Humanities/bfa-visual-communication');
            }            

            if(page == 'Courses HTML/media-and-communication'){
                loadPage('back-button', 'courses');
                loadPage('ab-broadcasting', 'Courses HTML/Media-and-Communication/ab-broadcasting');
                loadPage('ab-communication', 'Courses HTML/Media-and-Communication/ab-communication');
                loadPage('bs-development-communication', 'Courses HTML/Media-and-Communication/bs-development-communication');
                loadPage('ab-journalism', 'Courses HTML/Media-and-Communication/ab-journalism');
                loadPage('ab-mass-communication', 'Courses HTML/Media-and-Communication/ab-mass-communication');
            }            

            if(page == 'Courses HTML/natural-sciences'){
                loadPage('back-button', 'courses');
                loadPage('bs-environmental-science', 'Courses HTML/Natural-Sciences/bs-environmental-science');
                loadPage('bs-forestry', 'Courses HTML/Natural-Sciences/bs-forestry');
                loadPage('bs-fisheries', 'Courses HTML/Natural-Sciences/bs-fisheries');
                loadPage('bs-geology', 'Courses HTML/Natural-Sciences/bs-geology');
                loadPage('bs-biology', 'Courses HTML/Natural-Sciences/bs-biology');
                loadPage('bs-molecular-biology', 'Courses HTML/Natural-Sciences/bs-molecular-biology');
                loadPage('bs-physics', 'Courses HTML/Natural-Sciences/bs-physics');
                loadPage('bs-applied-physics', 'Courses HTML/Natural-Sciences/bs-applied-physics');
                loadPage('bs-chemistry', 'Courses HTML/Natural-Sciences/bs-chemistry');
            }            

            if(page == 'Courses HTML/nutrition'){
                loadPage('back-button', 'courses');
                loadPage('bs-food-technology', 'Courses HTML/Nutrition/bs-food-technology');
                loadPage('bs-nutrition-and-dietetics', 'Courses HTML/Nutrition/bs-nutrition-and-dietetics');
            }

            if(page == 'Courses HTML/public-administration'){
                loadPage('back-button', 'courses');
                loadPage('bs-community-development', 'Courses HTML/Public-Administration/bs-community-development');
                loadPage('bs-customs-administration', 'Courses HTML/Public-Administration/bs-customs-administration');
                loadPage('bs-foreign-service', 'Courses HTML/Public-Administration/bs-foreign-service');
                loadPage('bs-international-studies', 'Courses HTML/Public-Administration/bs-international-studies');
                loadPage('b-public-administration', 'Courses HTML/Public-Administration/b-public-administration');
                loadPage('bs-public-safety', 'Courses HTML/Public-Administration/bs-public-safety');
                loadPage('bs-social-work', 'Courses HTML/Public-Administration/bs-social-work');
            }            

            if(page == 'Courses HTML/social-sciences'){
                loadPage('back-button', 'courses');
                loadPage('ab-economics', 'Courses HTML/Social-Sciences/ab-economics');
                loadPage('bs-economics', 'Courses HTML/Social-Sciences/bs-economics');
                loadPage('ab-psychology', 'Courses HTML/Social-Sciences/ab-psychology');
                loadPage('bs-psychology', 'Courses HTML/Social-Sciences/bs-psychology');
                loadPage('bs-criminology', 'Courses HTML/Social-Sciences/bs-criminology');
                loadPage('ab-political-science', 'Courses HTML/Social-Sciences/ab-political-science');
                loadPage('ab-english', 'Courses HTML/Social-Sciences/ab-english');
                loadPage('ab-linguistics', 'Courses HTML/Social-Sciences/ab-linguistics');
                loadPage('ab-literature', 'Courses HTML/Social-Sciences/ab-literature');
                loadPage('ab-anthropology', 'Courses HTML/Social-Sciences/ab-anthropology');
                loadPage('ab-sociology', 'Courses HTML/Social-Sciences/ab-sociology');
                loadPage('ab-filipino', 'Courses HTML/Social-Sciences/ab-filipino');
                loadPage('bs-forensic-science', 'Courses HTML/Social-Sciences/bs-forensic-science');
                loadPage('ab-islamic-studies', 'Courses HTML/Social-Sciences/ab-islamic-studies');
            }            

            if(page == 'Courses HTML/transportation'){
                loadPage('back-button', 'courses');
                loadPage('bs-marine-transportation', 'Courses HTML/Transportation/bs-marine-transportation');
            }

            if (page.startsWith('Courses HTML/Agriculture/')) {
                loadPage('back-button', 'Courses HTML/agriculture');
            }

            if (page.startsWith('Courses HTML/Architecture-and-Design/')) {
                loadPage('back-button', 'Courses HTML/architecture-and-design');
            }

            if (page.startsWith('Courses HTML/Business/')) {
                loadPage('back-button', 'Courses HTML/business');
            }

            if (page.startsWith('Courses HTML/Education/')) {
                loadPage('back-button', 'Courses HTML/education');
            }

            if (page.startsWith('Courses HTML/Engineering/')) {
                loadPage('back-button', 'Courses HTML/engineering');
            }

            if (page.startsWith('Courses HTML/Formal-Sciences/')) {
                loadPage('back-button', 'Courses HTML/formal-sciences');
            }

            if (page.startsWith('Courses HTML/Health-Sciences/')) {
                loadPage('back-button', 'Courses HTML/health-sciences');
            }

            if (page.startsWith('Courses HTML/Humanities/')) {
                loadPage('back-button', 'Courses HTML/humanities');
            }

            if (page.startsWith('Courses HTML/Media-and-Communication/')) {
                loadPage('back-button', 'Courses HTML/media-and-communication');
            }

            if (page.startsWith('Courses HTML/Natural-Sciences/')) {
                loadPage('back-button', 'Courses HTML/natural-sciences');
            }

            if (page.startsWith('Courses HTML/Nutrition/')) {
                loadPage('back-button', 'Courses HTML/nutrition');
            }

            if (page.startsWith('Courses HTML/Public-Administration/')) {
                loadPage('back-button', 'Courses HTML/public-administration');
            }

            if (page.startsWith('Courses HTML/Social-Sciences/')) {
                loadPage('back-button', 'Courses HTML/social-sciences');
            }

            if (page.startsWith('Courses HTML/Transportation/')) {
                loadPage('back-button', 'Courses HTML/transportation');
            }
            
        }); 
    }

    loadPage('home', 'homepage');
    loadPage('courses', 'courses');
    loadPage('careers', 'careers');
    loadPage('about', 'about');
    
    loadPageContent('homepage');
});
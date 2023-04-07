<?php
/**
 * The 404 template file
 * @package akaleya-small-header-theme 
 */

get_header();?>
<div id='error-404' class='content-area container-fluid  position-relative mb-5'>
    <main id='main' class='site-main error-404 container py-5' role='main'>
        <H1 class='text-center fw-bold mt-5' id='not-found'>La page que vous cherchez n'a pas été trouvée.</h1>           
        <div class='bold pt-5 text-center'><a href='<?php get_site_url()?>' class='button' alt="retour en page d\'accueil"><i class='fas fa-arrow-left'></i> Retour accueil</a></div>
    </main>
</div>
<?php get_footer(); ?>
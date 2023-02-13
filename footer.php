    <footer class='container-fluid'>
        <div class='container'>
            <div class='row'>
                <div class='col-12 col-md-4 fs-2 nav-footer order-md-last'><!--Réseaux sociaux-->
                    Menu Réseaux Sociaux
                </div>
                <div class='col-12 col-md-4 text-center text-md-start'><!--Menu pages légales-->
                    Menu Mentions Légales
                </div>
                <div class='col-12 col-md-4 text-center' id='copyrightinfo' >
                    <p class='mb-0'><a href='<?php echo get_home_url(); ?>' class='site-name fw-bold'><?php bloginfo('name'); ?></a> - Copyright © 2022</p>
                    <p class='akaleya'>Site éco-conçus par <a href='https://akaleya.fr' target='_blank' rel='noreferrer' class='fw-600'>Akaleya</a></p>
                </div>
            </div>
        </div>
    </footer>
    <script src='<?php echo get_template_directory_uri(); ?>/assets/js/nav-fixed.js' async defer></script>
    <script src='<?php echo get_template_directory_uri(); ?>/assets/js/burger.js' async defer></script>
    <?php wp_footer();?>
</body>
</html>
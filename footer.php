<footer class='site-footer container-fluid py-4 bg-white position-relative border-top'>
        <div class='container'>
            <div class='row'>
                <div class='col-12 col-md-4 fs-2 nav-footer order-md-last'><!--Réseaux sociaux-->
                    <?php wp_nav_menu( array( 'theme_location' => 'social-link-menu','menu_class' => 'menu-social-link p-0 d-flex flex-row justify-content-center justify-content-md-end','container' => 'nav' ) ); ?>
                </div>
                <div class='col-12 col-md-4 text-center text-md-start '><!--Menu pages légales-->
                    <?php wp_nav_menu( array( 'theme_location' => 'footer-menu','menu_class' => 'menu-footer p-0 fs-6','container' => 'nav' ) ); ?>
                </div>
                <div class='col-12 col-md-4 text-center' id='copyrightinfo' >
                    <p class='mb-0'><a href='<?php echo get_home_url(); ?>' class='site-name fw-bold text-decoration-none'><?php bloginfo('name'); ?></a> - Copyright © 2022</p>
                    <p class='akaleya'>Site éco-conçus par <a href='https://akaleya.fr' target='_blank' rel='noreferrer' class='fw-bold text-decoration-none'>Akaleya</a></p>
                </div>

                
            </div>
        </div>
    </footer>
    <script src='<?php echo get_template_directory_uri(); ?>/assets/js/nav-fixed.js' async defer></script>
    <script src='<?php echo get_template_directory_uri(); ?>/assets/js/burger.js' async defer></script>
    <?php wp_footer();?>
</body>
</html>
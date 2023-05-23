<?php

/** The header for our theme.
 * @package akaleya-small-header-theme 
 */ ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>

<body id='top' <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header id='header'>
        <section class='container-fluid' id='header-contact-nav'>
            <div class='container'>
                <div class='row'>
                    <!-- logo principal -->
                    <div class='col-9 col-lg-6 py-2 d-flex order-first' id='logo-first'>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class='display-inline-block my-auto'>
                            <?php if (function_exists('the_custom_logo')) {
                                the_custom_logo();
                            }
                            do_action('site_info'); 
                            ?>
                        </a>
                    </div>
                    <!-- Séparation -->
                    <div class='col-12 order-4 break-header'></div>
                    <!-- contact header -->
                    <div class=' col-12 col-lg-5 order-last order-lg-2' id='contact-header-container'>
                        <div class='zone-contact d-flex mx-auto'>
                            <?php do_action('contact_add_to_header'); ?>
                        </div>
                    </div>
                    <!-- navigation -->
                    <div class='col-3 col-lg-10 order-lg-last d-flex justify-content-end'>
                        <?php get_template_part('template-parts/navigation/navigation', 'burger'); ?>
                    </div>
                    <!-- logo menu lg down -->
                    <div class='col d-none d-lg-flex order-4'>
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class='display-inline-block my-auto'>
                            <div class='display-none' id='logo-menu-scroll'>
                                <?php do_action('site_name'); ?>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
                    
                </div>
            </div>
        </section>
        <!-- <div class='container-fluid d-flex d-lg-none pt-3 no-print' id='contact-header-bottom'>
            <div class='container'>
                <div class='row'>
                        <div class='col-10 mx-auto'>
                            <?php 
                            // if ( is_active_sidebar( 'contact-header' ) ) {
                            //     dynamic_sidebar('contact-header');
                            // } 
                            //do_action('contact_add_to_header');
                            ?>


                        </div>
                </div>
            </div>
        </div> -->
    </header>
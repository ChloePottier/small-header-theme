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
    <?php wp_head(); ?>
</head>

<body id='top' <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header>
        <section class='container-fluid bg-white' id='nav-burger'>
            <div class='container'>
                <div class='row'>
                    <div class='col-9 col-lg-6 py-2 d-flex'>
                    <?php if (function_exists('the_custom_logo')) {
                            the_custom_logo();
                        }
                        do_action('site_info'); 
                        ?>
                    </div>
                    <div class='col-6 d-none d-lg-flex'>
                    <?php //si administrable alors widget
                        if ( is_active_sidebar( 'contact-header' ) ) {
                            dynamic_sidebar('contact-header');
                        }
                    ?>
                    <!-- si pas administrable -->
                        <div class='zone-contact d-flex ms-auto'>
                            <?php do_action('contact_add_to_header'); ?>
                        </div>
                        
                    </div>
                    <div class='col-3 d-flex d-lg-none justify-content-end'>
                        <?php get_template_part('template-parts/navigation/navigation', 'burger'); ?>
                    </div>
                </div>
            </div>
        </section>
        <section class='container-fluid d-none d-lg-flex no-sticky' id='navbar'>
            <div class='container' id='navbarTop'>
                <div class='row py-2'>
                    <div class='col-12'>
                        <?php get_template_part('template-parts/navigation/navigation', 'top'); ?>
                    </div>
                </div>
            </div>
        </section>
        <div class='container-fluid d-flex d-lg-none pt-3 no-print'>
            <div class='container'>
                <div class='row'>
                        <div class='col-10 mx-auto'>
                            <?php 
                            // if ( is_active_sidebar( 'contact-header' ) ) {
                            //     dynamic_sidebar('contact-header');
                            // } 
                            do_action('contact_add_to_header');
                            ?>


                        </div>
                </div>
            </div>
        </div>
    </header>
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
        <section class='container-fluid' style='background:red;'>
            <div class='container'>
                <div class='row'>
                    <div class='col-6 py-2'>
                    <?php if (function_exists('the_custom_logo')) {
                            the_custom_logo();
                        }
                        //do_action('site_info'); 
                        ?>
                    </div>
                    <div class='col-6 d-none d-lg-flex'>
                        Contacts
                    </div>
                    <div class='col-6 d-flex d-lg-none justify-content-end'>
                        <?php get_template_part('template-parts/navigation/navigation', 'burger'); ?>
                    </div>
                </div>
            </div>
        </section>
        <section class='container-fluid  d-none d-lg-flex' id='navbar'>
            <div class='container' id='navbarTop'>
                <div class='row py-2'>
                    <?php get_template_part('template-parts/navigation/navigation', 'top'); ?>
                </div>
            </div>
        </section>
    </header>
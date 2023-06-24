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
        <section class='container-fluid' id='header-nav'>
            <div class='container'>
                <div class='row' id='row-header'>
                    <!-- logo principal -->
                    <div class='col-9 col-lg-6 py-2 py-lg-0 order-first d-flex' id='logo-first'>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class='display-inline-block my-auto' id='logo-link' aria-label='Logo <?php bloginfo('name'); ?>'>
                            <?php if (function_exists('the_custom_logo')) {
                                the_custom_logo();
                            }
                            do_action('site_info');
                            ?>
                        </a>
                    </div>
                    <!-- navigation -->
                    <div class='col-3 col-lg-10 order-lg-last d-flex justify-content-end' id='col-nav'>
                        <?php get_template_part('template-parts/navigation/navigation', 'burger'); ?>
                    </div>
                </div>
            </div>
        </section>
        <section class='container-fluid' id='header-contact'>
            <div class='container'>
                <div class='row'>
                    <!-- contact header -->
                    <div class=' col-12 col-lg-6 order-last order-lg-2' id='contact-header-container'>
                        <div class='zone-contact d-flex'>
                            <?php do_action('contact_add_to_header'); ?>
                        </div>
                    </div>
                </div>
            </div>

            <!-- logo menu lg down -->
            <div class='col d-none d-lg-flex order-4' id='logo-menu-lg-down'>
                <a href="<?php echo esc_url(home_url('/')); ?>" class='display-inline-block my-auto'>
                    <div class='display-none' id='logo-menu-scroll'>
                        <?php if (function_exists('the_custom_logo')) {
                            the_custom_logo();
                        }
                        do_action('site_info');
                        ?>
                    </div>
                </a>
            </div>
        </section>
    </header>



   
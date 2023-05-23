<?php
require 'hooks.php';
function wp_styles_scripts(){
    wp_enqueue_script('jquery');
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/bootstrap/bootstrap.min.css');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/assets/bootstrap/bootstrap.bundle.min.js', array('jquery','popper'), 1, true);
    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/assets/font-awesome/css/all.css');
    wp_enqueue_style('print', get_template_directory_uri() . '/assets/css/print.css', array(), '1.0', 'print');
    wp_enqueue_style('style', get_stylesheet_uri());
}

function small_header_theme_setup(){
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 300,
        'flex-width'  => true,
        'flex-height'  => true,
    ));
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_image_size('custom_logo_theme', 300, 80, array('left', 'center'));
}



function wpm_myme_types($mime_types){
    $mime_types['svg'] = 'image/svg+xml';
    $mime_types['webp'] = 'image/webp';
    return $mime_types;
}
function small_header_theme_site_info(){
    $name = get_bloginfo('name');
    $description = get_bloginfo('description');
    if ($name != '' or $description != '') :
        echo '<div class="bloginfo ps-2 my-auto">';
        if ($name != '') :
            echo '<h1 class="site-name">' . $name . '</h1>';
        endif;
        if ($description != '') :
            echo '<h2 class="site-slogan mb-0">' . $description . '</h2>';
        endif;
        echo '</div>';
    endif;
}

function register_nav(){
    register_nav_menus(
        array(
            'header-menu' => __('Header Menu'), //Nom du menu : 'Header' dans BO 
            'footer-menu' => __('Footer Menu'),
            'social-link-menu' => __('Social Link Menu'), // Nom du menu : 'Social Link' dans BO pour le style
        )
    );
}

function special_nav_class($classes, $item){
    if( in_array('current-menu-item', $classes) ){
            $classes[] = 'active-menu';
    }
    return $classes;
}

// Widget contact - si admi,istrable
function contact_widgets_init() {
    register_sidebar( array(
    
     'name' => 'Contacts en entête',
     'id' => 'contact-header',
     'before_widget' => '<div class="zone-contact d-flex mx-auto ms-lg-auto ">',
     'after_widget' => '</div>',
     ) );
     
     }
   
// contact si pas administrable
    function contact_header(){
        echo'<div class="contact-header ">
        <div class="d-flex mb-3">
            <div class="contact-icon pe-2 my-2 pt-2"><i class="fa-solid fa-location-dot"></i></div>
            <p class="pt-2 mb-0 ">2 rue du centre<br>
                39000 Lons-le-Saunier</p>
        </div>
        <div class="d-flex mb-3">
            <div class="contact-icon pe-2"><i class="fa-solid fa-phone"></i></div>
            <a href="tel:(+33)6 33 61 57 54" class="text-decoration-none ">06 00 01 02 03</a>
            <p></p>
        </div>
        <div class="d-flex mb-3">
            <div class="contact-icon pe-2"><i class="fa-solid fa-at"></i></div>
            <a href="'.get_site_url().'/contact" class="text-decoration-none ">mon@email.fr</a>
            <p></p>
        </div>
    </div>';
    }


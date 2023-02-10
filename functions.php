<?php
require 'hooks.php';
function wp_styles_scripts(){
    wp_enqueue_script('jquery');
    wp_enqueue_style('print', get_template_directory_uri() . '/assets/print.css', array(), '1.0', 'print');
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

function register_nav(){
    register_nav_menus(
        array(
            'header-menu' => __('Header Menu'), //Nom du menu : 'Header' dans BO (pour sub-menu.js)
            'subfooter-menu' => __('Footer Menu'),
            'footer-menu' => __('Social Link Menu'), // Nom du menu : 'Social Link' dans BO pour le style
        )
    );
}

function special_nav_class($classes, $item){
    if( in_array('current-menu-item', $classes) ){
            $classes[] = 'active-menu';
    }
    return $classes;
}
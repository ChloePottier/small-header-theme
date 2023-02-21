<?php
add_action('wp_enqueue_scripts', 'wp_styles_scripts');
add_action('after_setup_theme','small_header_theme_setup');

add_filter('upload_mimes', 'wpm_myme_types', 1, 1);
add_action('site_info', 'small_header_theme_site_info');

add_action('init', 'register_nav');
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);
// if (!current_user_can( 'manage_options' )) {
    add_filter('show_admin_bar', '__return_false');
// }
add_action( 'widgets_init', 'contact_widgets_init' );
add_action( 'contact_add_to_header', 'contact_header' );
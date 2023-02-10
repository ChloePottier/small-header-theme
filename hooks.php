<?php
add_action('wp_enqueue_scripts', 'wp_styles_scripts');
add_action('after_setup_theme','small_header_theme_setup');

add_filter('upload_mimes', 'wpm_myme_types', 1, 1);
add_action('init', 'register_nav');
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

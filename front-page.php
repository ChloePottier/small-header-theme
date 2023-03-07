<?php
/**
 * The frontpage template file
 * @package akaleya-small-header-theme 
 */

get_header();?>
<div id='primary' class='content-area container-fluid  position-relative'>
    <main id='main' class='site-main front-page container py-5' role='main'>
        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>
                <section class='row'>
                    <div class='col-12'>
                        <h1 class='pb-3'><?php the_title(); ?></h1>
                    </div>
                    <div class='col-12'>
                        <?php the_content(); ?>
                    </div>
                </section>
        <?php endwhile;
        endif;
        wp_reset_postdata(); ?>
    </main>
</div>


<?php get_footer(); ?>
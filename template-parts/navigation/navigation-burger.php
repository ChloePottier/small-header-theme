    <label class='burger text-center d-flex d-lg-none flex-column rounded-circle' id='burger' aria-label="Toggle navigation">
        <span class='burger-menu' id="menu">MENU</span>
        <span class='isclosed mx-auto' id='burger1'>&nbsp;</span>
        <span class='isclosed mx-auto' id='burger2'>&nbsp;</span>
        <span class='isclosed mx-auto' id='burger3'>&nbsp;</span>
    </label>
    <div class='menu-burger display-none px-auto' id='navigation'>
        <?php get_template_part('template-parts/navigation/navigation', 'items'); ?>
    </div>

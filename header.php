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
    <?php wp_body_open();?>
    <header>
        <section class='container-fluid'>
        <div class='container'>
            <div class='row'>
                <div class='col'>
                logo
                Slogan
                </div>
                <div class='col'>
                Contacts
                </div>
            </div>
        </div>
        </section>
        <div class='container-fluid'>
            <div class='container'>
                <div class="row">
                    <div class="col"></div>
                </div>
            </div>

        </div>
    </header>
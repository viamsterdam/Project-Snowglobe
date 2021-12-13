<?php

function postcard_after_for_submit($contact_data)
{
    $name = isset($_POST['postcard-name']) ? $_POST['postcard-name'] : '';
    $surname = isset($_POST['postcard-surname']) ? $_POST['postcard-surname'] : '';
    $email = isset($_POST['postcard-email']) ? $_POST['postcard-email'] : '';
    $message = isset($_POST['postcard-message']) ? $_POST['postcard-message'] : '';
    $image = isset($_POST['postcard-image']) ? $_POST['postcard-image'] : '';
    $token = isset($_POST['postcard-id']) ? $_POST['postcard-id'] : '';

    $post = array(
        'post_title' => $name . ' ' . $surname . ', ' . $email,
        'post_status' => 'publish',
        'post_type' => 'postcard',
        'meta_input' => array(
            'name' => $name,
            'surname' => $surname,
            'email' => $email,
            'message' => $message,
            'token' => $token
        ),
    );
    $post_id = wp_insert_post($post);
    set_post_thumbnail( $post_id, $image );
    //send email
    /*if(get_field('send_email')):
    $to = get_field('email_receiver');
    $subject = get_field('email_title');
    $body = get_field('email_content');
    $body .= '<br>';
    $body .= 'Name: '.$name.'<br>';
    $body .= 'Email: '.$email.'<br><br>';
    $body .= get_field('email_content_footer');
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $headers[] = 'Content-Type: text/html; charset=UTF-8';
    $headers[] = 'From: Fat Gladiator Website <noreply@snowglobe.com>' . "\r\n";
    wp_mail( $to, $subject, $body, $headers );
    endif;*/

}
add_action('wpcf7_before_send_mail', 'postcard_after_for_submit');



//add questionnaire meta box
function postcard_meta_box() {

    add_meta_box(
        'postcard-meta',
        __( 'Postcard', 'snowglobe' ),
        'postcard_meta_box_callback'
    );

}
function postcard_meta_box_callback( $post ) {
    $post_id = $post->ID;
    ?>
    <table class="results-table">
        <tbody>
            <tr>
                <td style="width: 220px;"><strong>Name</strong></td>
                <td><?php echo get_post_meta($post_id , 'name')[0]; ?></td>
            </tr>
            <tr>
                <td style="width: 220px;"><strong>Surame</strong></td>
                <td><?php echo get_post_meta($post_id , 'surname')[0]; ?></td>
            </tr>
            <tr>
                <td style="width: 220px;"><strong>Email</strong></td>
                <td><?php echo get_post_meta($post_id , 'email')[0]; ?></td>
            </tr>
            <tr>
                <td style="width: 220px;"><strong>Message</strong></td>
                <td><?php echo get_post_meta($post_id , 'message')[0]; ?></td>
            </tr>
        </tbody>
    </table>
    <style>
        .results-table td{
            padding: 5px;
        }
    </style>

    <?php

}
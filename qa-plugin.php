<?php

if (!defined('QA_VERSION')) {
	header('Location: ../../');
	exit;
}

qa_register_plugin_layer('layer.php', 'veryfied-users layer');

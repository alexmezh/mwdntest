<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="site-example">

    <h1>Example page</h1> <br/>

    <script src="/js/example.js"></script>
    <script>
        Example.embed({
            containerId: "videoBox",
            width: '960px',
            height: '540px'
        });
    </script>
    <div class="videoBox"></div>
</div>

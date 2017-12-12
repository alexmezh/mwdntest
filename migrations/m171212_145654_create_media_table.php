<?php

use yii\db\Migration;

/**
 * Handles the creation of table `media`.
 */
class m171212_145654_create_media_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('media', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'thumbnail' => $this->string(),
            'video_file_path' => $this->string(),
        ]);

        $this->batchInsert('media', [
            'name', 'thumbnail', 'video_file_path'
        ], [
            ['1511451439', 'https://go.vidoo.media/storage/images/templates/1511451439.jpg', 'https://production-rjl8yaeyaco9hqj0.netdna-ssl.com//storage/images/templates/1511451439.mp4'],
            ['1511188786', 'https://go.vidoo.media/storage/images/templates/1511188786.jpg', 'https://production-rjl8yaeyaco9hqj0.netdna-ssl.com//storage/images/templates/1511188786.mp4'],
            ['1510053177', 'https://go.vidoo.media/storage/images/templates/1510053177.jpg', 'https://production-rjl8yaeyaco9hqj0.netdna-ssl.com//storage/images/templates/1510053177.mp4']
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('media');
    }
}

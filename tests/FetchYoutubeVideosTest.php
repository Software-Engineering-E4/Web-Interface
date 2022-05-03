<?php
require "web/functions/fetchYoutubeVideos.php";
use PHPUnit\Framework\TestCase; 

class FetchYoutubeVideos extends TestCase
{
    public function testFetchYoutubeVideos(){

        require "dbconnectiontest.php";
        $result = fetchYoutubeVideos($mysql);
        $this->assertNotNull( 
            $result, 
            "variable is null or not"
        ); 
    }
}

?>
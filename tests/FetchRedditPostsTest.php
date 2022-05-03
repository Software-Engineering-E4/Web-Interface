<?php
require "web/functions/fetchRedditPosts.php";
use PHPUnit\Framework\TestCase; 

class FetchRedditPosts extends TestCase
{
    public function testFetchRedditPosts(){

        require "dbconnectiontest.php";
        $result = fetchRedditPosts($mysql);
        $this->assertNotNull( 
            $result, 
            "variable is null or not"
        ); 
    }
}

?>
<?php
require "web/functions/fetchTwitterPosts.php";
use PHPUnit\Framework\TestCase; 

class FetchTwitterPosts extends TestCase
{
    public function testFetchTwitterPosts(){

        require "dbconnectiontest.php";
        $result = fetchTwitterPosts($mysql);
        $this->assertNotNull( 
            $result, 
            "variable is null or not"
        ); 
    }
}

?>
<?php
use PHPUnit\Framework\TestCase; 

class DbConnection extends TestCase
{
    public function testDbConnection(){

        require "web\dbconnection.php";
        $this->assertNotNull( 
            $mysql, 
            "variable is null or not"
        ); 
    }
}

?>
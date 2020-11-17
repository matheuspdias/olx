<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('phone');            
            $table->string('avatar')->default('default.png')->nullable();
            $table->string('city')->nullable();            
        });
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->integer('id_user');            
            $table->string('title');
            $table->string('category');
            $table->string('description');
            $table->float('price');
            $table->string('cover')->default('default.png');
            $table->dateTime('created_at');        
        });
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('covercategory')->default('default.png');           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('announcements');
        Schema::dropIfExists('categories');
    }
}

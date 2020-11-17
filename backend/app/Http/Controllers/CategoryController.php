<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;

class CategoryController extends Controller
{
    private $LoggedUser;

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['getCategories']]);

        $this->LoggedUser = Auth()->user();
    }

    public function getCategories() {
        $array = ['error'];

        $categories = Category::all();

        foreach($categories as $ckey => $cvalue ) {
            $categories[$ckey]['covercategory'] = url('media/covercategory/'.$categories[$ckey]['covercategory']);
        }

        $array = $categories;

        return $array;
    }
}

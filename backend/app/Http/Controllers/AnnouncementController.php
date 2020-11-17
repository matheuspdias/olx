<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\Announcement;
use Illuminate\Support\Facades\DB;
use Image;

class AnnouncementController extends Controller
{
    private $loggedUser;

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['list', 'one']]);

        $this->loggedUser = auth()->user();
    }

    public function create(Request $request) {
        $array = ['error'=>''];
        $allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'category' => 'required',
            'description' => 'required',
            'price' => 'required'
        ]);

        if(!$validator->fails()) {
            $title = $request->input('title');
            $category = $request->input('category');
            $description = $request->input('description');
            $price = $request->input('price');
            $zipcode = $request->input('zipcode');
            $image = $request->file('cover');
        } else {
            $array['error'] = 'Preencha todos os campos!';
            return $array;
        }

        if($image) {
            if(in_array($image->getClientMimeType(), $allowedTypes)) {

                $filename = md5(time().rand(0,9999)).'.jpg';

                $destPath = public_path('media/covers');

                $img = Image::make($image->path())
                ->fit(600,450)
                ->save($destPath.'/'.$filename);

            } else {                
                $array['error'] = 'Arquivo não suportado!';
                return $array;
            }
        } else {
            $filename = 'default.png';
        }

        $announcement = new Announcement();
        $announcement->id_user = $this->loggedUser['id'];
        $announcement->title = $title;
        $announcement->category = $category;
        $announcement->description = $description;
        $announcement->price = $price;
        $announcement->zipcode = $zipcode;
        $announcement->created_at = date('Y-m-d H:i:s');
        $announcement->images = $filename;
        $announcement->save();

        return $array;
    }

    public function list(Request $request) {
        $array = ['error'=>''];

        $announcements = Announcement::orderBy('created_at', 'DESC')->get();

        foreach($announcements as $akey => $avalue ) {
            $announcements[$akey]['images'] = url('media/covers/'.$announcements[$akey]['images']);
        }

        $array['data'] = $announcements;

        return $array;
    }

    public function one($id) {
        $array = ['error' => ''];

        $announcement = DB::table('announcements')        
        ->join('users', 'announcements.id_user', '=', 'users.id')
        ->join('categories', 'announcements.category', '=', 'categories.id')
        ->select('announcements.*', 'categories.name', 'users.name', 'users.phone', 'users.city')
        ->where('announcements.id', $id)
        ->first();
        //$announcement = Announcement::find($id);

        if($announcement) {
            $announcement->images = url('media/covers/'.$announcement->images);
              
            
            $array['data'] = $announcement;

        } else {
            $array['error'] = 'Anúncio não existente';
        }

        return $array;
    }
}

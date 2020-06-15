<?php


namespace app\api\controller;


use app\model\CarBrand;

class Brand
{
    public function index(){
        $brand = new CarBrand();
        $data = $brand->getCarBrand();
        return json(restful(200,'success',$data));
    }
}
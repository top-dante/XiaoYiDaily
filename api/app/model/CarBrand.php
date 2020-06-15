<?php


namespace app\model;


use think\Model;

class CarBrand extends Model
{
    protected $pk= 'brand_id';

    /**
     * 查询所有品牌数据 存储缓存
     * @return mixed|object|\think\App|\think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    private function getBrand(){
        $data = cache('car_brand');
        if(!$data){
            $data = CarBrand::order('index','asc')->select();
            cache('car_brand',$data,0);
        }
        return $data;
    }

    /**
     * 查询品牌index索引并缓存
     * @return mixed|object|\think\App
     */
    private function dataIndex(){
        $data = cache('car_brand_index');
        if(!$data){
            $index= CarBrand::distinct(true)->field('index')->order('index','asc')->select()->toArray();
            foreach ($index as $item){
                $data[]=  $item['index'];
            }
            cache('car_brand_index',$data,0);
        }
        return $data;
    }

    /**
     * 返回品牌数据
     * @return array
     */
    public function getCarBrand(){
        return [
            'index'=>$this->dataIndex(),
            'brand'=>$this->getBrand()
        ];
    }
}
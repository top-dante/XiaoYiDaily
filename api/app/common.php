<?php
// 应用公共文件
function restful($code = 200, $msg = 'success', $data = [])
{
    return [
        'code' => $code,
        'msg' => $msg,
        'data' => $data,
        'timestamp' => time()
    ];
}
/**
 * 获取tree
 * @param $list
 * @param string $pk 主键
 * @param string $pid pid
 * @param string $child 子分类标识符 默认children
 * @param int $root
 * @return array
 */
function getTree($list, $pk = 'id', $pid = 'pid',$child = 'children', $root = 0)
{
    $tree = $packData = [];
    foreach ($list as $data) {
        $packData[$data[$pk]] = $data;
    }
    foreach ($packData as $key =>$val) {
        if ($val[$pid] == $root) {//代表跟节点
            $tree[] = & $packData[$key];
        } else {
            //找到其父类
            $packData[$val[$pid]][$child][] = & $packData[$key];
        }
    }
    return $tree;
}
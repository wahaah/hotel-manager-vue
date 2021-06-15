import md5 from 'js-md5'
// 将字符串进行md5加密的方法
function strToMd5(){
    // 加密后翻转再加密
    return md5(md5(str).split('').reverse().join(''));
}
export {
    strToMd5
}
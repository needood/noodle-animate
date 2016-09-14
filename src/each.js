function each(list,fn){
    for(var i = 0;i<list.length;i++){
        fn(list[i],i);
    }
    return list;
}

module.exports = each;

/**
 * Created by Jared on 16/3/10.
 */
/****
 *
 *
 *     转换数据
 *     todo 提取函数
 *
 */
export const commonWhite = state => {
  let list = []
  if(state.whitelist.wist.length>0){
    var con=_.groupBy(state.whitelist.wist, function (item) {
      return  item.create_time
    })
    var keys = Object.keys(con)
    var item ={}
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var date = new Date(parseInt(key)*1000);
      var year = date.getFullYear();
      var month =date.getMonth();
      var day = date.getDate();
      item.time =year+'年'+(month+1)+'月'+day+'日';
      item.items = con[key]
      list.push(item)
    }

    return list
  }else{
    return state.whitelist.wist;
  }

}

export const commonBlack = state => {
  let list = []
  if(state.whitelist.blackList.length>0){
    var con=_.groupBy(state.whitelist.blackList, function (item) {
      return  item.create_time
    })
    var keys = Object.keys(con)
    var item ={}
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var date = new Date(parseInt(key)*1000);
      var year = date.getFullYear();
      var month =date.getMonth();
      var day = date.getDate();

      item.time =year+'年'+(month+1)+'月'+day+'日';
      item.items = con[key]
      list.push(item)
    }
    return list

  }else{
    return state.whitelist.blackList;
  }

}

export const commonRequest = state => {
  let list = []
  if(state.whitelist.requestList.length>0){
    var con=_.groupBy(state.whitelist.requestList, function (item) {

      return  item.create_time
    })
    var keys = Object.keys(con)

    var date ={};
    var year,month,day;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var item ={}
      date = new Date(parseInt(key)*1000);
      year = date.getFullYear();
      month =date.getMonth();
      day = date.getDate();

      item.time =year+'年'+(month+1)+'月'+day+'日';
      item.items = con[key];
      list.push(item)

    }
    return list
  }else{
    return state.whitelist.requestList;
  }

}

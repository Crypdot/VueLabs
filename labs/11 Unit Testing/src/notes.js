var notes = (function() {
  var list = [];
  return {
    add: function(note) {
      if (note) {
        if(!note.replace(/\s/g, '').length){return false}
        var item = {timestamp: Date.now(), text: note};
        list.push(item);
        return true;
      }
      return false;
    },
    remove: function(index) {
      if(index >= list.length){return false}
      list.splice(index, 1);
      return true;
    },
    count: function() {
      return list.length;
    },
    list: function() {
      if(list.length !== 0){return list}
      return false;
    },
    find: function(str) {
      for(var i = 0; i < list.length; i++){
        if(list[i].text === str){return i}
      }
      return false
    },
    clear: function() {
      if(list === null){return false;}
      list.splice(0, list.length);
      return true;
    }
  }
}());
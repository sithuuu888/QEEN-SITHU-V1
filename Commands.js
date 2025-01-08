var commands = []:

function cmd (info, func) ‹
   var data = info;
   data. function = func;
   if (Idata.dontAddCommandList) data.dontAddCommandList = false;
   if (linfo.desc) info.desc = **:
   if (idata.fromMe) data.fromMe = false;
   if (linfo.category) data.category = 'misc':
   if(linfo. filename) data. filename = "Not Provided";
   commands .push(data):
   return data;
}
module.exports = ‹
  cmd,
  AddCommand: cmd,
  Function: cmd,
  Module: cmd,
  commands,
    }:

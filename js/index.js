const { useEffect, useState, useCallback, useRef } = React
const { Table, Tag, Select, Button, message, Slider, Icon, Tooltip, InputNumber, Drawer, Modal, Form, Row, Col, Input, Timeline, Typography, Alert } = antd
const { Option } = Select
const { QuestionCircleOutlined } = icons
const { Paragraph } = Typography
const MyApp = () => {
var _0xodM='jsjiami.com.v7';const _0x81ad95=_0x328d;(function(_0x3a0f73,_0x1633d2,_0x29880e,_0x1a6141,_0x29dd5f,_0x3dad85,_0x4bb77c){return _0x3a0f73=_0x3a0f73>>0x6,_0x3dad85='hs',_0x4bb77c='hs',function(_0x2f87af,_0x5a56ae,_0x148fe5,_0x5c536c,_0x56c2bd){const _0x333465=_0x328d;_0x5c536c='tfi',_0x3dad85=_0x5c536c+_0x3dad85,_0x56c2bd='up',_0x4bb77c+=_0x56c2bd,_0x3dad85=_0x148fe5(_0x3dad85),_0x4bb77c=_0x148fe5(_0x4bb77c),_0x148fe5=0x0;const _0x10b065=_0x2f87af();while(!![]&&--_0x1a6141+_0x5a56ae){try{_0x5c536c=-parseInt(_0x333465(0x1c9,'oT(]'))/0x1+parseInt(_0x333465(0x156,'qi0X'))/0x2+-parseInt(_0x333465(0x1b3,'$Hvv'))/0x3+parseInt(_0x333465(0x1b5,'J%[]'))/0x4+parseInt(_0x333465(0x27d,'Y]w('))/0x5*(parseInt(_0x333465(0x1d9,'3erX'))/0x6)+parseInt(_0x333465(0x2aa,'zAiK'))/0x7+-parseInt(_0x333465(0x230,'aONx'))/0x8;}catch(_0x1727db){_0x5c536c=_0x148fe5;}finally{_0x56c2bd=_0x10b065[_0x3dad85]();if(_0x3a0f73<=_0x1a6141)_0x148fe5?_0x29dd5f?_0x5c536c=_0x56c2bd:_0x29dd5f=_0x56c2bd:_0x148fe5=_0x56c2bd;else{if(_0x148fe5==_0x29dd5f['replace'](/[lMRGLtFBDJPxEyKIf=]/g,'')){if(_0x5c536c===_0x5a56ae){_0x10b065['un'+_0x3dad85](_0x56c2bd);break;}_0x10b065[_0x4bb77c](_0x56c2bd);}}}}}(_0x29880e,_0x1633d2,function(_0x3f59d1,_0x1146b5,_0x167c4d,_0x41b8ee,_0x2d0693,_0x437dba,_0x33f100){return _0x1146b5='\x73\x70\x6c\x69\x74',_0x3f59d1=arguments[0x0],_0x3f59d1=_0x3f59d1[_0x1146b5](''),_0x167c4d='\x72\x65\x76\x65\x72\x73\x65',_0x3f59d1=_0x3f59d1[_0x167c4d]('\x76'),_0x41b8ee='\x6a\x6f\x69\x6e',(0x18fe78,_0x3f59d1[_0x41b8ee](''));});}(0x3200,0x5f6f8,_0x1dba,0xca),_0x1dba)&&(_0xodM=_0x1dba);const _0x201241=(function(){let _0x1dfeb7=!![];return function(_0x53dbfe,_0x82c7c){const _0x588db2=_0x1dfeb7?function(){if(_0x82c7c){const _0x4cf741=_0x82c7c['apply'](_0x53dbfe,arguments);return _0x82c7c=null,_0x4cf741;}}:function(){};return _0x1dfeb7=![],_0x588db2;};}()),_0x5446af=_0x201241(this,function(){const _0x52fb13=_0x328d,_0xdb4b96={'IaQYq':_0x52fb13(0x280,'$oCg')};return _0x5446af[_0x52fb13(0x1ae,'aD)4')]()['search'](_0xdb4b96[_0x52fb13(0x24f,'aONx')])[_0x52fb13(0x24a,'G^74')]()['constructor'](_0x5446af)[_0x52fb13(0x1d8,'vIIi')](_0xdb4b96['IaQYq']);});_0x5446af();const _0x2b49c5=(function(){let _0x741016=!![];return function(_0x4781ea,_0x188203){const _0x4cca24=_0x741016?function(){if(_0x188203){const _0x310e96=_0x188203['apply'](_0x4781ea,arguments);return _0x188203=null,_0x310e96;}}:function(){};return _0x741016=![],_0x4cca24;};}()),_0x4f7705=_0x2b49c5(this,function(){const _0x3f1752=_0x328d,_0x523e51={'dhLwc':function(_0x4f3ad8,_0x1eeb49){return _0x4f3ad8!=_0x1eeb49;},'gJxpp':function(_0x4840ef,_0x5daecb){return _0x4840ef<_0x5daecb;},'GZVwz':function(_0x362c14,_0x50967c){return _0x362c14==_0x50967c;},'QAcBN':function(_0x3dc9b6,_0xde958e){return _0x3dc9b6+_0xde958e;},'thawp':function(_0x1e1f3f,_0x5192b5,_0x4591f0,_0xf0a2ec){return _0x1e1f3f(_0x5192b5,_0x4591f0,_0xf0a2ec);},'NFuDm':function(_0x615e0e,_0x459419,_0x22feff,_0x2229cf){return _0x615e0e(_0x459419,_0x22feff,_0x2229cf);},'PsnKt':function(_0x39eebd,_0x2cee92){return _0x39eebd!==_0x2cee92;},'VXjwP':function(_0x4ea88b,_0x452353){return _0x4ea88b===_0x452353;},'RXLBb':'object','AhDKJ':'function','DyQdO':'[IWraamMdJzDaHmLvQAHylCIWjANvIY]','BVYKo':_0x3f1752(0x258,'(BOU'),'DCTxo':function(_0x1fec51,_0x5d5e11,_0x3eeede,_0x4f4c0e){return _0x1fec51(_0x5d5e11,_0x3eeede,_0x4f4c0e);},'ktHJx':function(_0x39e33a,_0x4fa74f){return _0x39e33a||_0x4fa74f;},'WCgUs':function(_0x4e6556,_0x1a483f){return _0x4e6556===_0x1a483f;},'iDIRs':function(_0x5b4bac,_0x4e5a35){return _0x5b4bac-_0x4e5a35;},'mHgbn':function(_0x45caba,_0x1daa7d){return _0x45caba!==_0x1daa7d;},'GnTcf':function(_0x3c350d,_0x1c1bff){return _0x3c350d===_0x1c1bff;},'dAgGJ':_0x3f1752(0x1f1,'aD)4')},_0x334ff8=_0x523e51[_0x3f1752(0x107,'G^74')](typeof window,'undefined')?window:_0x523e51[_0x3f1752(0x1ad,'roT0')](typeof process,_0x523e51['RXLBb'])&&typeof require===_0x523e51[_0x3f1752(0x246,'#ZdR')]&&_0x523e51['VXjwP'](typeof global,'object')?global:this,_0x5a5092=new RegExp(_0x523e51[_0x3f1752(0x1ed,'ua5L')],'g'),_0x2f2d5f=_0x523e51[_0x3f1752(0x18b,'(c[U')][_0x3f1752(0x1f8,'qi0X')](_0x5a5092,'')[_0x3f1752(0x10b,'Yegb')](';');let _0x1bb568,_0x4e92c7,_0x4bcfb7,_0x34f518;const _0x36ecb5=function(_0x4c9fbf,_0x240f24,_0x48b32c){const _0x2b5bb6=_0x3f1752;if(_0x523e51[_0x2b5bb6(0x1cf,'JZDy')](_0x4c9fbf[_0x2b5bb6(0x148,'3erX')],_0x240f24))return![];for(let _0x249523=0x0;_0x249523<_0x240f24;_0x249523++){for(let _0x541517=0x0;_0x523e51['gJxpp'](_0x541517,_0x48b32c[_0x2b5bb6(0x21d,'C$q3')]);_0x541517+=0x2){if(_0x523e51['GZVwz'](_0x249523,_0x48b32c[_0x541517])&&_0x4c9fbf[_0x2b5bb6(0x27c,'ayET')](_0x249523)!=_0x48b32c[_0x523e51[_0x2b5bb6(0x143,'#ZdR')](_0x541517,0x1)])return![];}}return!![];},_0x503a56=function(_0x37775c,_0x38a6e2,_0x7168d8){const _0x2e6439=_0x3f1752;return _0x523e51[_0x2e6439(0x27a,'3erX')](_0x36ecb5,_0x38a6e2,_0x7168d8,_0x37775c);},_0x4fbd5f=function(_0x480774,_0x4ecf26,_0xa2c83b){const _0x3a2e2c=_0x3f1752;return _0x523e51[_0x3a2e2c(0x217,'VLkV')](_0x503a56,_0x4ecf26,_0x480774,_0xa2c83b);},_0x2793bc=function(_0x4d97df,_0x16ddcc,_0xeb5417){return _0x4fbd5f(_0x16ddcc,_0xeb5417,_0x4d97df);};for(let _0x1dbb70 in _0x334ff8){if(_0x36ecb5(_0x1dbb70,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){_0x1bb568=_0x1dbb70;break;}}for(let _0x26b8c9 in _0x334ff8[_0x1bb568]){if(_0x523e51[_0x3f1752(0x278,'roT0')](_0x2793bc,0x6,_0x26b8c9,[0x5,0x6e,0x0,0x64])){_0x4e92c7=_0x26b8c9;break;}}for(let _0x473365 in _0x334ff8[_0x1bb568]){if(_0x523e51[_0x3f1752(0x2ab,'oT(]')](_0x4fbd5f,_0x473365,[0x7,0x6e,0x0,0x6c],0x8)){_0x4bcfb7=_0x473365;break;}}if(!('~'>_0x4e92c7))for(let _0x3cba7d in _0x334ff8[_0x1bb568][_0x4bcfb7]){if(_0x523e51[_0x3f1752(0x217,'VLkV')](_0x503a56,[0x7,0x65,0x0,0x68],_0x3cba7d,0x8)){_0x34f518=_0x3cba7d;break;}}if(!_0x1bb568||!_0x334ff8[_0x1bb568])return;const _0x257372=_0x334ff8[_0x1bb568][_0x4e92c7],_0x458563=!!_0x334ff8[_0x1bb568][_0x4bcfb7]&&_0x334ff8[_0x1bb568][_0x4bcfb7][_0x34f518],_0x3299c1=_0x523e51['ktHJx'](_0x257372,_0x458563);if(!_0x3299c1)return;let _0x3cdc13=![];for(let _0x463e51=0x0;_0x523e51[_0x3f1752(0x16c,'nZG6')](_0x463e51,_0x2f2d5f[_0x3f1752(0x12e,'KvFY')]);_0x463e51++){const _0x2bb0aa=_0x2f2d5f[_0x463e51],_0x2c4331=_0x523e51['WCgUs'](_0x2bb0aa[0x0],String[_0x3f1752(0x1b7,'1j93')](0x2e))?_0x2bb0aa[_0x3f1752(0x1c6,'JZDy')](0x1):_0x2bb0aa,_0x3fe492=_0x523e51['iDIRs'](_0x3299c1['length'],_0x2c4331['length']),_0x27c31c=_0x3299c1[_0x3f1752(0x23a,'pj(8')](_0x2c4331,_0x3fe492),_0x180d0a=_0x523e51[_0x3f1752(0x1f0,'pj(8')](_0x27c31c,-0x1)&&_0x523e51['GnTcf'](_0x27c31c,_0x3fe492);_0x180d0a&&((_0x523e51[_0x3f1752(0x162,'luR$')](_0x3299c1[_0x3f1752(0x1a1,'roT0')],_0x2bb0aa[_0x3f1752(0x169,'zSU!')])||_0x523e51[_0x3f1752(0x157,'9wJS')](_0x2bb0aa[_0x3f1752(0x1a9,'C$q3')]('.'),0x0))&&(_0x3cdc13=!![]));}if(!_0x3cdc13){const _0xd073f2=new RegExp(_0x3f1752(0x119,'zAiK'),'g'),_0x1f2a81=_0x523e51[_0x3f1752(0x154,'Wr*C')][_0x3f1752(0x2af,'7kvq')](_0xd073f2,'');_0x334ff8[_0x1bb568][_0x4bcfb7]=_0x1f2a81;}});_0x4f7705();const _0x3bf621=(function(){let _0x17026e=!![];return function(_0x53cd3b,_0x3a0f42){const _0x33d8c8=_0x17026e?function(){const _0x54da49=_0x328d;if(_0x3a0f42){const _0x49f389=_0x3a0f42[_0x54da49(0x1ef,'#@Fl')](_0x53cd3b,arguments);return _0x3a0f42=null,_0x49f389;}}:function(){};return _0x17026e=![],_0x33d8c8;};}());(function(){const _0x20991d=_0x328d,_0x2883d4={'ipHLZ':_0x20991d(0x20b,'Mj&p'),'SKBEO':'\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','QxOQt':function(_0x2004a9,_0x93bdb){return _0x2004a9(_0x93bdb);},'Kmqdm':'chain','XKRXc':function(_0x1f679c,_0x1b1008){return _0x1f679c+_0x1b1008;},'uvDRN':_0x20991d(0x26f,'(BOU'),'uaTed':function(_0x6121c2){return _0x6121c2();}};_0x3bf621(this,function(){const _0x4b6bd1=_0x20991d,_0x1b558b=new RegExp(_0x2883d4['ipHLZ']),_0x31e4c1=new RegExp(_0x2883d4[_0x4b6bd1(0x15c,'aONx')],'i'),_0x3928a5=_0x2883d4[_0x4b6bd1(0x244,'$Hvv')](_0x8b0149,_0x4b6bd1(0x21a,'&iAe'));!_0x1b558b[_0x4b6bd1(0x174,'$Hvv')](_0x3928a5+_0x2883d4[_0x4b6bd1(0x227,'Wr*C')])||!_0x31e4c1[_0x4b6bd1(0x292,'(BOU')](_0x2883d4['XKRXc'](_0x3928a5,_0x2883d4['uvDRN']))?_0x2883d4['QxOQt'](_0x3928a5,'0'):_0x2883d4['uaTed'](_0x8b0149);})();}());const _0x9eeee=(function(){let _0x28f6cc=!![];return function(_0x3f8298,_0x4a1e9){const _0x6850e7=_0x28f6cc?function(){if(_0x4a1e9){const _0x36a669=_0x4a1e9['apply'](_0x3f8298,arguments);return _0x4a1e9=null,_0x36a669;}}:function(){};return _0x28f6cc=![],_0x6850e7;};}()),_0x508f5f=_0x9eeee(this,function(){const _0x18616e=_0x328d,_0x56063b={'ESWeq':function(_0x4187b7,_0x111fe1){return _0x4187b7===_0x111fe1;},'OHoAL':_0x18616e(0x194,'EymY'),'qosco':function(_0x584b29,_0x2d0bc6){return _0x584b29===_0x2d0bc6;},'TmqLU':_0x18616e(0x1a2,'Czht'),'djUbG':function(_0x14ac87,_0x3257ca){return _0x14ac87===_0x3257ca;},'eviss':'log','nKEaa':'warn','CfxYM':_0x18616e(0x127,'!2c9'),'clvun':'error','oFRDF':_0x18616e(0x23d,'XuKE'),'jRGrp':_0x18616e(0x1ac,'uJ9)'),'xyvSu':'trace','dVpqO':function(_0x3877e0,_0x2d9b0d){return _0x3877e0<_0x2d9b0d;}},_0x4ab258=typeof window!==_0x18616e(0x13a,'(BOU')?window:_0x56063b[_0x18616e(0x1ff,'Tc18')](typeof process,_0x56063b[_0x18616e(0x232,'#@Fl')])&&_0x56063b[_0x18616e(0x22c,'XuKE')](typeof require,_0x56063b[_0x18616e(0x288,'!2c9')])&&_0x56063b[_0x18616e(0x171,'itrC')](typeof global,_0x56063b[_0x18616e(0x190,'$oCg')])?global:this,_0x3c5bd2=_0x4ab258[_0x18616e(0x1bc,'uJ9)')]=_0x4ab258[_0x18616e(0x29f,'G^74')]||{},_0x578035=[_0x56063b['eviss'],_0x56063b[_0x18616e(0x13c,'Yegb')],_0x56063b[_0x18616e(0x181,'C$q3')],_0x56063b[_0x18616e(0x1e4,'aD)4')],_0x56063b[_0x18616e(0x2a3,'$Hvv')],_0x56063b[_0x18616e(0x11f,'Y]w(')],_0x56063b['xyvSu']];for(let _0x2bddb1=0x0;_0x56063b[_0x18616e(0x187,'J%[]')](_0x2bddb1,_0x578035['length']);_0x2bddb1++){const _0x38df27=_0x9eeee[_0x18616e(0x20c,'qi0X')][_0x18616e(0x165,'ayET')][_0x18616e(0x1bb,'@i2n')](_0x9eeee),_0x926f37=_0x578035[_0x2bddb1],_0x4f7ca9=_0x3c5bd2[_0x926f37]||_0x38df27;_0x38df27[_0x18616e(0x208,'EymY')]=_0x9eeee['bind'](_0x9eeee),_0x38df27[_0x18616e(0x22e,'zSU!')]=_0x4f7ca9['toString'][_0x18616e(0x1c4,'Wr*C')](_0x4f7ca9),_0x3c5bd2[_0x926f37]=_0x38df27;}});_0x508f5f();const [list,setLIist]=useState([]),[url,setUrl]=useState(''),[time,setTime]=useState(localStorage[_0x81ad95(0x1fb,'C$q3')]||'4h'),[wave,setWave]=useState(localStorage[_0x81ad95(0x29b,'XOYR')]||0x5),[options,setOptions]=useState({}),[iskLinel,setIskLinel]=useState(localStorage[_0x81ad95(0x121,'Tc18')]||'1'),[open,setOpen]=useState(![]),[show,setShow]=useState(![]),[logShow,setLogShow]=useState(![]),[losss,setLosss]=useState(localStorage[_0x81ad95(0x2ad,'luR$')]||0x32),[bfint,setBfint]=useState(localStorage[_0x81ad95(0x123,'3erX')]||0x1),[series,setSeries]=useState([]),[strict,setStrict]=useState(localStorage[_0x81ad95(0x277,'zAiK')]||'1'),[seriesIndex,setSeriesIndex]=useState(-0x1),[spacingThreshold,setSpacingThreshold]=useState(localStorage[_0x81ad95(0x1eb,'G^74')]||0xa),[spacingSlopeld,setSpacingSlopeld]=useState(localStorage[_0x81ad95(0x202,'aONx')]||0x5),[form]=Form[_0x81ad95(0x145,'roT0')](),chart=useRef(null),klines=_0x81ad95(0x252,'XuKE'),exchangeInfo=_0x81ad95(0x1b1,'qi0X'),rrr=_0x81ad95(0x2b2,'XOYR'),premiumIndex=_0x81ad95(0x18d,'2ohQ');let chartDom=null,ws=null;function isEmpty(_0x473a28){const _0x1175ad=_0x81ad95,_0x5ca9c2={'vkvtg':_0x1175ad(0x12a,'9wJS'),'zBwjO':function(_0x52861c,_0x4190f2){return _0x52861c===_0x4190f2;},'sBYEY':function(_0x5e1b6d,_0x29fe64){return _0x5e1b6d!==_0x29fe64;},'fxpnI':function(_0x31914f,_0x4337c0){return _0x31914f===_0x4337c0;},'NSvgY':function(_0x3561a3,_0x1f820c){return _0x3561a3==_0x1f820c;}};if(Array['isArray'](_0x473a28)||typeof _0x473a28===_0x5ca9c2[_0x1175ad(0x1d7,'itrC')])return _0x5ca9c2[_0x1175ad(0x25b,'3erX')](_0x473a28['length'],0x0);else{if(_0x5ca9c2[_0x1175ad(0x12d,'b^)O')](typeof _0x473a28,'object')&&_0x5ca9c2[_0x1175ad(0x1b2,'PzK@')](_0x473a28,null))return _0x5ca9c2[_0x1175ad(0x19c,'(c[U')](Object[_0x1175ad(0x193,'zSU!')](_0x473a28)[_0x1175ad(0x275,'qATH')],0x0);else{if(_0x5ca9c2[_0x1175ad(0x1d5,'G^74')](typeof _0x473a28,_0x1175ad(0x1b6,'(c[U')))return!![];else![];}}}async function getKlineData(_0x3165c3){const _0x4b0853=_0x81ad95,_0x3d4f39={'OWuCJ':function(_0x479931,_0x434914){return _0x479931+_0x434914;},'MOmAY':_0x4b0853(0x15d,'EymY'),'JwHXn':function(_0x251f1b,_0x340ee4){return _0x251f1b<_0x340ee4;}},_0x5a04f0=_0x3d4f39[_0x4b0853(0x226,'(BOU')](_0x3d4f39[_0x4b0853(0x175,'@i2n')](klines,_0x3165c3)+'&interval=',time)+_0x3d4f39[_0x4b0853(0x270,'JZDy')],_0x52d5ba=await axios[_0x4b0853(0x26a,'nZG6')](_0x5a04f0);if(_0x3d4f39['JwHXn'](_0x52d5ba[_0x4b0853(0x112,'(BOU')]['length'],0xc8)&&iskLinel)return[];let _0x2255cd=_0x52d5ba[_0x4b0853(0x137,'Yegb')];return _0x2255cd;}function _0x1dba(){const _0x4d73f7=(function(){return[_0xodM,'FRjBsDjtEMifxKamKiRy.GlcoLmKMF.FGyvI7DJP==','ndldG8o0WQ0','D8oUcmkfW4Pi','a0xcHhq3xmoyqCkiW74an8oq','qrpcVLbZ','WOFcHqXhW7S','txGbkGq','W7pdUmk9W6tdUeK','ACoUfSkoW59dpW','t8oVnCkBW44','wmkOWPNcQHJdQCkjWPVcUa','W7zMW4ldICkeW6CfW63dUmomWPX9W646rCkrdCkWW4S2hJ/dMItdKvb7rKxdUwyXjIRcG34nWRxcJSo+FHRcKfK','WQxdJCkvnui','WRldJCkFc3tdK8ocsa','W5RcUNddOZa','bmkRoGq5WQK','nmoFwWXY','aJbOB0XgWPSiWOpdVa','WQjFo2mT','Dv9+dg4','WRBcUh91WQC','eSkyW67dHfq','W7Oyh1HS','mCoKwWHp','W6ZdQ8kzW4/dHG','WO8eW7DIWRi','k8keW4pdV2S','oCkpW4tdOuG','W4tdOw/dOCkF','WR3cMHj+W7ZdQeZdLmoF','wJCfWRq','WRhdUCo8e8o+','W6P9W6xdJCkfWRreWQu','omoTamoxWOKtAq','WOxcOgH3WPy','AstdLwvS','W4BcJ8krDtm','ArZdHHvhimkqw8kOW50Gl8oeW7/dNuZdTM3dI38zWPtcRSoDWO3cTmkxWOlcJgbJidS','ftTNyWK','xXFdHq','W504WOyMWOa','a0pdMa','sCkOWR3cLGi','lxFdTs8P','wmkOWPNcRbZdUmkn','WOFcJa19W6xdSKddLW','wmk0WOdcHWFdSq','kSkoW4xdONO','WOxcIh87DYBdJmoDvwZdUheD','W57cIgi','kSk9W70kWOe','eSkwW7yw','iCoHrrnElte','eSk/W5edWPa','WP7dJh1GWPmX','5AE656Ug5OYd5yM36iwx6ykJ5yMm6kcy','WOqLWRe','W7RdG8kNW6ZdMa','C8otW6ddOCoECa','5Pwr5O255lM/6lEQ5lQs6k60566vW55kWPC','W5tcH8kGuJe','bmoXiNZcRW','xmo6nhvibbTZW6T5fmkX','WOjSox4bWPacW5m6pSoL','Bd7cG1W','bSojW6NcS8oq','utqBWRddVSot','jSo1qWa','w8ojWQ0QWRtcNxhdIZ54WQ8','WOBdGmkRq3Tb','sZGvWRddU8ooBCkxiG','mCoGrqHvja','lmoFCGbA','WOJcMq/dKgBdVCkB','sWNcQ0LY','m8o4p33cRq','WPBcLru','W7RcQLldGdu','nmo7wXrwjG','eCovnvZcHG','h8kzW6qy','W4NcQN7dKZL0WR0','rSkSWPu','tCobWR52W6q','jmknW4ldQ3Pn','W4C8WPWbWQO','o8krW4hdRMfjtG','h14K','d8ktqrBdNq','WOOpW5rjWRm','A8oFW6pdOW','W4/dTXLLbG','W5NcR37dPY8','WPeOWPhcTvdcNSoZW5y','WR7cNGjIW7JdVvFdJW','r8kKWOpcGa','fYeCWQ1w','WOFdNmkIvhDi','WRBcGrZcQSoKWQSPyCkkq8kGWOFdOa','WQRdLLTQWPS','W5VcJCkxFWf3','lCo2xqrynW','W544fufVma','vKb5jh8','W6LmW6VdSN8','WPG6WRKKWQacqCkpWR/cOG','5PAX5PI05PUH5AAKWRBNQzVLPPFMJkFLIR8','WOfOlNuk','bCkLAs8','neJcRCorW6S','zK0KlG0','W7ldQCkgthm0W7pdPSkUWP4','rfdcGHdcQSkq','iuJcSmokW7zvW5RdHCon','gSk6FaNdNSoG','ieldMHK2','W4LRW4ddLfu','rmojWReKWQxcHG','W4Kilx5E','5AsF5AwK5O245yI/','cmkaEden','vtzZEa','W50aW6nhhq','W4O0hubPjW','WOlcJthdGgi','dmkKaqek','mCoLDLO','WOFdMCoLl8onW54Yh8oa','WPtdMCoIfa','WRnDW7ddLY8','WQRcUrBdQLe','56Uc5AwL5O+R5yII','W7Ksc01i','xCook8kxW4K','ea1NFbS','W6xdRCkZyea','W7veW4ldHLe','W5mMW41TpW','W6ZdVbPcfq','b8o2W5/cHSon','kCktvbSQ','WRFdG8k3B1u','B2mumqu','dmoiW4tcJmoT','dv3dVtaC'].concat((function(){return['W4SOffDLlG','WRKIW5a','W7ddLSkowfG','W4ymW7DUg3C','WOiIWRBcIu3cGSoVW4i','W4VcL3FdKs8','WRNcQIldKN0','W5q0f1j+kG','kSoGCf7cImoid8k7lMtcOKNdTGWPW5VcRwmruSo+W4GBWPiiC2uanCknW7eKjCoYox8aWOGLCJeGWRTxWQW','BCoxW6BdLSoe','pSkyW4NdG00','WONdQSkJpKO','5AAe5AsM5OYK5yQU','mmoXuXryjG','q8ojWQyW','W5e0WROSWQOc','WPZcMq/dINFdU8kzAqT9','aCoJva1o','W5VcVg/dKZ9JWRXGWPldQ0aVfa','W4BdLMNdNCks','ph04veK','rbFdMtHN','W5VcH8kkAW','WP3cHaVdT1S','W5BcISkk','WRldRCkPnfi','W6tdOCkAEMmfW7pdUW','iIFdMmoFWQS','W5dcVhxdSIjU','WOmYWQZcOLBcNSoYW58','WQpdQCkhyhi','kSkymaua','hSkyWOZcNWpdSSkJ','otPkxcq','W6ddLLW','cCkJBduyqW','WP3dI8kRu2bRW4e','WO4wW5DHWQy','haSiWPRcJG','FINdNMPI','W6RcGxhdOGy','WQWVW7bSWPaJi10','W5JcUg/dTa','rqxdLHPy','W6/dH1ZdQ8kIWQC+fSk2D8kGWQ3cOrGMdZq8W65rcq5mvdtdICkpnexdKSk6s8oPWRn2mSokneDlvuPay8kZ','jY8DWRZcGW','W5JcHmkGvSkpWP8Tj8oTyZP5','BM8MgW8','WQBcSCohgsrCWRxdRSkSWR/dH1BdTG','WO7cKH/dVhtdSCkyyGS','r0/cJe/dMCoiydKCxSokgW','nSo7CqHdjIe','W7RdJCkrW4JdPq','r8kIWP7cLHS','WP5JW6VdSa','AsFdKNvOWPhdPa','WO3dQ8kAw1O','W7xdOSkn','W5RcICkb','lmoXohNcVeK','mmkwqtJdOq','FSoAjCkJW4O','gCkswsxdMW','eqKvWO4','W7NdOCko','WRtdNSoMFHG','aCkBAqa5','W7ldSG5rjW','nMddNHWPymo8smokWPNcL8kd','W7ddTmkJW64','r8kOWOpcGHZdTq','kKRdHY48nSohW5G','WPisW5nTWO8','aaujWOn5xW','WQpdMSodAH4','WPbLjhKaWPG','tvJcJuxdRSoi','y8oIamkAW78','uSk+WPtcOdK','WOBcIGHMW6O','A39Miem','lCoSjvJcQG','hSkLiHCQ','btbXAqbE','E8ozWP/cVZ0CbvjnDfSQW64','WQPDigG7','W6P9W7ddKmkpWRHo','rXJdHIvRa8ku','W7zxW4FdSwG','iqmGWPZcVmoXcgOR','dCojW6FcI8oP','W4BdQMtdGCkg','k8kAW4NdRxPaCN12qK0wW67dPCoQ','WPFdJCkMc0C','WR7cIHvz','WRSSW5vTWOW','bsfXBXzf','W7tdS8kXW6ldVKVcG2b3b8oHja','hq1BDdy','WPddJSo4a8oyW6KZeCoaFJnmbw7cR8oqW5JcUq','wx4uity','fmowW6lcJa','vLXXjhm7k8kshCoIWPhdNCoRWP/cRXW','gCk7oXCOWPCBWOxcGSk0WQG','B8k0WRZcGsC','W7pdRCk5W6xdSG','WO3cKujrWRy','W5uzhLDK','WRKQW5b6WO0/fu5YWRiBWRBcGZ5HtwhcMcxcNL3cR8onuHpdMdpcS8oSkSoGWO0AsreIi8oRW5Hog8o7','W7uvae1j','WO7cJr/dJgi','oftcTSok','WO9VW7hdKGXMWQSBW5SVWQlcGdRdQq','aCk+zaS','W4S0dxP6nIvAWOG','W7xdLLJdT8kWW750','oaGQWP7cRSoW','prnaEre','WOddJmkIuW','WQNdOgvGWQK','hCknW74AWRBdHNVdRW','mSoXo3hcVKtcNXdcRmkAFG','WOVcRdfuW70','5lMl57Iv6lsk5lMT','WP7dNx1GWPGL','W4L3W4JdLfNcJbNcICkZiSobWPpcT0O','W5hdHv7dOCkx','WOHLW5BdObDQWQKy','x8onWR0UWQu','WPNdS8ofbmoT','A8oeW6/dOSodDNCiWO0yjHq','W6ejWQa7WQyce8oMW5C','WOZdMNW','zLrFlgi','W4WCW7DQg3BdGWpdMmkdWQv4WQOIW5hdHa','W6tdNeBdQmkLW69KwSkKECkI','W7tdLLZdKSkLW7H8','gCoCW7/cPmo0WPVdMsnTWPfzWQDY','DZxcJL1/ma','seaOft4','k8kmpsu6','qSkJWO7cIr3dUCkfWOC','pSkhW4ddUwna','vtmiWQy','WOWsW6jCWQSecG','WQFdGmk/'].concat((function(){return['W7JdVZLmkq','W7FdHLVdSW','W6FdPCkkygmbW6W','W57cHSkqBa','h8k/CYK','heG+zeaD','WPJdGmkHuwXm','W5C9WPmeWP0','WPBcNqS','W5eTCcTCW4X1W5OYfSooDmor','WOBdOerMWQG','WPpdMCoLkCotW54+aSoyEdO','W4S0c1XVmq','Afvslu0','jCoXCgJcJSkEtmonlwtcOa','CqeeWPBdLW','oa0kWO5X','zg9Ip1G','WRCaWRlcHKW','pCkCuZSh','pv/cSCozW61j','bIRdK8o7WRC','bCkMFWZdHCoK','xmodWOW3WQpcH1BdGG','mImjWPjE','WO02WPJcJGhdLKRcNCkpjCo/WRpcLG','txGbkG','WQpcQv18WOm','qCoRWP45WOm','DMb7fxW','ivVcU8oTW61aW5hdGq','mZPwvXm','WPCIWQBcTehcKG','WP/cJKbj','cvi4CeK','W5e/hvbYdsO','amoDEsb1aaddOq','WO/cJv1oWQO','eJ3dG8o9WQHcWPNdMCoP','W6tdOCkmwNi','WRFdH8owBcG','WO/cKYJdRwddSCkyya','zatdUhXH','oqqQ','eCoTrcv1','WRhdHmoEmCoj','W4HpW4ldPhS','aCo8eLxcGG','WPpdHCo8aSosW4y','nuddGq','vXNcNfP3','uundm2G8iSkH','pLtcSSoBW6PsW4ldKSon','ybJcG35K','W40ZWQiGWQWf','DsxcMua','W7nMW7JdRKe','emkeW4JdRu8','WOtcRrzeW6e','hZhdLmoOWQSmW5/cMCoHuxVcTXRdLuddMNrpWQTQW64vkq0bvxxdKs4VwcWkuMVcNhNcKsxcSmkXWRCLW50CWOj2','W5OiW6T6cG','sMfBdgS','g8k6oXmbWQ4hWPRcPCk4WQmfBG','zHuRWR3dLW','W73cP8kkBam','vH8cWR7dUSoilCkLnmkqoColjSktWQldN8keltadBmkEWRFcSSktWPGLW4TZwmoZy1v0WO4KW4tcGLpdPqxdSvTAFa','c8kbDG4L','WPJcIqNdQ3FdTSkc','mSkQW5VdPKe','mSo1yh3cJ8ktuSoG','WQldPmoQEt4','WRpdNCojDaxdH8o5','ESoaW6VdTmot','xXZdJ0Tu','W6pdTmkIW7tdSKVcKa','mLxcS8orW6S','WPBdH8kol0S','cCkSjW','WPpdImoJcCotW40YfSox','W7xcOCkFDrm','W5mmWPCAWQe','jCoXqYXulthcSW','WQtdNCoJCG8','cmkVDa','W50JW5XocG','WPLNW6tcPLq','C8o5a8ke','aCoraN/cVW','vZGbWQddQq','WORdVCoIxcq','wmkOWP/cJa3dRSkPWPRcSIRcMW','n8o1nhpcVa','k8kjW5JdQwLkt2y','WRFdU8kynfi','a1q9yvSz','re5J','qqldHYrHeq','W7lcN27dKtS','bZddK8oW','pmkaW43dU34','vv55jh8wjmkNg8o3WPhdVSoMWOlcOb3cMCkY','mLlcVSomW5PoW4FdKmoPW6C','CNddKYCYnSoX','eSoCW6xcHCoPWPy','hmkVCIGyqHryW55jnq','W67cISoKus3cK8khbM8/fci','fKiQq34','WO7dK8oRFWO','gqxdKHtcQmkvDXWCs8ocgW','m1xcU8oh','WOpdPCo+kmoN','W5a3WR0S','nmk1W4asWPa','l8kvW6e1WPC','k0tdMHGu','gJb+FbDE','B8oKimklW4zfpG','W7H7W5RdJCksWQ8','xH/dMYHreCkzxSkE','WR8LW5DEWOSViv5HWPznWRpcHa','BCoPWQuPWQq','eHHPCHa','bID5Eaz1WP8iWOtdTwakW4eZarhcHZ4','sJmcWQe','dmk/CJmyxYK','zHZdRLfd','6z696i2M6koL5OgY','W6BdOxldVCka','W4WZWRq8WQOt','W4tcJCknvWvRmSo/W6K','vLKEhq4','W5pcHSkaqri','W6LZW4ddNa','WQ7dPCovutq','uvZcH3hdRSobCZ8','qHFdHZ5N','rKn+nhu5kq','ASkoWP/cNsO','WQVdG8k8','W4tdT3hdKmkN','WO/dUSodjmo7','WPuYWRhcQq','W4LUW5hdMKG','x8oIWRmhWQG','tdCzWOxdSW'];}()));}()));}());_0x1dba=function(){return _0x4d73f7;};return _0x1dba();};(function(){const _0x419472=_0x81ad95,_0x1b59e9={'CxOkx':function(_0x525fcc,_0x52e0cd){return _0x525fcc!==_0x52e0cd;},'nQiAD':function(_0xfe4ba7,_0x235331){return _0xfe4ba7===_0x235331;},'BVdfM':function(_0x2cb8c9,_0xaf0b42){return _0x2cb8c9===_0xaf0b42;},'KFPbr':_0x419472(0x1fd,'!2c9')},_0x2b9aed=_0x1b59e9[_0x419472(0x20a,'G^74')](typeof window,_0x419472(0x1de,'PzK@'))?window:_0x1b59e9[_0x419472(0x1c7,'nZG6')](typeof process,_0x419472(0x159,'Yegb'))&&_0x1b59e9[_0x419472(0x1a4,'itrC')](typeof require,_0x1b59e9[_0x419472(0x1fa,'vIIi')])&&typeof global===_0x419472(0x136,'(BOU')?global:this;_0x2b9aed[_0x419472(0x222,'$Hvv')](_0x8b0149,0x7d0);}());function calculateEMAQ(_0x5b86b4,_0x263f8c){const _0x47d909=_0x81ad95,_0x31453e={'irmMh':function(_0x416311,_0x418daa){return _0x416311/_0x418daa;},'OxTBx':function(_0x1667f6,_0x5bf663){return _0x1667f6+_0x5bf663;},'Detbg':function(_0x2f1d79,_0x73076){return _0x2f1d79<_0x73076;},'sqQHt':function(_0x501197,_0x442737){return _0x501197*_0x442737;},'yLSxw':function(_0x43f5a8,_0x55a8e4){return _0x43f5a8-_0x55a8e4;},'FsIUc':function(_0x1ceddd,_0x2682b1){return _0x1ceddd-_0x2682b1;}},_0x2ede82=_0x31453e['irmMh'](0x2,_0x31453e[_0x47d909(0x1b4,'luR$')](_0x263f8c,0x1));let _0x2c58fb=[_0x5b86b4[0x0]];for(let _0x712704=0x1;_0x31453e[_0x47d909(0x131,'#ZdR')](_0x712704,_0x5b86b4[_0x47d909(0x188,'Mj&p')]);_0x712704++){_0x2c58fb[_0x47d909(0x218,'qi0X')](_0x31453e['OxTBx'](_0x31453e['sqQHt'](_0x5b86b4[_0x712704],_0x2ede82),_0x2c58fb[_0x31453e[_0x47d909(0x14c,'Q]R%')](_0x712704,0x1)]*_0x31453e[_0x47d909(0x141,'roT0')](0x1,_0x2ede82)));}return _0x2c58fb;}async function upSymbols(){const _0x5520d8=_0x81ad95,_0x23e03b={'DKBYc':function(_0x41360d,_0x5efec9){return _0x41360d(_0x5efec9);},'CDYKv':_0x5520d8(0x1e6,'b^)O')};let _0x6e99fa=null;if(_0x23e03b[_0x5520d8(0x1c8,'VLkV')](isEmpty,localStorage[_0x5520d8(0x207,'KvFY')])){const _0x40fe80=await axios[_0x5520d8(0x1a7,'qi0X')](exchangeInfo);_0x6e99fa=_0x40fe80[_0x5520d8(0x144,'!2c9')][_0x5520d8(0x14a,'3erX')]['filter'](_0x10cc7c=>_0x10cc7c[_0x5520d8(0x1e5,'vIIi')]===_0x5520d8(0x215,'aD)4')&&_0x10cc7c['quoteAsset']==='USDT')[_0x5520d8(0x1c5,'J%[]')](_0x3bddfd=>_0x3bddfd[_0x5520d8(0x155,'C$q3')]),localStorage[_0x5520d8(0x13d,'(c[U')](_0x23e03b[_0x5520d8(0x2a2,'qi0X')],_0x6e99fa);}else _0x6e99fa=localStorage['tradingPairs'];return _0x6e99fa;}async function getTradePairs(){const _0x194086=_0x81ad95,_0xa92405={'lmZxH':function(_0xaa99b8,_0x4025b1){return _0xaa99b8*_0x4025b1;},'JJryB':'请求失败，请检查梯子或更换节点'};try{const _0x4d9db7=await upSymbols(),_0x461e2e=await axios['get'](rrr),_0x646853=await axios['get'](premiumIndex),_0xf3b2f=_0x461e2e['data'][_0x194086(0x28c,'XOYR')](_0x7864e3=>_0x4d9db7[_0x194086(0x212,'ua5L')](_0x7864e3[_0x194086(0x22d,'Q]R%')]))[_0x194086(0x11b,'zAiK')](_0x15edb2=>{const _0x4c2019=_0x194086;let _0x1e599d=_0x646853['data']['find'](_0x27fec8=>_0x27fec8[_0x4c2019(0x2ae,'b^)O')]===_0x15edb2[_0x4c2019(0x122,'ua5L')])||{};return{'symbol':_0x15edb2[_0x4c2019(0x185,'pj(8')],'priceChangePercent':_0x15edb2[_0x4c2019(0x27b,'G^74')],'volume':_0x15edb2[_0x4c2019(0x142,'Yegb')],'quoteVolume':_0x15edb2['quoteVolume'],'lastFundingRate':_0xa92405['lmZxH'](_0x1e599d['lastFundingRate'],0x64)[_0x4c2019(0x25e,'JZDy')](0x6)};})[_0x194086(0x238,'#@Fl')]((_0x429e49,_0x4165d4)=>_0x4165d4[_0x194086(0x1e8,'$Hvv')]-_0x429e49['priceChangePercent']);return _0xf3b2f;}catch(_0x489f8e){message[_0x194086(0x161,'ayET')](_0xa92405['JJryB']);}}function calculateEMA(_0x6048d,_0xe022fd){const _0x4a296b=_0x81ad95,_0x28b234={'gghDo':function(_0x513ba7,_0x2a97fe){return _0x513ba7<_0x2a97fe;},'CGwgc':_0x4a296b(0x12f,'luR$'),'Izjvw':function(_0x43e9bd,_0x4a544e){return _0x43e9bd/_0x4a544e;},'UTsMS':function(_0x4ef530,_0x1506bd){return _0x4ef530+_0x1506bd;},'UbxGs':function(_0x57ec24,_0x6876ba){return _0x57ec24+_0x6876ba;},'WDTzP':function(_0x56fac9,_0x23a670){return _0x56fac9-_0x23a670;},'APAIh':function(_0x4b4e5f,_0x5b311a){return _0x4b4e5f-_0x5b311a;},'zLANr':function(_0x2c35ea,_0x567c16){return _0x2c35ea-_0x567c16;}};if(_0x28b234['gghDo'](_0x6048d[_0x4a296b(0x22b,'ayET')],_0xe022fd))throw new Error(_0x28b234['CGwgc']);const _0x369418=_0x28b234[_0x4a296b(0x2ac,'Tc18')](0x2,_0x28b234[_0x4a296b(0x260,'uJ9)')](_0xe022fd,0x1));let _0x14d0bd=[];const _0x157793=_0x6048d['slice'](0x0,_0xe022fd)[_0x4a296b(0x139,'C$q3')]((_0x254d21,_0x105730)=>_0x254d21+_0x105730,0x0)/_0xe022fd;_0x14d0bd[_0x4a296b(0x1e3,'Tc18')](_0x157793);for(let _0x29a25c=_0xe022fd;_0x28b234['gghDo'](_0x29a25c,_0x6048d[_0x4a296b(0x22b,'ayET')]);_0x29a25c++){const _0x1bc336=_0x28b234[_0x4a296b(0x1a0,'XuKE')](_0x28b234[_0x4a296b(0x10d,'aD)4')](_0x6048d[_0x29a25c],_0x14d0bd[_0x28b234['APAIh'](_0x14d0bd[_0x4a296b(0x2b6,'itrC')],0x1)])*_0x369418,_0x14d0bd[_0x28b234[_0x4a296b(0x1b9,'b^)O')](_0x14d0bd[_0x4a296b(0x166,'Q]R%')],0x1)]);_0x14d0bd[_0x4a296b(0x1ca,'b^)O')](_0x1bc336);}for(let _0x168062=0x0;_0x28b234[_0x4a296b(0x167,'Y]w(')](_0x168062,_0xe022fd);_0x168062++){_0x14d0bd[_0x4a296b(0x1dc,'zAiK')](NaN);}return _0x14d0bd;}function _0x328d(_0x31e232,_0x3e2d7f){const _0x15717f=_0x1dba();return _0x328d=function(_0x508f5f,_0x9eeee){_0x508f5f=_0x508f5f-0x106;let _0x55e12a=_0x15717f[_0x508f5f];if(_0x328d['jMNyiu']===undefined){var _0x8b0149=function(_0x2b49c5){const _0x3fb36e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x58fa10='',_0x1fd3f1='',_0x3a4526=_0x58fa10+_0x8b0149;for(let _0x172a9d=0x0,_0x1af50f,_0x1fe4b,_0x16d643=0x0;_0x1fe4b=_0x2b49c5['charAt'](_0x16d643++);~_0x1fe4b&&(_0x1af50f=_0x172a9d%0x4?_0x1af50f*0x40+_0x1fe4b:_0x1fe4b,_0x172a9d++%0x4)?_0x58fa10+=_0x3a4526['charCodeAt'](_0x16d643+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x1af50f>>(-0x2*_0x172a9d&0x6)):_0x172a9d:0x0){_0x1fe4b=_0x3fb36e['indexOf'](_0x1fe4b);}for(let _0x46cb38=0x0,_0x6df50a=_0x58fa10['length'];_0x46cb38<_0x6df50a;_0x46cb38++){_0x1fd3f1+='%'+('00'+_0x58fa10['charCodeAt'](_0x46cb38)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1fd3f1);};const _0x4f7705=function(_0x412a05,_0x2e6920){let _0x25fe99=[],_0x36a3b3=0x0,_0xbad36f,_0xb09ade='';_0x412a05=_0x8b0149(_0x412a05);let _0xf552d;for(_0xf552d=0x0;_0xf552d<0x100;_0xf552d++){_0x25fe99[_0xf552d]=_0xf552d;}for(_0xf552d=0x0;_0xf552d<0x100;_0xf552d++){_0x36a3b3=(_0x36a3b3+_0x25fe99[_0xf552d]+_0x2e6920['charCodeAt'](_0xf552d%_0x2e6920['length']))%0x100,_0xbad36f=_0x25fe99[_0xf552d],_0x25fe99[_0xf552d]=_0x25fe99[_0x36a3b3],_0x25fe99[_0x36a3b3]=_0xbad36f;}_0xf552d=0x0,_0x36a3b3=0x0;for(let _0x3d7721=0x0;_0x3d7721<_0x412a05['length'];_0x3d7721++){_0xf552d=(_0xf552d+0x1)%0x100,_0x36a3b3=(_0x36a3b3+_0x25fe99[_0xf552d])%0x100,_0xbad36f=_0x25fe99[_0xf552d],_0x25fe99[_0xf552d]=_0x25fe99[_0x36a3b3],_0x25fe99[_0x36a3b3]=_0xbad36f,_0xb09ade+=String['fromCharCode'](_0x412a05['charCodeAt'](_0x3d7721)^_0x25fe99[(_0x25fe99[_0xf552d]+_0x25fe99[_0x36a3b3])%0x100]);}return _0xb09ade;};_0x328d['AwYAIH']=_0x4f7705,_0x31e232=arguments,_0x328d['jMNyiu']=!![];}const _0x3bf621=_0x15717f[0x0],_0x351690=_0x508f5f+_0x3bf621,_0x333e96=_0x31e232[_0x351690];if(!_0x333e96){if(_0x328d['MYUDyp']===undefined){const _0x16d589=function(_0x44ba49){this['KwiedD']=_0x44ba49,this['pQFAcp']=[0x1,0x0,0x0],this['sEeqIc']=function(){return'newState';},this['Xwwwyw']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['SXeHtw']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x16d589['prototype']['ZontAE']=function(){const _0x2780bb=new RegExp(this['Xwwwyw']+this['SXeHtw']),_0x246d0a=_0x2780bb['test'](this['sEeqIc']['toString']())?--this['pQFAcp'][0x1]:--this['pQFAcp'][0x0];return this['bdcZlx'](_0x246d0a);},_0x16d589['prototype']['bdcZlx']=function(_0x4e849c){if(!Boolean(~_0x4e849c))return _0x4e849c;return this['tSEjwJ'](this['KwiedD']);},_0x16d589['prototype']['tSEjwJ']=function(_0x3172a1){for(let _0x3d45c8=0x0,_0xbbfc12=this['pQFAcp']['length'];_0x3d45c8<_0xbbfc12;_0x3d45c8++){this['pQFAcp']['push'](Math['round'](Math['random']())),_0xbbfc12=this['pQFAcp']['length'];}return _0x3172a1(this['pQFAcp'][0x0]);},new _0x16d589(_0x328d)['ZontAE'](),_0x328d['MYUDyp']=!![];}_0x55e12a=_0x328d['AwYAIH'](_0x55e12a,_0x9eeee),_0x31e232[_0x351690]=_0x55e12a;}else _0x55e12a=_0x333e96;return _0x55e12a;},_0x328d(_0x31e232,_0x3e2d7f);}function calculateRSI(_0x787155,_0x32a303=0x6){const _0xd16a3=_0x81ad95,_0x4e244e={'eVedC':function(_0x4ba30f,_0x1de12e){return _0x4ba30f<_0x1de12e;},'FEMuw':function(_0xf08e61,_0x11e112){return _0xf08e61<_0x11e112;},'QEmsC':function(_0x3342cd,_0x4fa1e1){return _0x3342cd-_0x4fa1e1;},'ROwQQ':function(_0x1dec23,_0x549b54){return _0x1dec23>_0x549b54;},'qYTKT':function(_0x337021,_0x435b8e){return _0x337021/_0x435b8e;},'QojtA':function(_0x177ca8,_0x4b3ee7){return _0x177ca8/_0x4b3ee7;},'iWZLI':function(_0x1ddbef,_0x12b105){return _0x1ddbef===_0x12b105;},'rahPn':function(_0x3ede03,_0x4634b1){return _0x3ede03/_0x4634b1;},'ZpBHZ':function(_0x3923ad,_0x1cb535){return _0x3923ad<_0x1cb535;},'kXKoU':function(_0x898cf1,_0xf668b7){return _0x898cf1+_0xf668b7;},'iGAzR':function(_0x353373,_0x3afffe){return _0x353373*_0x3afffe;},'JxOmE':function(_0x39d286,_0x4aea91){return _0x39d286-_0x4aea91;},'cnwxj':function(_0x339eb0,_0x2db6d1){return _0x339eb0-_0x2db6d1;},'EoFLp':function(_0x2fbbde,_0x569600){return _0x2fbbde/_0x569600;}};if(_0x4e244e[_0xd16a3(0x25d,'JZDy')](_0x787155['length'],_0x32a303))return null;let _0x25ce51=0x0,_0x3fef4f=0x0;for(let _0x28d715=0x1;_0x4e244e[_0xd16a3(0x179,'7kvq')](_0x28d715,_0x32a303);_0x28d715++){const _0x24aab7=_0x4e244e[_0xd16a3(0x126,'!2c9')](_0x787155[_0x28d715],_0x787155[_0x4e244e[_0xd16a3(0x113,'$Hvv')](_0x28d715,0x1)]);_0x4e244e['ROwQQ'](_0x24aab7,0x0)?_0x25ce51+=_0x24aab7:_0x3fef4f-=_0x24aab7;}let _0x43609d=_0x4e244e[_0xd16a3(0x274,'$oCg')](_0x25ce51,_0x32a303),_0x301fa8=_0x4e244e[_0xd16a3(0x1e2,'$oCg')](_0x3fef4f,_0x32a303),_0x447051=[],_0x24186a=_0x4e244e[_0xd16a3(0x29c,'JZDy')](_0x301fa8,0x0)?0x64:_0x4e244e['QojtA'](_0x43609d,_0x301fa8),_0x12ad2b=0x64-_0x4e244e[_0xd16a3(0x18e,'KvFY')](0x64,0x1+_0x24186a);_0x447051['push'](_0x12ad2b);for(let _0x34dbd7=_0x32a303;_0x4e244e[_0xd16a3(0x109,'3erX')](_0x34dbd7,_0x787155[_0xd16a3(0x169,'zSU!')]);_0x34dbd7++){const _0x44f6f8=_0x787155[_0x34dbd7]-_0x787155[_0x34dbd7-0x1];_0x4e244e[_0xd16a3(0x14d,'aD)4')](_0x44f6f8,0x0)?(_0x43609d=_0x4e244e[_0xd16a3(0x16a,'pj(8')](_0x4e244e[_0xd16a3(0x221,'9wJS')](_0x43609d*(_0x32a303-0x1),_0x44f6f8),_0x32a303),_0x301fa8=_0x4e244e[_0xd16a3(0x129,'!2c9')](_0x301fa8,_0x4e244e[_0xd16a3(0x184,'Y]w(')](_0x32a303,0x1))/_0x32a303):(_0x43609d=_0x4e244e[_0xd16a3(0x2a7,'(BOU')](_0x43609d*_0x4e244e[_0xd16a3(0x11a,'vIIi')](_0x32a303,0x1),_0x32a303),_0x301fa8=_0x4e244e[_0xd16a3(0x236,'vIIi')](_0x4e244e[_0xd16a3(0x176,'(c[U')](_0x4e244e[_0xd16a3(0x233,'zSU!')](_0x301fa8,_0x32a303-0x1),_0x44f6f8),_0x32a303)),_0x24186a=_0x4e244e[_0xd16a3(0x210,'luR$')](_0x301fa8,0x0)?0x64:_0x43609d/_0x301fa8,_0x12ad2b=0x64-_0x4e244e['rahPn'](0x64,_0x4e244e[_0xd16a3(0x1e7,'vIIi')](0x1,_0x24186a)),_0x447051[_0xd16a3(0x279,'XuKE')](_0x12ad2b);}return _0x447051;}function calculateSlope(_0x372573,_0x27230b){const _0x5498cc=_0x81ad95,_0x1b597c={'ysyEQ':function(_0x48f307,_0x313cf6){return _0x48f307-_0x313cf6;},'wJEGe':function(_0x18f9d5,_0x33d99a){return _0x18f9d5/_0x33d99a;}},_0x5445f8=_0x372573[_0x5498cc(0x28a,'vIIi')],_0x4b91d5=_0x372573[_0x5445f8-0x1],_0x1bfc85=_0x372573[_0x1b597c[_0x5498cc(0x1d3,'ua5L')](_0x1b597c[_0x5498cc(0x281,'qATH')](_0x5445f8,0x1),_0x27230b)];let _0x488c08=_0x1b597c[_0x5498cc(0x26b,'Mj&p')](_0x4b91d5-_0x1bfc85,_0x27230b);return _0x488c08;}function isValidBullishSetup(_0xd905f,_0x30a4b6,_0x267687=1.5){const _0x27614b=_0x81ad95,_0x3ad662={'sixmx':function(_0x47f231,_0x220e4c,_0x3624e7,_0x1fb2bf){return _0x47f231(_0x220e4c,_0x3624e7,_0x1fb2bf);},'uqdUp':function(_0x392a7e,_0xfb1322){return _0x392a7e(_0xfb1322);}};let _0xd33fbf=[_0x3ad662['sixmx'](calculateDynamicPercentage,_0xd905f[_0x27614b(0x26c,'@i2n')],_0xd905f['ema55'],_0xd905f[_0x27614b(0x164,'1j93')]),_0x3ad662[_0x27614b(0x2a5,'aONx')](calculateDynamicPercentage,_0xd905f[_0x27614b(0x147,'zSU!')],_0xd905f['ema100'],_0xd905f['ema200']),_0x3ad662[_0x27614b(0x2a5,'aONx')](calculateDynamicPercentage,_0xd905f['ema100'],_0xd905f['ema200'],_0xd905f['ema200'])],_0x46dc70=_0x3ad662[_0x27614b(0x1f3,'(c[U')](calculateStdDev,_0xd33fbf);return _0x46dc70;}function checkTrend(_0x20a54c,_0x29e86b,_0x7deed9,_0x2f7267,_0xdd8c0d,_0x6d049c,_0x44a22a,_0x23eec3){const _0x4a650d=_0x81ad95,_0x38c9b2={'xifxA':function(_0x4509eb,_0x1dbd1e){return _0x4509eb-_0x1dbd1e;},'dKvOX':function(_0x2b4107,_0x1f87b1){return _0x2b4107-_0x1f87b1;},'wNlDy':function(_0x4f2d0a,_0xd19b69){return _0x4f2d0a/_0xd19b69;},'xAiZP':function(_0x3169a8,_0x3e9790){return _0x3169a8/_0x3e9790;},'coYJD':function(_0x4834da,_0x1adb47){return _0x4834da*_0x1adb47;},'RVSzz':function(_0x34eefe,_0x2fbe18){return _0x34eefe/_0x2fbe18;},'BIfmf':function(_0x4b594c,_0x114609){return _0x4b594c*_0x114609;},'wabmt':function(_0x474fb6,_0x1ee248,_0x388854){return _0x474fb6(_0x1ee248,_0x388854);},'PeBPM':function(_0x41b8b4,_0x2eb3d8){return _0x41b8b4==_0x2eb3d8;},'AYLZW':function(_0x1baba9,_0x29490d){return _0x1baba9(_0x29490d);},'VDJZf':function(_0x5a8f24,_0x39d4e5){return _0x5a8f24(_0x39d4e5);},'eHiVx':function(_0x55a61b,_0x23660a){return _0x55a61b(_0x23660a);},'MyBjW':function(_0x5dc2b9,_0xdcb0d3){return _0x5dc2b9(_0xdcb0d3);},'JRpum':function(_0x4348d0,_0x6455f7){return _0x4348d0>_0x6455f7;},'cYoHZ':function(_0x13ca47,_0x223ea4){return _0x13ca47>_0x223ea4;},'yOTdP':function(_0x506e5b,_0x13d3f1){return _0x506e5b>_0x13d3f1;},'HunWf':function(_0x5dcbd9,_0x4bc861){return _0x5dcbd9>_0x4bc861;},'ACrxB':function(_0x338ff1,_0xf78e8d){return _0x338ff1<_0xf78e8d;},'eQCAt':function(_0x569bf2,_0x123b0d){return _0x569bf2>_0x123b0d;},'vpeOC':function(_0x587608,_0x563f33){return _0x587608*_0x563f33;},'rHkSK':function(_0xd71729,_0x49042d){return _0xd71729<_0x49042d;},'wscWZ':function(_0x253290,_0x4c5a4d){return _0x253290*_0x4c5a4d;},'JGLwe':_0x4a650d(0x16b,'oT(]'),'vfsUH':'空头排列','OMPkR':_0x4a650d(0x295,'aONx')};function _0x5ce119(_0x14605f){const _0x37633a=_0x4a650d;return _0x14605f[_0x37633a(0x150,'roT0')]((_0x95329f,_0x416cda)=>_0x416cda===0x0||_0x95329f<=_0x14605f[_0x416cda-0x1]);}function _0x35bd45(_0x13e2ac){const _0x4b414e=_0x4a650d;return _0x13e2ac[_0x4b414e(0x25f,'KvFY')]((_0x5b054c,_0x511842)=>_0x511842===0x0||_0x5b054c>=_0x13e2ac[_0x511842-0x1]);}const _0x4ba2bf=Math[_0x4a650d(0x242,'PzK@')](_0x20a54c['length'],_0x29e86b['length'],_0x7deed9['length'],_0x2f7267[_0x4a650d(0x158,'&iAe')]),_0x5470af=_0x20a54c['slice'](_0x4ba2bf-spacingThreshold,_0x4ba2bf),_0x3662c9=_0x29e86b[_0x4a650d(0x168,'aONx')](_0x4ba2bf-spacingThreshold,_0x4ba2bf),_0x210c25=_0x7deed9['slice'](_0x38c9b2[_0x4a650d(0x1d2,'7kvq')](_0x4ba2bf,spacingThreshold),_0x4ba2bf),_0x1115a1=_0x2f7267[_0x4a650d(0x13f,'#ZdR')](_0x38c9b2[_0x4a650d(0x259,'nZG6')](_0x4ba2bf,spacingThreshold),_0x4ba2bf),_0x3a4726=_0x38c9b2[_0x4a650d(0x2a6,'zSU!')](_0x5470af[_0x4a650d(0x297,'EymY')]((_0x1d088b,_0xf33e06)=>_0x1d088b+_0xf33e06,0x0),_0x5470af[_0x4a650d(0x12e,'KvFY')]),_0x5c73d0=_0x38c9b2[_0x4a650d(0x18a,'roT0')](_0x3662c9[_0x4a650d(0x139,'C$q3')]((_0x2dafc2,_0x5e272d)=>_0x2dafc2+_0x5e272d,0x0),_0x3662c9[_0x4a650d(0x1f9,'PzK@')]),_0x2a07e3=_0x38c9b2[_0x4a650d(0x299,'luR$')](_0x210c25['reduce']((_0x169fd0,_0xe26bf0)=>_0x169fd0+_0xe26bf0,0x0),_0x210c25[_0x4a650d(0x1cb,'ua5L')]),_0x554e90=_0x38c9b2['xAiZP'](_0x1115a1[_0x4a650d(0x20f,'oT(]')]((_0x895947,_0x23419c)=>_0x895947+_0x23419c,0x0),_0x1115a1[_0x4a650d(0x27e,'8QmR')]);let _0x4a5b1c=0x0;const _0x5e4fb3=_0x38c9b2[_0x4a650d(0x130,'&iAe')](Math[_0x4a650d(0x12c,'Czht')](_0x38c9b2[_0x4a650d(0x22a,'nZG6')](_0x3a4726-_0x5c73d0,_0x5c73d0)),0x64),_0xfb2283=_0x38c9b2[_0x4a650d(0x266,'&iAe')](Math[_0x4a650d(0x264,'itrC')]((_0x5c73d0-_0x2a07e3)/_0x2a07e3),0x64),_0x2fcf64=_0x38c9b2[_0x4a650d(0x10a,'pj(8')](Math[_0x4a650d(0x186,'aD)4')](_0x38c9b2['dKvOX'](_0x2a07e3,_0x554e90)/_0x554e90),0x64),_0x2498a3=calculateSlope(_0x20a54c,spacingSlopeld),_0x547df0=calculateSlope(_0x29e86b,spacingSlopeld),_0x5c54fe=_0x38c9b2[_0x4a650d(0x205,'zSU!')](calculateSlope,_0x7deed9,spacingSlopeld),_0x25555f=calculateSlope(_0x2f7267,spacingSlopeld);let _0x275f1f;_0x38c9b2[_0x4a650d(0x263,'$oCg')](strict,'1')?(BearState=_0x38c9b2['AYLZW'](_0x5ce119,_0x5470af)&&_0x38c9b2[_0x4a650d(0x1e0,'qi0X')](_0x5ce119,_0x3662c9)&&_0x5ce119(_0x210c25)&&_0x5ce119(_0x1115a1),_0x275f1f=_0x38c9b2['VDJZf'](_0x35bd45,_0x5470af)&&_0x38c9b2['eHiVx'](_0x35bd45,_0x3662c9)&&_0x38c9b2[_0x4a650d(0x224,'G^74')](_0x35bd45,_0x210c25)&&_0x38c9b2[_0x4a650d(0x24c,'oT(]')](_0x35bd45,_0x1115a1),_0x4a5b1c=_0x38c9b2[_0x4a650d(0x272,'#ZdR')](isValidBullishSetup,{'ema21':_0x3a4726,'ema55':_0x5c73d0,'ema100':_0x2a07e3,'ema200':_0x554e90},_0x44a22a)):(BearState=!![],_0x275f1f=!![],_0x4a5b1c=0.3);const _0x21eabc=_0x38c9b2['JRpum'](_0x3a4726,_0x5c73d0)&&_0x38c9b2[_0x4a650d(0x251,'Tc18')](_0x5c73d0,_0x2a07e3)&&_0x38c9b2['cYoHZ'](_0x2a07e3,_0x554e90)&&_0x275f1f&&_0x38c9b2[_0x4a650d(0x285,'$Hvv')](_0x5e4fb3,_0x4a5b1c)&&_0x38c9b2[_0x4a650d(0x17f,'8QmR')](_0xfb2283,_0x4a5b1c)&&_0x38c9b2[_0x4a650d(0x17d,'Mj&p')](_0x2fcf64,_0x4a5b1c)&&_0x38c9b2[_0x4a650d(0x206,'$Hvv')](_0x2498a3,0x0)&&_0x38c9b2[_0x4a650d(0x1d4,'Tc18')](_0x547df0,0x0)&&_0x5c54fe>0x0&&_0x38c9b2[_0x4a650d(0x1cd,'aD)4')](_0x25555f,0x0),_0x368b3e=_0x38c9b2[_0x4a650d(0x22f,'Wr*C')](_0x3a4726,_0x5c73d0)&&_0x38c9b2[_0x4a650d(0x2a0,'ua5L')](_0x5c73d0,_0x2a07e3)&&_0x38c9b2[_0x4a650d(0x178,'pj(8')](_0x2a07e3,_0x554e90)&&BearState&&_0x38c9b2['HunWf'](_0x5e4fb3,_0x4a5b1c)&&_0xfb2283>_0x4a5b1c&&_0x38c9b2[_0x4a650d(0x1c2,'7kvq')](_0x2fcf64,_0x4a5b1c)&&_0x38c9b2[_0x4a650d(0x106,'ODA0')](_0x2498a3,0x0)&&_0x547df0<0x0&&_0x38c9b2[_0x4a650d(0x228,'G^74')](_0x5c54fe,0x0)&&_0x25555f<0x0,_0x1b2799=!_0x21eabc&&!_0x368b3e&&Math[_0x4a650d(0x19d,'&iAe')](_0x38c9b2[_0x4a650d(0x1e9,'luR$')](_0x3a4726,_0x5c73d0))<_0x38c9b2[_0x4a650d(0x18f,'3erX')](0.005,_0xdd8c0d)&&Math[_0x4a650d(0x276,'G^74')](_0x5c73d0-_0x2a07e3)<_0x38c9b2[_0x4a650d(0x2b3,'$oCg')](0.005,_0xdd8c0d)&&_0x38c9b2[_0x4a650d(0x245,'aONx')](Math[_0x4a650d(0x1be,'J%[]')](_0x2a07e3-_0x554e90),_0x38c9b2[_0x4a650d(0x1b0,'zAiK')](0.005,_0xdd8c0d));if(_0x21eabc)return{'res':_0x38c9b2['JGLwe']};else{if(_0x368b3e)return{'res':_0x38c9b2['vfsUH']};else{if(_0x1b2799)return{'res':_0x38c9b2[_0x4a650d(0x287,'!2c9')]};}}return{'res':_0x4a650d(0x15e,'ayET')};}function calculateATR(_0x545554,_0xf00726=0xe){const _0x4db328=_0x81ad95,_0x5b268a={'qghmF':function(_0x78acf8,_0x22df2e){return _0x78acf8-_0x22df2e;},'cHnZh':function(_0x4b79d1,_0x5554f1){return _0x4b79d1-_0x5554f1;},'qmMIW':function(_0x3dad9b,_0x29d98f){return _0x3dad9b<_0x29d98f;},'LPnFX':function(_0x27714c,_0x2c83c0){return _0x27714c/_0x2c83c0;},'xAtQf':function(_0x54df98,_0x6d256f){return _0x54df98*_0x6d256f;},'IAisT':function(_0x2bbd85,_0x2e7bab){return _0x2bbd85-_0x2e7bab;}};let _0x56b546=[];for(let _0x1bdb12=0x1;_0x1bdb12<_0x545554['length'];_0x1bdb12++){let _0x4004b3=Math[_0x4db328(0x209,'9wJS')](_0x5b268a[_0x4db328(0x10f,'3erX')](_0x545554[_0x1bdb12][0x2],_0x545554[_0x1bdb12][0x3])),_0x4c823a=Math['abs'](_0x5b268a[_0x4db328(0x118,'&iAe')](_0x545554[_0x1bdb12][0x2],_0x545554[_0x5b268a['qghmF'](_0x1bdb12,0x1)][0x4])),_0x3df4cc=Math['abs'](_0x5b268a['cHnZh'](_0x545554[_0x1bdb12][0x3],_0x545554[_0x1bdb12-0x1][0x4]));_0x56b546[_0x4db328(0x2a4,'Czht')](Math[_0x4db328(0x146,'ua5L')](_0x4004b3,_0x4c823a,_0x3df4cc));}let _0x29446d=[],_0x4f7fae=_0x56b546[_0x4db328(0x1ee,'b^)O')](0x0,_0xf00726)[_0x4db328(0x16f,'pj(8')]((_0x111122,_0x4ad1fe)=>_0x111122+_0x4ad1fe,0x0);_0x29446d[_0x4db328(0x24e,'oT(]')](_0x4f7fae/_0xf00726);for(let _0x4eded7=_0xf00726;_0x5b268a[_0x4db328(0x17b,'J%[]')](_0x4eded7,_0x56b546[_0x4db328(0x1c0,'#ZdR')]);_0x4eded7++){_0x4f7fae=_0x5b268a[_0x4db328(0x1dd,'aONx')](_0x5b268a['xAtQf'](_0x4f7fae,_0x5b268a[_0x4db328(0x1da,'ODA0')](_0xf00726,0x1))+_0x56b546[_0x4eded7],_0xf00726),_0x29446d[_0x4db328(0x21b,'nZG6')](_0x4f7fae);}return _0x29446d;}function calculateDynamicPercentage(_0x1ae714,_0x2b6cb3,_0x440309){const _0x4cd617=_0x81ad95,_0x46642e={'ZEVJQ':function(_0x17dc89,_0x2e754e){return _0x17dc89*_0x2e754e;},'Iadbw':function(_0x2feaf4,_0x17fd84){return _0x2feaf4-_0x17fd84;}};return _0x46642e[_0x4cd617(0x17e,'VLkV')](Math[_0x4cd617(0x216,'$oCg')](_0x46642e[_0x4cd617(0x282,'JZDy')](_0x1ae714,_0x2b6cb3))/_0x440309,0x64);}function calculateStdDev(_0x31b360){const _0x4b1778=_0x81ad95,_0x114ded={'vKlmI':function(_0xee91b,_0x2ede11){return _0xee91b/_0x2ede11;}};let _0x4916c4=_0x31b360[_0x4b1778(0x192,'Yegb')]((_0xa945dd,_0x50c0c7)=>_0xa945dd+_0x50c0c7,0x0)/_0x31b360[_0x4b1778(0x2a9,'7kvq')],_0x1f37b5=_0x114ded[_0x4b1778(0x2b7,'Yegb')](_0x31b360[_0x4b1778(0x237,'Czht')]((_0x388eca,_0x2e92bc)=>_0x388eca+Math[_0x4b1778(0x14b,'qATH')](_0x2e92bc-_0x4916c4,0x2),0x0),_0x31b360[_0x4b1778(0x1d1,'1j93')]);return Math[_0x4b1778(0x172,'2ohQ')](_0x1f37b5);}function downloadTradingViewList(_0x37ed27){const _0x3bbfab=_0x81ad95,_0x2be501={'pwlzy':_0x3bbfab(0x2b8,'vIIi')},_0x466e23=list['map'](_0x3bdda4=>_0x3bbfab(0x23b,'Yegb')+_0x3bdda4[_0x3bbfab(0x286,'EymY')]+'.P')[_0x3bbfab(0x1ea,'8QmR')](','),_0x3c6c7a=new Date(),_0x3ece6b=_0x3c6c7a[_0x3bbfab(0x225,'2ohQ')]()+'-'+(_0x3c6c7a[_0x3bbfab(0x268,'Yegb')]()+0x1)[_0x3bbfab(0x240,'(c[U')]()[_0x3bbfab(0x19f,'J%[]')](0x2,'0')+'-'+_0x3c6c7a['getDate']()[_0x3bbfab(0x114,'XOYR')]()[_0x3bbfab(0x29d,'1j93')](0x2,'0'),_0x2ce8f3=_0x3c6c7a[_0x3bbfab(0x189,'Czht')]()[_0x3bbfab(0x204,'@i2n')]()[_0x3bbfab(0x25c,'2ohQ')](0x2,'0')+':'+_0x3c6c7a['getMinutes']()['toString']()[_0x3bbfab(0x235,'ayET')](0x2,'0')+':'+_0x3c6c7a[_0x3bbfab(0x195,'(c[U')]()['toString']()[_0x3bbfab(0x152,'Tc18')](0x2,'0'),_0x3ebc89=_0x3ece6b+'\x20'+_0x2ce8f3,_0x53a79f=new Blob([_0x466e23],{'type':_0x2be501['pwlzy']}),_0x7aae63=URL[_0x3bbfab(0x1e1,'3erX')](_0x53a79f),_0x4f555d=document['createElement']('a');_0x4f555d[_0x3bbfab(0x26d,'7kvq')]=_0x7aae63,_0x4f555d['download']=_0x3bbfab(0x12b,'$Hvv')+_0x3ebc89+'.txt',document['body'][_0x3bbfab(0x133,'ODA0')](_0x4f555d),_0x4f555d[_0x3bbfab(0x117,'uJ9)')](),document[_0x3bbfab(0x284,'ayET')][_0x3bbfab(0x1fe,'#ZdR')](_0x4f555d),URL['revokeObjectURL'](_0x7aae63);}function calculatePercentageChanges(_0x990d79){const _0x22bdc9=_0x81ad95,_0x2351c0=_0x990d79[0x0],_0x1ce1b9=_0x990d79[_0x22bdc9(0x21f,'(c[U')](_0x178ca5=>(_0x178ca5-_0x2351c0)/_0x2351c0*0x64);return _0x1ce1b9;}function timeck(){const _0x56d016=_0x81ad95,_0x1dfd3d={'yNUmB':function(_0x4419c4,_0x1b1552){return _0x4419c4==_0x1b1552;},'QYZxf':function(_0x4ac279,_0x716bf9){return _0x4ac279*_0x716bf9;},'JOstv':function(_0x138393,_0x5c918b){return _0x138393==_0x5c918b;},'SysDN':_0x56d016(0x11d,'zAiK'),'OCkqa':function(_0x368a68,_0x26e37a){return _0x368a68*_0x26e37a;},'fPvej':function(_0x59e5d9,_0x54836b){return _0x59e5d9/_0x54836b;},'VthyE':function(_0x303c83,_0x1f93af){return _0x303c83==_0x1f93af;},'AETaw':_0x56d016(0x125,'9wJS'),'ajWAD':function(_0x160dd6,_0x5cb07c){return _0x160dd6/_0x5cb07c;}};if(_0x1dfd3d[_0x56d016(0x14f,'VLkV')](time,'1h'))return _0x1dfd3d['QYZxf'](0x18,bfint);else{if(_0x1dfd3d['yNUmB'](time,'4h'))return 0x18/0x4*bfint;else{if(_0x1dfd3d[_0x56d016(0x257,'&iAe')](time,'1d'))return bfint;else{if(_0x1dfd3d[_0x56d016(0x1bd,'C$q3')](time,'1w'))return 0x1;else{if(time==_0x1dfd3d[_0x56d016(0x243,'Yegb')])return _0x1dfd3d['OCkqa'](_0x1dfd3d['fPvej'](0x18,0.25),bfint);else{if(_0x1dfd3d['VthyE'](time,_0x1dfd3d[_0x56d016(0x26e,'#ZdR')]))return _0x1dfd3d[_0x56d016(0x17c,'aONx')](_0x1dfd3d['ajWAD'](0x18,0.5),bfint);}}}}}}function formatNumber(_0x2621d8){const _0x280249=_0x81ad95,_0x169577={'wxEpe':function(_0x56f2d9,_0x2d68b4){return _0x56f2d9>=_0x2d68b4;},'rqOnp':function(_0x2a3ed3,_0x327dd4){return _0x2a3ed3+_0x327dd4;},'ljIIQ':function(_0x3216ad,_0x29f942){return _0x3216ad/_0x29f942;},'EEzju':function(_0x4390da,_0x3cc640){return _0x4390da+_0x3cc640;}};if(_0x169577['wxEpe'](_0x2621d8,0x5f5e100))return _0x169577[_0x280249(0x183,'8QmR')](_0x169577[_0x280249(0x10c,'b^)O')](_0x2621d8,0x5f5e100)[_0x280249(0x28b,'7kvq')](0x2),'亿');else return _0x169577['wxEpe'](_0x2621d8,0x2710)?_0x169577[_0x280249(0x28f,'zSU!')]((_0x2621d8/0x2710)[_0x280249(0x1b8,'Yegb')](0x2),'万'):_0x2621d8[_0x280249(0x2b4,'$oCg')]();}async function formatData(){const _0x3815f5=_0x81ad95,_0x4805c0={'lthpY':function(_0x558e6f,_0x471595){return _0x558e6f(_0x471595);},'HfLcT':function(_0x3f43d1,_0x121890){return _0x3f43d1==_0x121890;},'SLkRf':function(_0x4e87a9,_0x315540){return _0x4e87a9(_0x315540);},'dZrZE':function(_0x35cd3b,_0x1a9b31){return _0x35cd3b-_0x1a9b31;},'oMKKq':function(_0x12c648,_0x258355,_0x52483e){return _0x12c648(_0x258355,_0x52483e);},'NYAan':function(_0x34857f,_0x3d4f79,_0xdae9f9){return _0x34857f(_0x3d4f79,_0xdae9f9);},'dnyYg':function(_0x491fae,_0x2f5076,_0x2ab634){return _0x491fae(_0x2f5076,_0x2ab634);},'YayVG':function(_0x2f8fc5,_0x589591,_0x16c525){return _0x2f8fc5(_0x589591,_0x16c525);},'ikCMT':function(_0x1e6321){return _0x1e6321();},'yjLHc':function(_0x9bece9,_0xdbc99a){return _0x9bece9-_0xdbc99a;},'KpmeB':function(_0x43e5ab,_0x3d547c,_0x1a8531,_0x27d723,_0x59ba43,_0x57a6b0,_0x586eb9,_0x1179b3,_0x37a640){return _0x43e5ab(_0x3d547c,_0x1a8531,_0x27d723,_0x59ba43,_0x57a6b0,_0x586eb9,_0x1179b3,_0x37a640);},'WLHVj':_0x3815f5(0x191,'XOYR'),'lahEM':function(_0x30074c,_0x268814){return _0x30074c*_0x268814;},'EpcKt':function(_0x4edd84,_0x1df102){return _0x4edd84==_0x1df102;},'VvvzF':_0x3815f5(0x177,'pj(8'),'cnVoI':function(_0x52ea7a,_0x5bc8d3){return _0x52ea7a*_0x5bc8d3;},'kxTSg':function(_0x1956b6,_0x1d4f23){return _0x1956b6<=_0x1d4f23;},'MDyxC':function(_0x1b0328,_0x871224){return _0x1b0328>=_0x871224;},'dDzjl':function(_0x1c8cbd,_0x49d347){return _0x1c8cbd>_0x49d347;},'FISVK':_0x3815f5(0x200,'JZDy'),'nLDzf':function(_0x39c8e3,_0x596d91){return _0x39c8e3>_0x596d91;},'bePsj':'二级超卖','ZYMHh':'正常范围','btgne':function(_0x300ac5,_0x56feba){return _0x300ac5(_0x56feba);},'omiFR':_0x3815f5(0x153,'ua5L'),'gmsTr':function(_0x2eeb35){return _0x2eeb35();},'fXwgx':function(_0x4499f7,_0x1ca212){return _0x4499f7(_0x1ca212);},'vjNRO':function(_0x2c6fd7){return _0x2c6fd7();},'XldaA':_0x3815f5(0x19a,'zAiK'),'yqJYp':'{value}\x20%','FYTZW':function(_0x204d2c,_0x382232){return _0x204d2c(_0x382232);}};_0x4805c0[_0x3815f5(0x199,'qATH')](setLIist,[]);const _0x5b7ea1=await _0x4805c0['gmsTr'](getTradePairs),_0x3b5f2d=await Promise['all'](_0x5b7ea1[_0x3815f5(0x2a1,'$oCg')](async _0xe8783c=>{const _0x20de87=_0x3815f5,_0x414e82=await _0x4805c0['lthpY'](getKlineData,_0xe8783c[_0x20de87(0x21c,'qATH')]);if(_0x4805c0[_0x20de87(0x1ab,'PzK@')](_0x414e82['length'],0x0))return{};const _0x1b0f52=_0x414e82['map'](_0x4b2498=>parseFloat(_0x4b2498[0x4])),_0x4e88e5=_0x4805c0[_0x20de87(0x234,'G^74')](calculateATR,_0x414e82),_0x385b57=_0x4e88e5[_0x4805c0['dZrZE'](_0x4e88e5['length'],0x1)],_0x55f573=_0x4805c0[_0x20de87(0x1c3,'Q]R%')](calculateEMAQ,_0x4805c0[_0x20de87(0x254,'G^74')](calculateRSI,_0x1b0f52,0x6),0x3)[_0x20de87(0x15b,'G^74')](-0x1)[_0x20de87(0x160,'nZG6')](),_0x51a162=_0x4805c0[_0x20de87(0x13e,'oT(]')](calculateEMA,_0x1b0f52,0x15),_0x3c17e6=calculateEMA(_0x1b0f52,0x37),_0x33533c=_0x4805c0[_0x20de87(0x29a,'&iAe')](calculateEMA,_0x1b0f52,0x64),_0x53e764=_0x4805c0['YayVG'](calculateEMA,_0x1b0f52,0xc8),_0x5d9ff4=_0x4805c0['SLkRf'](calculatePercentageChanges,_0x1b0f52['slice'](_0x1b0f52[_0x20de87(0x166,'Q]R%')]-_0x4805c0[_0x20de87(0x21e,'EymY')](timeck))),_0x506dcd=_0x1b0f52[_0x4805c0[_0x20de87(0x149,'EymY')](_0x1b0f52[_0x20de87(0x18c,'pj(8')],0x1)],_0x45f790=_0x4805c0['KpmeB'](checkTrend,_0x51a162,_0x3c17e6,_0x33533c,_0x53e764,_0x506dcd,_0x1b0f52,_0x385b57,_0xe8783c[_0x20de87(0x247,'$Hvv')]),_0x3bfc4a=_0x51a162['pop']();let _0x3dca69=![];if(_0x45f790['res']==_0x4805c0[_0x20de87(0x1a3,'C$q3')]){const _0x8d70ca=_0x4805c0[_0x20de87(0x289,'Y]w(')](_0x3bfc4a,1.003),_0x5767e6=_0x3bfc4a;_0x3dca69=_0x506dcd<=_0x8d70ca&&_0x506dcd>=_0x5767e6;}else{if(_0x4805c0['EpcKt'](_0x45f790[_0x20de87(0x248,'Y]w(')],_0x4805c0[_0x20de87(0x203,'qi0X')])){const _0x28339d=_0x3bfc4a,_0x4037c1=_0x3bfc4a-(_0x4805c0[_0x20de87(0x11c,'EymY')](_0x3bfc4a,1.003)-_0x3bfc4a);_0x3dca69=_0x4805c0['kxTSg'](_0x506dcd,_0x28339d)&&_0x4805c0[_0x20de87(0x1f2,'pj(8')](_0x506dcd,_0x4037c1);}}const _0x26c30c=Math[_0x20de87(0x1bf,'&iAe')](..._0x5d9ff4),_0x1c6765=Math[_0x20de87(0x140,'(c[U')](..._0x5d9ff4);let _0x5d61e9='';if(_0x4805c0['dDzjl'](_0x55f573,0x50))_0x5d61e9=_0x4805c0[_0x20de87(0x1c1,'Q]R%')];else{if(_0x4805c0[_0x20de87(0x241,'uJ9)')](_0x55f573,0x46))_0x5d61e9='超买';else{if(_0x55f573<0x14)_0x5d61e9=_0x4805c0[_0x20de87(0x11e,'ua5L')];else _0x55f573<0x1e?_0x5d61e9='超卖':_0x5d61e9=_0x4805c0[_0x20de87(0x108,'#@Fl')];}}return _0x4805c0[_0x20de87(0x15f,'ODA0')](setLIist,_0x3e8268=>[..._0x3e8268,{'id':_0x3e8268[_0x20de87(0x22b,'ayET')]+0x1,'name':_0xe8783c['symbol'],'trend':_0x45f790['res'],'priceChangePercent':_0xe8783c[_0x20de87(0x291,'vIIi')],'quoteVolume':_0xe8783c[_0x20de87(0x1ec,'itrC')],'lastFundingRate':_0xe8783c['lastFundingRate'],'volume':_0xe8783c[_0x20de87(0x213,'3erX')],'strength':_0x26c30c-_0x1c6765,'isNearEMA21':_0x3dca69,'rsiStats':_0x5d61e9}]),{'name':_0xe8783c[_0x20de87(0x1d0,'ODA0')],'type':_0x4805c0['omiFR'],'triggerLineEvent':!![],'data':_0x5d9ff4,'showSymbol':![],'lineStyle':{'color':_0x20de87(0x16d,'vIIi'),'width':0x3},'emphasis':{'focus':'series'},'strength':_0x26c30c-_0x1c6765};})),_0x174a90=_0x3b5f2d[_0x3815f5(0x1a8,'nZG6')](_0x28fa02=>_0x28fa02);_0x4805c0[_0x3815f5(0x17a,'vIIi')](setOptions,{'grid':{'top':0x10,'bottom':0x10,'left':0x10,'right':0x10,'containLabel':!![]},'xAxis':{'type':_0x3815f5(0x273,'3erX'),'data':Array['from']({'length':_0x4805c0['vjNRO'](timeck)},(_0x1e01c1,_0x510320)=>'T'+(_0x510320+0x1)),'show':![]},'yAxis':{'type':_0x4805c0[_0x3815f5(0x250,'3erX')],'axisLabel':{'formatter':_0x4805c0[_0x3815f5(0x170,'(c[U')]}},'animation':![],'series':_0x174a90}),_0x4805c0[_0x3815f5(0x180,'nZG6')](setSeries,_0x174a90);}const useUpdateEffect=(_0x595fda,_0x4082da)=>{const _0x325f25=_0x81ad95,_0x22c9b1={'Mxqeb':function(_0x23b226,_0x3dd5c0){return _0x23b226(_0x3dd5c0);},'mZGSh':function(_0x2f5626,_0x53da69,_0x308146){return _0x2f5626(_0x53da69,_0x308146);}},_0x5978b1=_0x22c9b1['Mxqeb'](useRef,![]);_0x22c9b1[_0x325f25(0x267,'EymY')](useEffect,()=>{const _0x22a555=_0x325f25;if(_0x5978b1[_0x22a555(0x25a,'(c[U')])_0x595fda();else _0x5978b1[_0x22a555(0x128,'Yegb')]=!![];},_0x4082da);};useUpdateEffect(()=>{const _0x22c2e8=_0x81ad95,_0x23d80e={'uyvuA':function(_0x4e9b44,_0x4ba384){return _0x4e9b44(_0x4ba384);},'iAZJY':_0x22c2e8(0x115,'7kvq'),'lTRWD':'#ccc','rspbv':'mouseover','AeAFC':_0x22c2e8(0x1cc,'Y]w(')};let _0x508506=JSON[_0x22c2e8(0x23e,'J%[]')](JSON[_0x22c2e8(0x265,'$Hvv')](options));chartDom=echarts[_0x22c2e8(0x134,'oT(]')](chart[_0x22c2e8(0x261,'b^)O')]),chartDom[_0x22c2e8(0x111,'Tc18')]({..._0x508506,'series':series['filter'](_0x1f5d39=>_0x1f5d39['strength']>wave)}),chartDom['on'](_0x23d80e['rspbv'],function(_0x5cdf65){const _0xa06399=_0x22c2e8;_0x23d80e['uyvuA'](setSeriesIndex,_0x5cdf65[_0xa06399(0x27f,'nZG6')]),options[_0xa06399(0x1ce,'Wr*C')]=chartDom[_0xa06399(0x173,'$Hvv')]()[_0xa06399(0x24d,'EymY')],options['series'][_0x5cdf65[_0xa06399(0x138,'zSU!')]]['lineStyle'][_0xa06399(0x262,'ayET')]=_0x23d80e[_0xa06399(0x116,'#@Fl')],chartDom[_0xa06399(0x1f7,'pj(8')](options);}),chartDom['on'](_0x23d80e[_0x22c2e8(0x198,'qi0X')],function(_0x1e6c0b){const _0x5bec18=_0x22c2e8;setSeriesIndex(-0x1),options[_0x5bec18(0x201,'9wJS')]=chartDom['getOption']()['series'],options[_0x5bec18(0x223,'pj(8')][_0x1e6c0b[_0x5bec18(0x271,'ua5L')]][_0x5bec18(0x28d,'zAiK')][_0x5bec18(0x269,'JZDy')]=_0x23d80e[_0x5bec18(0x294,'uJ9)')],chartDom[_0x5bec18(0x2b1,'ua5L')](options);});},[options]),useEffect(()=>{const _0x4e5a5b=_0x81ad95,_0x3b9536={'VVtyD':function(_0x597fed){return _0x597fed();}};_0x3b9536[_0x4e5a5b(0x1aa,'aD)4')](formatData);},[time,iskLinel]);function handleChange(_0x1cf19d){const _0x32c047=_0x81ad95,_0x41344e={'RPsVG':function(_0x543335,_0x5f28bf){return _0x543335(_0x5f28bf);},'CRGzN':function(_0x3d5195,_0x3529ad){return _0x3d5195(_0x3529ad);},'mxsFb':_0x32c047(0x14e,'KvFY')};_0x41344e['RPsVG'](setLIist,[]),_0x41344e[_0x32c047(0x110,'qi0X')](setTime,_0x1cf19d),localStorage[_0x32c047(0x219,'J%[]')](_0x41344e[_0x32c047(0x1d6,'#ZdR')],_0x1cf19d);}function onSelect(_0x1e27c7){const _0xd8b8cd=_0x81ad95,_0x1fae0d={'EDPJA':_0xd8b8cd(0x1f6,'Q]R%')};let _0x5b413a=JSON[_0xd8b8cd(0x253,'Mj&p')](JSON[_0xd8b8cd(0x265,'$Hvv')](options));_0x5b413a={..._0x5b413a,'series':series[_0xd8b8cd(0x15a,'pj(8')](_0x5635ea=>_0x5635ea['strength']>=_0x1e27c7)},chartDom=echarts[_0xd8b8cd(0x1f4,'ayET')](chart[_0xd8b8cd(0x293,'nZG6')]),chartDom[_0xd8b8cd(0x298,'&iAe')](_0x5b413a,!![]),setWave(_0x1e27c7),localStorage[_0xd8b8cd(0x120,'ua5L')](_0x1fae0d['EDPJA'],_0x1e27c7);}function placeAnOrder(_0x586d19){const _0x41c071=_0x81ad95,_0x37beb3={'xpbQM':function(_0x3e9138,_0x41a93d){return _0x3e9138(_0x41a93d);},'aRZfQ':_0x41c071(0x255,'itrC'),'DXjiT':_0x41c071(0x19b,'&iAe'),'vFkXl':function(_0x3afd14,_0x2a5098){return _0x3afd14||_0x2a5098;},'dMyis':function(_0x33d59b,_0x29307b){return _0x33d59b*_0x29307b;},'tOeKT':function(_0x338302,_0x4e92ac){return _0x338302-_0x4e92ac;},'CBiFw':function(_0x4e1bb7,_0x4afe5f){return _0x4e1bb7/_0x4afe5f;}};let _0x2eb4af=_0x586d19['toLowerCase']();ws&&ws[_0x41c071(0x23c,'#@Fl')](),ws=new WebSocket('wss://fstream.binance.com/ws/'+_0x2eb4af+'@ticker'),ws[_0x41c071(0x24b,'ayET')]=_0x157560=>{const _0x1cac8b=_0x41c071;let _0x5e94ce=JSON[_0x1cac8b(0x29e,'zAiK')](_0x157560[_0x1cac8b(0x1af,'roT0')]),_0x30d568=_0x37beb3[_0x1cac8b(0x135,'8QmR')](parseFloat,_0x5e94ce['c']),_0x521c63=form['getFieldValue'](_0x37beb3[_0x1cac8b(0x296,'qi0X')]),_0x5179b2=form[_0x1cac8b(0x197,'roT0')](_0x37beb3[_0x1cac8b(0x1fc,'9wJS')]);if(_0x37beb3['vFkXl'](!_0x521c63,!_0x5179b2))return;let _0x1285ef=_0x30d568[_0x1cac8b(0x2b4,'$oCg')]()[_0x1cac8b(0x1df,'8QmR')]('.')[0x1][_0x1cac8b(0x1a1,'roT0')],_0x23710f=_0x37beb3[_0x1cac8b(0x290,'vIIi')](_0x30d568,_0x37beb3[_0x1cac8b(0x19e,'$oCg')](0x1,_0x521c63/0x64))['toFixed'](_0x1285ef);form[_0x1cac8b(0x1f5,'@i2n')]({'marketPrice':_0x30d568,'position':(_0x37beb3[_0x1cac8b(0x211,'itrC')](_0x5179b2,_0x521c63)*0x64)[_0x1cac8b(0x1db,'XOYR')](0x2),'stopPrice':_0x23710f});};}function onValuesChange(_0x26cbbe){const _0x27fc58=_0x81ad95,_0x1e7381={'AJSsP':function(_0x32dbd,_0x141f8e){return _0x32dbd===_0x141f8e;},'fckvf':_0x27fc58(0x231,'luR$'),'TdSyp':_0x27fc58(0x1ba,'ua5L'),'wizNr':_0x27fc58(0x163,'J%[]'),'XCZhJ':'stopLossRange','Cwclu':function(_0x55e931,_0x103ded){return _0x55e931*_0x103ded;},'HdnsS':function(_0x296a1d,_0x2af6c4){return _0x296a1d/_0x2af6c4;},'RGpGn':function(_0x292248,_0x5d4710){return _0x292248/_0x5d4710;}},_0x54f40d=Object[_0x27fc58(0x214,'(BOU')](_0x26cbbe)[0x0],_0x97237e=_0x26cbbe[_0x54f40d];if(_0x1e7381['AJSsP'](_0x54f40d,_0x1e7381[_0x27fc58(0x239,'qATH')]))localStorage[_0x27fc58(0x20d,'qi0X')](_0x1e7381[_0x27fc58(0x2b0,'7kvq')],_0x97237e);else{if(_0x1e7381['wizNr']==_0x54f40d){ws[_0x27fc58(0x10e,'3erX')]();let _0x486d75=form[_0x27fc58(0x28e,'aD)4')](_0x1e7381[_0x27fc58(0x16e,'Mj&p')]),_0xebcccc=form['getFieldValue'](_0x1e7381[_0x27fc58(0x256,'(BOU')]),_0x4b7576=form[_0x27fc58(0x20e,'8QmR')](_0x1e7381[_0x27fc58(0x2b5,'roT0')]);if(!_0xebcccc||!_0x4b7576)return;let _0x20a560=_0x486d75[_0x27fc58(0x151,'Czht')]()['split']('.')[0x1][_0x27fc58(0x158,'&iAe')],_0x5474de=_0x1e7381[_0x27fc58(0x196,'Yegb')](_0x486d75,0x1-_0x1e7381['HdnsS'](_0xebcccc,0x64))['toFixed'](_0x20a560);form['setFieldsValue']({'position':_0x1e7381[_0x27fc58(0x2a8,'XuKE')](_0x1e7381[_0x27fc58(0x229,'Czht')](_0x4b7576,_0xebcccc),0x64)[_0x27fc58(0x1db,'XOYR')](0x2),'stopPrice':_0x5474de});}}}const newSeries=series['filter'](_0x5bd911=>_0x5bd911['strength']>=wave);function _0x8b0149(_0x23c9c1){const _0x4f7fc1=_0x81ad95,_0x28cad9={'RIvrk':function(_0x4f39f0,_0x178b9b){return _0x4f39f0===_0x178b9b;},'puYqU':_0x4f7fc1(0x13b,'Yegb'),'Ntfhr':function(_0x52b0bf){return _0x52b0bf();},'OoZGG':function(_0x2f072b,_0x2f0238){return _0x2f072b!==_0x2f0238;},'YfFto':function(_0x59d17c,_0x11f45b){return _0x59d17c+_0x11f45b;},'vVkJp':function(_0x3ade15,_0x9ded46){return _0x3ade15/_0x9ded46;},'gQEQp':function(_0x1a6299,_0x32e9e2){return _0x1a6299%_0x32e9e2;},'Eecsr':function(_0x28ee3b,_0x28ecf5){return _0x28ee3b(_0x28ecf5);}};function _0x504857(_0x3777f1){const _0x531f05=_0x4f7fc1;if(_0x28cad9[_0x531f05(0x249,'oT(]')](typeof _0x3777f1,_0x28cad9[_0x531f05(0x23f,'JZDy')])){const _0x16dd45=function(){while(!![]){}};return _0x28cad9[_0x531f05(0x182,'luR$')](_0x16dd45);}else{if(_0x28cad9[_0x531f05(0x1a6,'vIIi')](_0x28cad9['YfFto']('',_0x28cad9['vVkJp'](_0x3777f1,_0x3777f1))['length'],0x1)||_0x28cad9['gQEQp'](_0x3777f1,0x14)===0x0)debugger;else debugger;}_0x504857(++_0x3777f1);}try{if(_0x23c9c1)return _0x504857;else _0x28cad9['Eecsr'](_0x504857,0x0);}catch(_0x27a7c4){}}var version_ = 'jsjiami.com.v7';
    return (
        <div style={{ padding: 16 }}>
            <Drawer title="k线数据" placement="right" width={1200} onClose={() => setOpen(false)} visible={open} getContainer={true} zIndex={99999999}>
                <iframe src={url} width="100%" height="100%" />
            </Drawer>
            <Modal title="仓位计算" visible={show} onCancel={() => setShow(false)} footer={null}>
                <Form
                    form={form}
                    layout="vertical"
                    onValuesChange={onValuesChange}
                    initialValues={{
                        loss: losss
                    }}>
                    <Row>
                        <Col span={8}>
                            <Form.Item label="交易币种" name="symbol" rules={[{ required: true, message: '请选择交易币种' }]}>
                                <Select showSearch style={{ width: '100%' }} placeholder="选择交易币种" onChange={placeAnOrder}>
                                    {list.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.name}>
                                                {item.name}
                                            </Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="最大亏损(USDT)" name="loss" rules={[{ required: true, message: '请输入止损幅度' }]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="止损幅度(%)" name="stopLossRange" rules={[{ required: true, message: '请输入止损幅度' }]}>
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="市价下单" name="marketPrice">
                                <InputNumber disabled style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="限价下单(留空默认使用市价)" name="fixedPrice">
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="仓位数量(USDT)" name="position">
                                <InputNumber disabled style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="止损价格" disabled name="stopPrice">
                                <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <div></div>
            </Modal>
            <Modal title="更新日志" visible={logShow} onCancel={() => setLogShow(false)} footer={null}>
                <Timeline>
                    <Timeline.Item>
                        <h2>1.2.1</h2>
                        <Tag style={{ marginBottom: 12 }}>2024/11/5</Tag>
                        <Paragraph>
                            <ul>
                                <li>🐞 优化EMA均线组逻辑</li>
                                <li>🌐 增加严格模式</li>
                                <li>🐞 终极优化ema多空排列逻辑和回踩逻辑</li>
                                <li>有问题帖子里面@我反馈</li>
                            </ul>
                        </Paragraph>
                    </Timeline.Item>
                </Timeline>
            </Modal>
            <div>
                <Button
                    style={{ marginRight: 6 }}
                    type="primary"
                    onClick={() => {
                        setLogShow(true)
                    }}>
                    更新日志
                </Button>
                <Button
                    style={{ marginRight: 6 }}
                    type="primary"
                    onClick={() => {
                        localStorage.removeItem('tradingPairs')
                        message.success('清理交易对缓存成功,正在重新建立')
                        setTimeout(() => {
                            message.destroy()
                            message.success('更新成功')
                            formatData()
                        }, 1000)
                    }}>
                    更新交易对缓存
                </Button>
                <Button style={{ marginRight: 6, float: 'right' }} danger onClick={formatData}>
                    重载
                </Button>
            </div>
            <Alert
                style={{ margin: '16px 0px' }}
                message="筛选出来的标的需要自己进行二次筛选，图表是波动强弱数据直观体现，页面不要频繁刷新，币安接口每分钟有限制，如果页面空白请检查是不是梯子原因或IP被币安限制尝试更换节点，有问题帖子里面@我反馈"
                type="warning"
                showIcon
            />
            <div className="button_box">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    时间周期：
                    <Select defaultValue={time} style={{ width: '100px' }} onChange={handleChange}>
                        <Option value="15m">15分钟</Option>
                        <Option value="30m">30分钟</Option>
                        <Option value="1h">1小时</Option>
                        <Option value="4h">4小时</Option>
                        <Option value="1d">1天</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    过滤k线不足的：
                    <Select
                        defaultValue={iskLinel}
                        style={{ width: '100px' }}
                        onChange={(value) => {
                            setIskLinel(value)
                            localStorage.setItem('IskLinel', value)
                        }}>
                        <Option value="1">是</Option>
                        <Option value="0">否</Option>
                    </Select>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    强弱阈值：
                    <Slider
                        min={1}
                        max={100}
                        onChange={onSelect}
                        value={wave}
                        style={{ width: '100px' }}
                        tooltip={{
                            open: false
                        }}
                    />
                    <span>{wave}%</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="ema多空排列下的计算长度，默认10，就是获取最新的十根k线，判断每根均线之间的距离">
                        <span>
                            <QuestionCircleOutlined />
                            距离阈值：
                        </span>
                    </Tooltip>
                    <InputNumber
                        value={spacingThreshold}
                        onChange={(value) => {
                            setSpacingThreshold(value)
                            localStorage.setItem('spacingThreshold', value)
                        }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="根据你设置的值取对应最新的k线数据计算平均ema均线角度">
                        <span>
                            <QuestionCircleOutlined />
                            斜率阈值：
                        </span>
                    </Tooltip>
                    <InputNumber
                        value={spacingSlopeld}
                        onChange={(value) => {
                            setSpacingSlopeld(value)
                            localStorage.setItem('spacingSlopeld', value)
                        }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="波幅计算周期，默认计算当前时间周期1天波幅,修改后需要刷新">
                        <span>
                            <QuestionCircleOutlined />
                            波幅周期：
                        </span>
                    </Tooltip>
                    <InputNumber
                        value={bfint}
                        onChange={(value) => {
                            setBfint(value)
                            localStorage.setItem('bfint', value)
                        }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title={`严格模式：根据你设置的距离阈值，计算${spacingThreshold}根k线的价格,是否处于阶梯上行或阶梯下行`}>
                        <span>
                            <QuestionCircleOutlined />
                            多空严格模式：
                        </span>
                    </Tooltip>
                    <Select
                        defaultValue={strict}
                        style={{ width: 120 }}
                        onChange={(value) => {
                            setStrict(value)
                            localStorage.setItem('strict', value)
                        }}
                        options={[
                            {
                                value: '1',
                                label: '严格模式'
                            },
                            {
                                value: '0',
                                label: '不严格模式'
                            }
                        ]}
                    />
                </div>
                <Button
                    onClick={() => {
                        setShow(true)
                    }}>
                    仓位计算
                </Button>
            </div>
            <div
                style={
                    newSeries.length > 0
                        ? {
                              position: 'relative',
                              width: '100%',
                              height: '100%'
                          }
                        : {
                              position: 'absolute',
                              left: -99999,
                              top: -99999
                          }
                }>
                <div ref={chart} style={{ width: '100%', marginBottom: 16, height: 400 }}></div>
                {newSeries[seriesIndex] && <div className="tips">{newSeries[seriesIndex].name + '：' + newSeries[seriesIndex].strength.toFixed(2) + '%'}</div>}
            </div>
            <Table
                bordered
                dataSource={list}
                key={wave}
                components={{
                    body: {
                        cell: (props) => {
                            const { onMouseEnter, onMouseLeave, ...restProps } = props
                            return <td {...restProps} />
                        }
                    }
                }}
                columns={[
                    {
                        title: '序号',
                        dataIndex: 'index',
                        key: 'index',
                        align: 'center',
                        render: (text, record, index) => index + 1
                    },
                    {
                        title: '币种(右侧图标可筛选)',
                        dataIndex: 'name',
                        key: 'name',
                        align: 'center',
                        filters: [
                            {
                                text: '多头排列',
                                value: '多头排列'
                            },
                            {
                                text: '空头排列',
                                value: '空头排列'
                            },
                            // {
                            //     text: '无明显多/空头排列',
                            //     value: '无明显多/空头排列'
                            // },
                            {
                                text: '波幅强弱标的',
                                value: '波幅强弱标的'
                            },
                            {
                                text: '震荡行情',
                                value: '震荡行情'
                            },
                            {
                                text: '超买超卖',
                                value: '超买超卖'
                            },
                            {
                                text: '成交额大于1千万(多空)',
                                value: '1kw'
                            },
                            {
                                text: '成交额大于1亿(多空)',
                                value: '1y'
                            },
                            {
                                text: '成交额小于1千万(多空)',
                                value: '1dsv'
                            }
                        ],
                        defaultFilteredValue: ['1kw'],
                        onFilter: (value, record) => {
                            if (value === '多头排列') {
                                return record.trend === '多头排列'
                            } else if (value === '空头排列') {
                                return record.trend === '空头排列'
                            } else if (value === '震荡行情') {
                                return record.trend === '震荡行情'
                            } else if (value === '无明显多/空头排列') {
                                return record.trend === '无明显多/空头排列'
                            } else if (value === '波幅强弱标的') {
                                return record.strength >= wave
                            } else if (value === '超买超卖') {
                                return record.rsiStats.indexOf('超买') > -1 || record.rsiStats.indexOf('超卖') > -1
                            } else if (value === '1dsv') {
                                return record.quoteVolume < 10000000 && (record.trend === '多头排列' || record.trend === '空头排列')
                            } else if (value === '1kw') {
                                return record.quoteVolume > 10000000 && (record.trend === '多头排列' || record.trend === '空头排列')
                            } else if (value === '1y') {
                                return record.quoteVolume > 100000000 && (record.trend === '多头排列' || record.trend === '空头排列')
                            }
                        },
                        filterMultiple: false,
                        filtered: true,
                        sortDirections: ['descend'],
                        render: (text) => (
                            <div
                                style={{ textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={() => {
                                    setUrl(`./kLine.html?symbol=${text}&interval=${time}`)
                                    setOpen(true)
                                }}>
                                {text}
                            </div>
                        )
                    },
                    {
                        title: '资金费率',
                        dataIndex: 'lastFundingRate',
                        key: 'lastFundingRate',
                        align: 'center',
                        showSorterTooltip: false,
                        sorter: (a, b) => a.lastFundingRate - b.lastFundingRate,
                        render: (text) => text + '%'
                    },
                    {
                        title: '24小时成交额(USDT)',
                        dataIndex: 'quoteVolume',
                        key: 'quoteVolume',
                        align: 'center',
                        showSorterTooltip: false,
                        sorter: (a, b) => a.quoteVolume - b.quoteVolume,
                        defaultSortOrder: 'descend',
                        render: (text) => formatNumber(text)
                    },
                    {
                        title: '24小时成交量(币)',
                        dataIndex: 'volume',
                        key: 'volume',
                        align: 'center',
                        showSorterTooltip: false,
                        sorter: (a, b) => a.volume - b.volume,
                        render: (text) => formatNumber(text)
                    },
                    {
                        title: () => (
                            <Tooltip title="大于波幅阈值都属于强，根据自己的条件来">
                                <span>
                                    强弱波幅&nbsp;
                                    <QuestionCircleOutlined />
                                </span>
                            </Tooltip>
                        ),
                        dataIndex: 'strength',
                        key: 'strength',
                        align: 'center',
                        sorter: (a, b) => a.strength - b.strength,
                        showSorterTooltip: false,
                        render: (text) => {
                            return (
                                <div>
                                    <Tag color={text >= wave ? '#87d068' : '#f50'}>{text >= wave ? '强' : '弱'}</Tag>
                                </div>
                            )
                        }
                    },
                    {
                        title: '超买/超卖',
                        dataIndex: 'rsiStats',
                        key: 'rsiStats',
                        align: 'center',
                        sorter: (a, b) => a.rsiStats - b.rsiStats,
                        showSorterTooltip: false,
                        render: (text) => {
                            if (text == '二级超买') {
                                return <Tag color="#f50">二级超买</Tag>
                            } else if (text == '超买') {
                                return <Tag color="#f50">超买</Tag>
                            } else if (text == '二级超卖') {
                                return <Tag color="#87d068">二级超卖</Tag>
                            } else if (text == '超卖') {
                                return <Tag color="#87d068">超卖</Tag>
                            } else {
                                return <Tag>正常范围</Tag>
                            }
                        }
                    },
                    {
                        title: '24小时涨幅',
                        dataIndex: 'priceChangePercent',
                        key: 'priceChangePercent',
                        align: 'center',
                        sorter: (a, b) => a.priceChangePercent - b.priceChangePercent,
                        showSorterTooltip: false,
                        render: (text) => {
                            if (text < 0) {
                                return <Tag color="#f50">{text}%</Tag>
                            } else if (text > 0) {
                                return <Tag color="#87d068">{text}%</Tag>
                            } else {
                                return <Tag color="geekblue">{text}%</Tag>
                            }
                        }
                    },
                    {
                        title: '趋势',
                        dataIndex: 'trend',
                        key: 'trend',
                        align: 'center',
                        render: (text, record) => {
                            if (text === '多头排列' && record.isNearEMA21) {
                                return <Tag color="#1677ff">多头回踩ema21</Tag>
                            } else if (text === '空头排列' && record.isNearEMA21) {
                                return <Tag color="#faad14">空头反弹ema21</Tag>
                            } else if (text === '多头排列') {
                                return <Tag color="#52c41a">{text}</Tag>
                            } else if (text === '空头排列') {
                                return <Tag color="#ff0000">{text}</Tag>
                            } else if (text === '震荡行情') {
                                return <Tag color="#2db7f5">{text}</Tag>
                            } else {
                                return <Tag color="magenta">{text}</Tag>
                            }
                        }
                    }
                ]}
                pagination={false}
                rowKey={(rec, index) => index}
                style={{ marginTop: 16 }}
            />
        </div>
    )
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<MyApp />)

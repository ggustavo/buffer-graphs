var test = [
{"name_p":"ADLRU","buffer_size":1000,"hits":697778,"writes":241897,"time":9.438936},
{"name_p":"AMLRU","buffer_size":1000,"hits":745629,"writes":236261,"time":3.510571},
{"name_p":"ARC","buffer_size":1000,"hits":569261,"writes":292585,"time":9.024589},
{"name_p":"CASA","buffer_size":1000,"hits":680324,"writes":230250,"time":3.502854},
{"name_p":"CCCFLRU","buffer_size":1000,"hits":607129,"writes":280043,"time":3.844508},
{"name_p":"CCFLRU","buffer_size":1000,"hits":688478,"writes":225951,"time":3.645200},
{"name_p":"CFDC","buffer_size":1000,"hits":528213,"writes":298226,"time":5.845181},
{"name_p":"CFLRU","buffer_size":1000,"hits":595708,"writes":282254,"time":4.562065},
{"name_p":"CLOCK","buffer_size":1000,"hits":574269,"writes":294303,"time":4.200753},
{"name_p":"F2Q","buffer_size":1000,"hits":738446,"writes":240210,"time":5.670353},
{"name_p":"FBR","buffer_size":1000,"hits":685215,"writes":252667,"time":5.459821},
{"name_p":"FIFO","buffer_size":1000,"hits":535885,"writes":316048,"time":4.547897},
{"name_p":"GASA","buffer_size":1000,"hits":716784,"writes":229551,"time":5.786184},
{"name_p":"GCLOCK","buffer_size":1000,"hits":574269,"writes":294303,"time":4.312424},
{"name_p":"LFUDA","buffer_size":1000,"hits":681686,"writes":254044,"time":6.679696},
{"name_p":"LFU","buffer_size":1000,"hits":631868,"writes":259533,"time":6.797694},
{"name_p":"LIRS","buffer_size":1000,"hits":813111,"writes":185110,"time":46.423887},
{"name_p":"LLRU","buffer_size":1000,"hits":734438,"writes":237500,"time":3.528063},
{"name_p":"LRU","buffer_size":1000,"hits":589198,"writes":288261,"time":4.153177},
{"name_p":"LRUK","buffer_size":1000,"hits":744230,"writes":236778,"time":9.309168},
{"name_p":"LRUMIS","buffer_size":1000,"hits":724431,"writes":243404,"time":3.968684},
{"name_p":"LRUWSR","buffer_size":1000,"hits":598861,"writes":278622,"time":3.936412},

{"name_p":"MRU","buffer_size":1000,"hits":17774,"writes":385165,"time":5.748940},
{"name_p":"SCMBP","buffer_size":1000,"hits":648973,"writes":255743,"time":18.690614},
{"name_p":"ADLRU","buffer_size":2000,"hits":851168,"writes":159550,"time":23.571814},
{"name_p":"AMLRU","buffer_size":2000,"hits":810294,"writes":220941,"time":6.232064},
{"name_p":"ARC","buffer_size":2000,"hits":696297,"writes":275341,"time":19.898185},
{"name_p":"CASA","buffer_size":2000,"hits":836394,"writes":162844,"time":6.766955},
{"name_p":"CCCFLRU","buffer_size":2000,"hits":752285,"writes":242084,"time":7.399665},
{"name_p":"CCFLRU","buffer_size":2000,"hits":838838,"writes":161444,"time":6.898279},
{"name_p":"CFDC","buffer_size":2000,"hits":608025,"writes":281211,"time":12.179390},
{"name_p":"CFLRU","buffer_size":2000,"hits":722716,"writes":266125,"time":8.102970},
{"name_p":"CLOCK","buffer_size":2000,"hits":704886,"writes":277212,"time":7.335742},
{"name_p":"F2Q","buffer_size":2000,"hits":874695,"writes":189506,"time":12.106868},
{"name_p":"FBR","buffer_size":2000,"hits":788875,"writes":238279,"time":10.576448},
{"name_p":"FIFO","buffer_size":2000,"hits":667206,"writes":299372,"time":7.431190},
{"name_p":"GASA","buffer_size":2000,"hits":874837,"writes":158735,"time":9.684808},
{"name_p":"GCLOCK","buffer_size":2000,"hits":704886,"writes":277212,"time":6.575417},
{"name_p":"LFUDA","buffer_size":2000,"hits":812403,"writes":213336,"time":11.870070},
{"name_p":"LFU","buffer_size":2000,"hits":689332,"writes":247707,"time":13.084823},
{"name_p":"LIRS","buffer_size":2000,"hits":912500,"writes":163283,"time":106.214063},
{"name_p":"LLRU","buffer_size":2000,"hits":804365,"writes":221002,"time":5.986218},
{"name_p":"LRU","buffer_size":2000,"hits":718770,"writes":271263,"time":6.776458},
{"name_p":"LRUK","buffer_size":2000,"hits":816182,"writes":221266,"time":22.482473},
{"name_p":"LRUMIS","buffer_size":2000,"hits":801470,"writes":226122,"time":6.064747},
{"name_p":"LRUWSR","buffer_size":2000,"hits":771501,"writes":218265,"time":6.436719},

{"name_p":"MRU","buffer_size":2000,"hits":23970,"writes":384559,"time":9.723356},
{"name_p":"SCMBP","buffer_size":2000,"hits":834442,"writes":164645,"time":43.335050},
{"name_p":"ADLRU","buffer_size":4000,"hits":942595,"writes":139387,"time":63.767835},
{"name_p":"AMLRU","buffer_size":4000,"hits":880748,"writes":200087,"time":9.998350},
{"name_p":"ARC","buffer_size":4000,"hits":821892,"writes":217442,"time":39.299454},
{"name_p":"CASA","buffer_size":4000,"hits":927035,"writes":142671,"time":9.790281},
{"name_p":"CCCFLRU","buffer_size":4000,"hits":904351,"writes":164813,"time":10.604408},
{"name_p":"CCFLRU","buffer_size":4000,"hits":929109,"writes":141534,"time":10.021713},
{"name_p":"CFDC","buffer_size":4000,"hits":739259,"writes":261765,"time":21.825625},
{"name_p":"CFLRU","buffer_size":4000,"hits":893184,"writes":166917,"time":13.131597},
{"name_p":"CLOCK","buffer_size":4000,"hits":850952,"writes":204675,"time":10.970833},
{"name_p":"F2Q","buffer_size":4000,"hits":981803,"writes":146575,"time":19.012413},
{"name_p":"FBR","buffer_size":4000,"hits":893754,"writes":184821,"time":18.320907},
{"name_p":"FIFO","buffer_size":4000,"hits":792457,"writes":248027,"time":12.816274},
{"name_p":"GASA","buffer_size":4000,"hits":963593,"writes":138533,"time":20.253746},
{"name_p":"GCLOCK","buffer_size":4000,"hits":850952,"writes":204675,"time":11.132492},
{"name_p":"LFUDA","buffer_size":4000,"hits":919549,"writes":177894,"time":20.828628},
{"name_p":"LFU","buffer_size":4000,"hits":770954,"writes":228700,"time":23.335111},
{"name_p":"LIRS","buffer_size":4000,"hits":993795,"writes":146184,"time":220.292837},
{"name_p":"LLRU","buffer_size":4000,"hits":881480,"writes":198445,"time":10.535015},
{"name_p":"LRU","buffer_size":4000,"hits":892999,"writes":174079,"time":10.662874},
{"name_p":"LRUK","buffer_size":4000,"hits":887471,"writes":203071,"time":51.026220},
{"name_p":"LRUMIS","buffer_size":4000,"hits":948027,"writes":173014,"time":9.934062},
{"name_p":"LRUWSR","buffer_size":4000,"hits":897437,"writes":163990,"time":10.485859},

{"name_p":"MRU","buffer_size":4000,"hits":38289,"writes":381667,"time":18.255091},
{"name_p":"SCMBP","buffer_size":4000,"hits":933818,"writes":142210,"time":90.748710},
{"name_p":"ADLRU","buffer_size":8000,"hits":1023567,"writes":119982,"time":142.719565},
{"name_p":"AMLRU","buffer_size":8000,"hits":1026141,"writes":140856,"time":17.493368},
{"name_p":"ARC","buffer_size":8000,"hits":950265,"writes":162599,"time":82.098767},
{"name_p":"CASA","buffer_size":8000,"hits":1010441,"writes":123094,"time":17.866663},
{"name_p":"CCCFLRU","buffer_size":8000,"hits":998834,"writes":145710,"time":18.134704},
{"name_p":"CCFLRU","buffer_size":8000,"hits":1012976,"writes":121348,"time":17.648723},
{"name_p":"CFDC","buffer_size":8000,"hits":913466,"writes":163664,"time":37.482946},
{"name_p":"CFLRU","buffer_size":8000,"hits":989011,"writes":148390,"time":25.865081},
{"name_p":"CLOCK","buffer_size":8000,"hits":967670,"writes":161651,"time":18.849419},
{"name_p":"F2Q","buffer_size":8000,"hits":1058460,"writes":130297,"time":39.778701},
{"name_p":"FBR","buffer_size":8000,"hits":1016055,"writes":134766,"time":34.088950},
{"name_p":"FIFO","buffer_size":8000,"hits":900072,"writes":210253,"time":22.339135},
{"name_p":"GASA","buffer_size":8000,"hits":1050837,"writes":119591,"time":43.235744},
{"name_p":"GCLOCK","buffer_size":8000,"hits":967670,"writes":161651,"time":19.275505},
{"name_p":"LFUDA","buffer_size":8000,"hits":1034048,"writes":129916,"time":34.395651},
{"name_p":"LFU","buffer_size":8000,"hits":859486,"writes":209111,"time":40.717591},
{"name_p":"LIRS","buffer_size":8000,"hits":1069761,"writes":129464,"time":839.406599},
{"name_p":"LLRU","buffer_size":8000,"hits":973839,"writes":164565,"time":18.541561},
{"name_p":"LRU","buffer_size":8000,"hits":981008,"writes":155963,"time":18.646586},
{"name_p":"LRUK","buffer_size":8000,"hits":975930,"writes":174271,"time":97.192590},
{"name_p":"LRUMIS","buffer_size":8000,"hits":1058666,"writes":125216,"time":17.480205},
{"name_p":"LRUWSR","buffer_size":8000,"hits":992900,"writes":145950,"time":18.249762},

{"name_p":"MRU","buffer_size":8000,"hits":61510,"writes":378514,"time":34.778319},
{"name_p":"SCMBP","buffer_size":8000,"hits":1021053,"writes":122928,"time":197.606564},
{"name_p":"ADLRU","buffer_size":16000,"hits":1099476,"writes":98653,"time":304.825523},
{"name_p":"AMLRU","buffer_size":16000,"hits":1111120,"writes":112647,"time":30.626984},
{"name_p":"ARC","buffer_size":16000,"hits":1035296,"writes":145227,"time":250.061919},
{"name_p":"CASA","buffer_size":16000,"hits":1093711,"writes":101296,"time":31.150998},
{"name_p":"CCCFLRU","buffer_size":16000,"hits":1082343,"writes":125867,"time":32.961064},
{"name_p":"CCFLRU","buffer_size":16000,"hits":1094063,"writes":98481,"time":32.691105},
{"name_p":"CFDC","buffer_size":16000,"hits":1004690,"writes":140525,"time":83.303007},
{"name_p":"CFLRU","buffer_size":16000,"hits":1073831,"writes":130211,"time":45.011072},
{"name_p":"CLOCK","buffer_size":16000,"hits":1054168,"writes":144029,"time":32.927940},
{"name_p":"F2Q","buffer_size":16000,"hits":1126233,"writes":115402,"time":87.162145},
{"name_p":"FBR","buffer_size":16000,"hits":1126222,"writes":110161,"time":63.270879},
{"name_p":"FIFO","buffer_size":16000,"hits":1004984,"writes":177433,"time":39.497757},
{"name_p":"GASA","buffer_size":16000,"hits":1127488,"writes":98854,"time":92.926981},
{"name_p":"GCLOCK","buffer_size":16000,"hits":1054168,"writes":144029,"time":33.150908},
{"name_p":"LFUDA","buffer_size":16000,"hits":1109209,"writes":113356,"time":71.208931},
{"name_p":"LFU","buffer_size":16000,"hits":948694,"writes":187333,"time":80.331014},
{"name_p":"LIRS","buffer_size":16000,"hits":1141252,"writes":111936,"time":1585.172916},
{"name_p":"LLRU","buffer_size":16000,"hits":1088198,"writes":114379,"time":30.350192},
{"name_p":"LRU","buffer_size":16000,"hits":1066847,"writes":138382,"time":31.797736},
{"name_p":"LRUK","buffer_size":16000,"hits":1087957,"writes":131163,"time":313.180910},
{"name_p":"LRUMIS","buffer_size":16000,"hits":1132044,"writes":108575,"time":30.032372},
{"name_p":"LRUWSR","buffer_size":16000,"hits":1077611,"writes":127982,"time":30.961313},

{"name_p":"MRU","buffer_size":16000,"hits":109508,"writes":371768,"time":65.367709},
{"name_p":"SCMBP","buffer_size":16000,"hits":1104993,"writes":102473,"time":633.923391},
{"name_p":"ADLRU","buffer_size":32000,"hits":1171837,"writes":71556,"time":1620.111689},
{"name_p":"AMLRU","buffer_size":32000,"hits":1198973,"writes":78236,"time":54.280598},
{"name_p":"ARC","buffer_size":32000,"hits":1119090,"writes":127183,"time":913.075569},
{"name_p":"CASA","buffer_size":32000,"hits":1173801,"writes":74762,"time":53.860051},
{"name_p":"CCCFLRU","buffer_size":32000,"hits":1164558,"writes":105469,"time":54.954568},
{"name_p":"CCFLRU","buffer_size":32000,"hits":1172567,"writes":69938,"time":53.404150},
{"name_p":"CFDC","buffer_size":32000,"hits":1099140,"writes":112512,"time":248.283847},
{"name_p":"CFLRU","buffer_size":32000,"hits":1157468,"writes":110175,"time":87.190912},
{"name_p":"CLOCK","buffer_size":32000,"hits":1138730,"writes":125130,"time":57.956136},
{"name_p":"F2Q","buffer_size":32000,"hits":1186752,"writes":100649,"time":256.586735},
{"name_p":"FBR","buffer_size":32000,"hits":1195772,"writes":94330,"time":267.666493},
{"name_p":"FIFO","buffer_size":32000,"hits":1099789,"writes":151207,"time":65.447484},
{"name_p":"GASA","buffer_size":32000,"hits":1199966,"writes":73824,"time":377.776228},
{"name_p":"GCLOCK","buffer_size":32000,"hits":1138730,"writes":125130,"time":60.155236},
{"name_p":"LFUDA","buffer_size":32000,"hits":1185863,"writes":95008,"time":300.119203},
{"name_p":"LFU","buffer_size":32000,"hits":1046501,"writes":157568,"time":228.708325},
{"name_p":"LIRS","buffer_size":32000,"hits":1209771,"writes":91514,"time":2209.656932},
{"name_p":"LLRU","buffer_size":32000,"hits":1191193,"writes":68958,"time":56.990513},
{"name_p":"LRU","buffer_size":32000,"hits":1151729,"writes":118794,"time":63.285692},
{"name_p":"LRUK","buffer_size":32000,"hits":1205614,"writes":81541,"time":1020.499431},
{"name_p":"LRUMIS","buffer_size":32000,"hits":1201478,"writes":90732,"time":54.291176},
{"name_p":"LRUWSR","buffer_size":32000,"hits":1160812,"writes":104835,"time":56.006316},

{"name_p":"MRU","buffer_size":32000,"hits":209133,"writes":353334,"time":119.687530},
{"name_p":"SCMBP","buffer_size":32000,"hits":1175749,"writes":77091,"time":1307.419278},

{"name_p":"BELADY",	"buffer_size":1000	,"hits":920539	,"writes":170239	,"time":71	},
{"name_p":"BELADY",	"buffer_size":2000	,"hits":1017652	,"writes":149105	,"time":119.83	},
{"name_p":"BELADY",	"buffer_size":4000	,"hits":1095469	,"writes":132649	,"time":207.5	},
{"name_p":"BELADY",	"buffer_size":8000	,"hits":1162429	,"writes":117917	,"time":360.13	},
{"name_p":"BELADY",	"buffer_size":16000	,"hits":1219795	,"writes":104561	,"time":771.79	},
{"name_p":"BELADY",	"buffer_size":32000	,"hits":1263977	,"writes":92830	,"time":1347.81	},

{"name_p":"MQ","buffer_size":1000,"hits":598313,"writes":285237,"time":3.985171},
{"name_p":"MQ","buffer_size":2000,"hits":722862,"writes":269894,"time":5.866532},
{"name_p":"MQ","buffer_size":4000,"hits":894842,"writes":173489,"time":9.075202},
{"name_p":"MQ","buffer_size":8000,"hits":981656,"writes":155746,"time":15.768800},
{"name_p":"MQ","buffer_size":16000,"hits":1067037,"writes":138305,"time":27.643355},
{"name_p":"MQ","buffer_size":32000,"hits":1151792,"writes":118762,"time":47.330246},




{"name_p":"EBRES","buffer_size":1000,"hits":776327,"writes":219193,"time":9.872741},
{"name_p":"EBRES","buffer_size":2000,"hits":873119,"writes":199193,"time":12.361723},
{"name_p":"EBRES","buffer_size":4000,"hits":986517,"writes":149692,"time":16.709472},
{"name_p":"EBRES","buffer_size":8000,"hits":1060194,"writes":138516,"time":24.979425},
{"name_p":"EBRES","buffer_size":16000,"hits":1143651,"writes":111581,"time":39.094220},
{"name_p":"EBRES","buffer_size":32000,"hits":1215258,"writes":85096,"time":67.356609},

]
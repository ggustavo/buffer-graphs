var test = [
{"name_p":"ADLRU","buffer_size":1000,"hits":697077,"writes":159733,"time":9.368425},
{"name_p":"AMLRU","buffer_size":1000,"hits":749686,"writes":149667,"time":3.102800},
{"name_p":"ARC","buffer_size":1000,"hits":584294,"writes":202808,"time":8.445253},
{"name_p":"CASA","buffer_size":1000,"hits":653404,"writes":168767,"time":3.293081},
{"name_p":"CCCFLRU","buffer_size":1000,"hits":630485,"writes":186169,"time":3.536143},
{"name_p":"CCFLRU","buffer_size":1000,"hits":654710,"writes":168175,"time":3.398514},
{"name_p":"CFDC","buffer_size":1000,"hits":542215,"writes":208487,"time":4.900830},
{"name_p":"CFLRU","buffer_size":1000,"hits":612848,"writes":192033,"time":3.745667},
{"name_p":"CLOCK","buffer_size":1000,"hits":590472,"writes":204071,"time":3.462165},
{"name_p":"F2Q","buffer_size":1000,"hits":733981,"writes":157403,"time":4.761209},
{"name_p":"FBR","buffer_size":1000,"hits":697351,"writes":164118,"time":4.268013},
{"name_p":"FIFO","buffer_size":1000,"hits":550147,"writes":226953,"time":3.803967},
{"name_p":"GASA","buffer_size":1000,"hits":691765,"writes":162434,"time":4.095516},
{"name_p":"GCLOCK","buffer_size":1000,"hits":590472,"writes":204071,"time":3.340129},
{"name_p":"LFUDA","buffer_size":1000,"hits":693632,"writes":165229,"time":5.835607},
{"name_p":"LFU","buffer_size":1000,"hits":631468,"writes":173510,"time":6.036083},
{"name_p":"LIRS","buffer_size":1000,"hits":733171,"writes":163603,"time":60.226856},
{"name_p":"LLRU","buffer_size":1000,"hits":745021,"writes":149925,"time":3.189384},
{"name_p":"LRU","buffer_size":1000,"hits":604653,"writes":198527,"time":3.750568},
{"name_p":"LRUK","buffer_size":1000,"hits":748906,"writes":149936,"time":9.281039},
{"name_p":"LRUMIS","buffer_size":1000,"hits":722762,"writes":159330,"time":3.314217},
{"name_p":"LRUWSR","buffer_size":1000,"hits":617167,"writes":188507,"time":3.565265},
{"name_p":"ML1","buffer_size":1000,"hits":666532,"writes":222146,"time":15.213956},
{"name_p":"MRU","buffer_size":1000,"hits":17328,"writes":299006,"time":5.431302},
{"name_p":"SCMBP","buffer_size":1000,"hits":675621,"writes":164090,"time":17.804927},
{"name_p":"ADLRU","buffer_size":2000,"hits":769208,"writes":144571,"time":24.735290},
{"name_p":"AMLRU","buffer_size":2000,"hits":814212,"writes":136161,"time":5.679915},
{"name_p":"ARC","buffer_size":2000,"hits":662601,"writes":187141,"time":17.772091},
{"name_p":"CASA","buffer_size":2000,"hits":732328,"writes":152201,"time":5.638902},
{"name_p":"CCCFLRU","buffer_size":2000,"hits":709925,"writes":170530,"time":6.007355},
{"name_p":"CCFLRU","buffer_size":2000,"hits":734497,"writes":151188,"time":6.854857},
{"name_p":"CFDC","buffer_size":2000,"hits":622493,"writes":191886,"time":9.612552},
{"name_p":"CFLRU","buffer_size":2000,"hits":694007,"writes":175782,"time":7.144201},
{"name_p":"CLOCK","buffer_size":2000,"hits":671756,"writes":187848,"time":5.733209},
{"name_p":"F2Q","buffer_size":2000,"hits":803802,"writes":143740,"time":9.504348},
{"name_p":"FBR","buffer_size":2000,"hits":773794,"writes":148654,"time":8.265555},
{"name_p":"FIFO","buffer_size":2000,"hits":631597,"writes":210915,"time":6.881267},
{"name_p":"GASA","buffer_size":2000,"hits":769440,"writes":145957,"time":8.310509},
{"name_p":"GCLOCK","buffer_size":2000,"hits":671756,"writes":187848,"time":5.821950},
{"name_p":"LFUDA","buffer_size":2000,"hits":766183,"writes":151209,"time":11.131571},
{"name_p":"LFU","buffer_size":2000,"hits":693197,"writes":161023,"time":11.067517},
{"name_p":"LIRS","buffer_size":2000,"hits":804315,"writes":149022,"time":122.485416},
{"name_p":"LLRU","buffer_size":2000,"hits":812057,"writes":135725,"time":5.010034},
{"name_p":"LRU","buffer_size":2000,"hits":685668,"writes":182366,"time":5.756171},
{"name_p":"LRUK","buffer_size":2000,"hits":816492,"writes":136097,"time":18.735364},
{"name_p":"LRUMIS","buffer_size":2000,"hits":794037,"writes":145209,"time":5.201951},
{"name_p":"LRUWSR","buffer_size":2000,"hits":698384,"writes":172427,"time":5.463587},
{"name_p":"ML1","buffer_size":2000,"hits":750184,"writes":198941,"time":27.440660},
{"name_p":"MRU","buffer_size":2000,"hits":22984,"writes":298496,"time":8.704431},
{"name_p":"SCMBP","buffer_size":2000,"hits":759775,"writes":146266,"time":40.599246},
{"name_p":"ADLRU","buffer_size":4000,"hits":840335,"writes":128854,"time":57.281255},
{"name_p":"AMLRU","buffer_size":4000,"hits":875247,"writes":122630,"time":8.739730},
{"name_p":"ARC","buffer_size":4000,"hits":741209,"writes":171545,"time":36.825991},
{"name_p":"CASA","buffer_size":4000,"hits":810362,"writes":135113,"time":9.197056},
{"name_p":"CCCFLRU","buffer_size":4000,"hits":789705,"writes":154213,"time":9.424537},
{"name_p":"CCFLRU","buffer_size":4000,"hits":813443,"writes":133573,"time":8.886245},
{"name_p":"CFDC","buffer_size":4000,"hits":704198,"writes":174551,"time":18.109800},
{"name_p":"CFLRU","buffer_size":4000,"hits":775163,"writes":159114,"time":12.758966},
{"name_p":"CLOCK","buffer_size":4000,"hits":753231,"writes":171637,"time":9.943259},
{"name_p":"F2Q","buffer_size":4000,"hits":872331,"writes":130274,"time":18.028038},
{"name_p":"FBR","buffer_size":4000,"hits":846345,"writes":134285,"time":16.629605},
{"name_p":"FIFO","buffer_size":4000,"hits":713746,"writes":194475,"time":11.804368},
{"name_p":"GASA","buffer_size":4000,"hits":846702,"writes":129537,"time":16.857024},
{"name_p":"GCLOCK","buffer_size":4000,"hits":753231,"writes":171637,"time":10.380564},
{"name_p":"LFUDA","buffer_size":4000,"hits":837569,"writes":137427,"time":19.224801},
{"name_p":"LFU","buffer_size":4000,"hits":768017,"writes":145469,"time":19.873555},
{"name_p":"LIRS","buffer_size":4000,"hits":875026,"writes":134688,"time":248.795139},
{"name_p":"LLRU","buffer_size":4000,"hits":878121,"writes":120912,"time":8.700697},
{"name_p":"LRU","buffer_size":4000,"hits":766918,"writes":166127,"time":9.780662},
{"name_p":"LRUK","buffer_size":4000,"hits":884604,"writes":122210,"time":43.092318},
{"name_p":"LRUMIS","buffer_size":4000,"hits":865193,"writes":131062,"time":8.825065},
{"name_p":"LRUWSR","buffer_size":4000,"hits":779711,"writes":155921,"time":9.574981},
{"name_p":"ML1","buffer_size":4000,"hits":886830,"writes":125050,"time":43.566254},
{"name_p":"MRU","buffer_size":4000,"hits":33715,"writes":297346,"time":16.384956},
{"name_p":"SCMBP","buffer_size":4000,"hits":840762,"writes":128728,"time":83.312441},
{"name_p":"ADLRU","buffer_size":8000,"hits":910268,"writes":111760,"time":129.177384},
{"name_p":"AMLRU","buffer_size":8000,"hits":938158,"writes":107027,"time":15.280176},
{"name_p":"ARC","buffer_size":8000,"hits":820448,"writes":155453,"time":79.263100},
{"name_p":"CASA","buffer_size":8000,"hits":887098,"writes":117193,"time":16.000230},
{"name_p":"CCCFLRU","buffer_size":8000,"hits":868974,"writes":136966,"time":16.228340},
{"name_p":"CCFLRU","buffer_size":8000,"hits":891889,"writes":114590,"time":16.054312},
{"name_p":"CFDC","buffer_size":8000,"hits":786952,"writes":155804,"time":35.743557},
{"name_p":"CFLRU","buffer_size":8000,"hits":856934,"writes":141812,"time":23.811091},
{"name_p":"CLOCK","buffer_size":8000,"hits":835797,"writes":154901,"time":17.083087},
{"name_p":"F2Q","buffer_size":8000,"hits":937738,"writes":117241,"time":37.915214},
{"name_p":"FBR","buffer_size":8000,"hits":918261,"writes":119743,"time":32.179579},
{"name_p":"FIFO","buffer_size":8000,"hits":796975,"writes":177758,"time":20.127226},
{"name_p":"GASA","buffer_size":8000,"hits":922947,"writes":111879,"time":36.287845},
{"name_p":"GCLOCK","buffer_size":8000,"hits":835797,"writes":154901,"time":17.354288},
{"name_p":"LFUDA","buffer_size":8000,"hits":909356,"writes":123411,"time":33.157333},
{"name_p":"LFU","buffer_size":8000,"hits":848906,"writes":128346,"time":34.449182},
{"name_p":"LIRS","buffer_size":8000,"hits":944870,"writes":119673,"time":830.123680},
{"name_p":"LLRU","buffer_size":8000,"hits":941192,"writes":104850,"time":15.389167},
{"name_p":"LRU","buffer_size":8000,"hits":849185,"writes":149213,"time":16.805066},
{"name_p":"LRUK","buffer_size":8000,"hits":949138,"writes":108632,"time":79.437182},
{"name_p":"LRUMIS","buffer_size":8000,"hits":934304,"writes":116843,"time":15.218401},
{"name_p":"LRUWSR","buffer_size":8000,"hits":861278,"writes":139266,"time":16.491929},
{"name_p":"ML1","buffer_size":8000,"hits":956196,"writes":106871,"time":77.119482},
{"name_p":"MRU","buffer_size":8000,"hits":55472,"writes":294955,"time":31.515913},
{"name_p":"SCMBP","buffer_size":8000,"hits":917995,"writes":110971,"time":174.374262},
{"name_p":"ADLRU","buffer_size":16000,"hits":979127,"writes":91856,"time":279.320685},
{"name_p":"AMLRU","buffer_size":16000,"hits":997925,"writes":89514,"time":26.743173},
{"name_p":"ARC","buffer_size":16000,"hits":901480,"writes":139022,"time":264.689320},
{"name_p":"CASA","buffer_size":16000,"hits":962623,"writes":96922,"time":27.160323},
{"name_p":"CCCFLRU","buffer_size":16000,"hits":949206,"writes":119626,"time":27.857461},
{"name_p":"CCFLRU","buffer_size":16000,"hits":969151,"writes":92604,"time":27.032076},
{"name_p":"CFDC","buffer_size":16000,"hits":872546,"writes":133971,"time":80.382997},
{"name_p":"CFLRU","buffer_size":16000,"hits":939178,"writes":124275,"time":45.221158},
{"name_p":"CLOCK","buffer_size":16000,"hits":919123,"writes":138071,"time":31.551586},
{"name_p":"F2Q","buffer_size":16000,"hits":999779,"writes":104491,"time":80.607539},
{"name_p":"FBR","buffer_size":16000,"hits":989949,"writes":104762,"time":59.941538},
{"name_p":"FIFO","buffer_size":16000,"hits":881727,"writes":160595,"time":34.427207},
{"name_p":"GASA","buffer_size":16000,"hits":996687,"writes":92335,"time":80.247106},
{"name_p":"GCLOCK","buffer_size":16000,"hits":919123,"writes":138071,"time":28.966260},
{"name_p":"LFUDA","buffer_size":16000,"hits":981815,"writes":108739,"time":67.279194},
{"name_p":"LFU","buffer_size":16000,"hits":931512,"writes":110137,"time":64.998476},
{"name_p":"LIRS","buffer_size":16000,"hits":1012732,"writes":103408,"time":1545.889733},
{"name_p":"LLRU","buffer_size":16000,"hits":999230,"writes":86730,"time":26.120810},
{"name_p":"LRU","buffer_size":16000,"hits":932005,"writes":132402,"time":27.942539},
{"name_p":"LRUK","buffer_size":16000,"hits":1011024,"writes":94735,"time":232.516824},
{"name_p":"LRUMIS","buffer_size":16000,"hits":1002483,"writes":101854,"time":26.066539},
{"name_p":"LRUWSR","buffer_size":16000,"hits":943184,"writes":122040,"time":28.299298},
{"name_p":"ML1","buffer_size":16000,"hits":1019869,"writes":89843,"time":236.769061},
{"name_p":"MRU","buffer_size":16000,"hits":99517,"writes":289729,"time":59.533422},
{"name_p":"SCMBP","buffer_size":16000,"hits":988753,"writes":92127,"time":556.691911},
{"name_p":"ADLRU","buffer_size":32000,"hits":1046284,"writes":66110,"time":1355.226517},
{"name_p":"AMLRU","buffer_size":32000,"hits":1055246,"writes":67008,"time":50.440050},
{"name_p":"ARC","buffer_size":32000,"hits":982847,"writes":121609,"time":1005.283705},
{"name_p":"CASA","buffer_size":32000,"hits":1036625,"writes":72350,"time":50.600722},
{"name_p":"CCCFLRU","buffer_size":32000,"hits":1028678,"writes":98580,"time":49.753682},
{"name_p":"CCFLRU","buffer_size":32000,"hits":1042622,"writes":65064,"time":47.443718},
{"name_p":"CFDC","buffer_size":32000,"hits":964031,"writes":106785,"time":257.267651},
{"name_p":"CFLRU","buffer_size":32000,"hits":1021084,"writes":104798,"time":78.249686},
{"name_p":"CLOCK","buffer_size":32000,"hits":1002012,"writes":119715,"time":51.951634},
{"name_p":"F2Q","buffer_size":32000,"hits":1054604,"writes":92608,"time":192.103825},
{"name_p":"FBR","buffer_size":32000,"hits":1058341,"writes":89407,"time":141.039733},
{"name_p":"FIFO","buffer_size":32000,"hits":967475,"writes":141868,"time":58.149932},
{"name_p":"GASA","buffer_size":32000,"hits":1065800,"writes":68619,"time":291.171055},
{"name_p":"GCLOCK","buffer_size":32000,"hits":1002012,"writes":119715,"time":54.029799},
{"name_p":"LFUDA","buffer_size":32000,"hits":1051778,"writes":93248,"time":234.139052},
{"name_p":"LFU","buffer_size":32000,"hits":1014969,"writes":90197,"time":235.550104},
{"name_p":"LIRS","buffer_size":32000,"hits":1076751,"writes":85179,"time":2186.536598},
{"name_p":"LLRU","buffer_size":32000,"hits":1054619,"writes":62868,"time":52.246552},
{"name_p":"LRU","buffer_size":32000,"hits":1015066,"writes":113473,"time":54.197239},
{"name_p":"LRUK","buffer_size":32000,"hits":1070105,"writes":80491,"time":944.555885},
{"name_p":"LRUMIS","buffer_size":32000,"hits":1066948,"writes":85801,"time":52.180418},
{"name_p":"LRUWSR","buffer_size":32000,"hits":1024391,"writes":99625,"time":52.218512},
{"name_p":"ML1","buffer_size":32000,"hits":1079620,"writes":72094,"time":842.414171},
{"name_p":"MRU","buffer_size":32000,"hits":185264,"writes":277931,"time":112.390599},
{"name_p":"SCMBP","buffer_size":32000,"hits":1046822,"writes":69120,"time":1456.851461},

{"name_p":"BELADY",	"buffer_size":1000	,"hits":834465	,"writes":151689	,"time":66.63	},
{"name_p":"BELADY",	"buffer_size":2000	,"hits":903530	,"writes":137344	,"time":114.92	}, 
{"name_p":"BELADY",	"buffer_size":4000	,"hits":969525	,"writes":123315	,"time":205.09	}, 
{"name_p":"BELADY",	"buffer_size":8000	,"hits":1030604	,"writes":110139	,"time":353.16	}, 
{"name_p":"BELADY",	"buffer_size":16000	,"hits":1083885	,"writes":98349	,"time":746.51	}, 
{"name_p":"BELADY",	"buffer_size":32000	,"hits":1124651	,"writes":88332	,"time":1287.38	}, 

{"name_p":"MQ","buffer_size":1000,"hits":612853,"writes":195845,"time":3.355292},
{"name_p":"MQ","buffer_size":2000,"hits":689554,"writes":181143,"time":5.170568},
{"name_p":"MQ","buffer_size":4000,"hits":768649,"writes":165532,"time":8.594045},
{"name_p":"MQ","buffer_size":8000,"hits":849813,"writes":149009,"time":14.628790},
{"name_p":"MQ","buffer_size":16000,"hits":932233,"writes":132327,"time":24.517624},
{"name_p":"MQ","buffer_size":32000,"hits":1015136,"writes":113439,"time":41.401022},


]


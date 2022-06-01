var test = [
    {"name_p":"ADLRU","buffer_size":1000,"hits":119948,"writes":87064,"time":19.855454},
    {"name_p":"AMLRU","buffer_size":1000,"hits":59888,"writes":138718,"time":9.026943},
    {"name_p":"ARC","buffer_size":1000,"hits":125620,"writes":90400,"time":21.847784},
    {"name_p":"CASA","buffer_size":1000,"hits":118445,"writes":87021,"time":8.776385},
    {"name_p":"CCCFLRU","buffer_size":1000,"hits":130873,"writes":87760,"time":8.910217},
    {"name_p":"CCFLRU","buffer_size":1000,"hits":117114,"writes":87026,"time":8.567607},
    {"name_p":"CFDC","buffer_size":1000,"hits":122145,"writes":89109,"time":9.238586},
    {"name_p":"CFLRU","buffer_size":1000,"hits":133195,"writes":88992,"time":10.078299},
    {"name_p":"CLOCK","buffer_size":1000,"hits":129481,"writes":90329,"time":8.605017},
    {"name_p":"F2Q","buffer_size":1000,"hits":118682,"writes":93644,"time":14.963318},
    {"name_p":"FBR","buffer_size":1000,"hits":125653,"writes":90362,"time":13.204760},
    {"name_p":"FIFO","buffer_size":1000,"hits":128482,"writes":90385,"time":8.781142},
    {"name_p":"GASA","buffer_size":1000,"hits":119572,"writes":87056,"time":11.668041},
    {"name_p":"GCLOCK","buffer_size":1000,"hits":129481,"writes":90329,"time":8.720793},
    {"name_p":"LFUDA","buffer_size":1000,"hits":136199,"writes":90137,"time":16.667992},
    {"name_p":"LFU","buffer_size":1000,"hits":20365,"writes":172366,"time":16.867449},
    {"name_p":"LIRS","buffer_size":1000,"hits":152275,"writes":96420,"time":11.783233},
    {"name_p":"LLRU","buffer_size":1000,"hits":56995,"writes":137816,"time":8.781491},
    {"name_p":"LRU","buffer_size":1000,"hits":130796,"writes":90289,"time":8.733862},
    {"name_p":"LRUK","buffer_size":1000,"hits":44790,"writes":149500,"time":26.569822},
    {"name_p":"LRUMIS","buffer_size":1000,"hits":123803,"writes":90099,"time":8.568655},
    {"name_p":"LRUWSR","buffer_size":1000,"hits":132849,"writes":89629,"time":8.715336},

    {"name_p":"MRU","buffer_size":1000,"hits":11473,"writes":179851,"time":8.514880},
    {"name_p":"SCMBP","buffer_size":1000,"hits":120055,"writes":87499,"time":30.677429},
    {"name_p":"ADLRU","buffer_size":2000,"hits":133000,"writes":85665,"time":37.772665},
    {"name_p":"AMLRU","buffer_size":2000,"hits":72959,"writes":131765,"time":14.031674},
    {"name_p":"ARC","buffer_size":2000,"hits":153036,"writes":89690,"time":46.277167},
    {"name_p":"CASA","buffer_size":2000,"hits":128406,"writes":85690,"time":13.706411},
    {"name_p":"CCCFLRU","buffer_size":2000,"hits":153027,"writes":87097,"time":13.557851},
    {"name_p":"CCFLRU","buffer_size":2000,"hits":126884,"writes":85690,"time":13.600908},
    {"name_p":"CFDC","buffer_size":2000,"hits":139141,"writes":88157,"time":15.050734},
    {"name_p":"CFLRU","buffer_size":2000,"hits":160145,"writes":88241,"time":16.907610},
    {"name_p":"CLOCK","buffer_size":2000,"hits":158240,"writes":89642,"time":13.509373},
    {"name_p":"F2Q","buffer_size":2000,"hits":146391,"writes":90071,"time":27.603098},
    {"name_p":"FBR","buffer_size":2000,"hits":153405,"writes":89505,"time":22.989862},
    {"name_p":"FIFO","buffer_size":2000,"hits":155447,"writes":89732,"time":13.639445},
    {"name_p":"GASA","buffer_size":2000,"hits":134352,"writes":85779,"time":21.524163},
    {"name_p":"GCLOCK","buffer_size":2000,"hits":158240,"writes":89642,"time":13.827270},
    {"name_p":"LFUDA","buffer_size":2000,"hits":166917,"writes":89197,"time":33.223104},
    {"name_p":"LFU","buffer_size":2000,"hits":31548,"writes":167924,"time":31.581746},
    {"name_p":"LIRS","buffer_size":2000,"hits":168101,"writes":94055,"time":16.501624},
    {"name_p":"LLRU","buffer_size":2000,"hits":67795,"writes":130410,"time":14.695020},
    {"name_p":"LRU","buffer_size":2000,"hits":161083,"writes":89564,"time":14.176609},
    {"name_p":"LRUK","buffer_size":2000,"hits":55999,"writes":146821,"time":61.593810},
    {"name_p":"LRUMIS","buffer_size":2000,"hits":140331,"writes":89388,"time":14.102833},
    {"name_p":"LRUWSR","buffer_size":2000,"hits":162336,"writes":88714,"time":14.014472},

    {"name_p":"MRU","buffer_size":2000,"hits":14613,"writes":179706,"time":14.176711},
    {"name_p":"SCMBP","buffer_size":2000,"hits":131914,"writes":86364,"time":63.652337},
    {"name_p":"ADLRU","buffer_size":4000,"hits":160499,"writes":82928,"time":92.344324},
    {"name_p":"AMLRU","buffer_size":4000,"hits":96338,"writes":121620,"time":25.744599},
    {"name_p":"ARC","buffer_size":4000,"hits":192660,"writes":88753,"time":103.212434},
    {"name_p":"CASA","buffer_size":4000,"hits":151953,"writes":83097,"time":25.009036},
    {"name_p":"CCCFLRU","buffer_size":4000,"hits":194265,"writes":85950,"time":27.810856},
    {"name_p":"CCFLRU","buffer_size":4000,"hits":149079,"writes":83083,"time":26.217999},
    {"name_p":"CFDC","buffer_size":4000,"hits":175237,"writes":86424,"time":28.855848},
    {"name_p":"CFLRU","buffer_size":4000,"hits":197909,"writes":87601,"time":35.675489},
    {"name_p":"CLOCK","buffer_size":4000,"hits":197282,"writes":88764,"time":25.965484},
    {"name_p":"F2Q","buffer_size":4000,"hits":184684,"writes":89226,"time":59.457867},
    {"name_p":"FBR","buffer_size":4000,"hits":201007,"writes":88086,"time":53.245990},
    {"name_p":"FIFO","buffer_size":4000,"hits":192236,"writes":88938,"time":25.508044},
    {"name_p":"GASA","buffer_size":4000,"hits":162952,"writes":83224,"time":49.510817},
    {"name_p":"GCLOCK","buffer_size":4000,"hits":197282,"writes":88764,"time":24.790637},
    {"name_p":"LFUDA","buffer_size":4000,"hits":204466,"writes":88289,"time":56.859514},
    {"name_p":"LFU","buffer_size":4000,"hits":50560,"writes":161781,"time":59.712769},
    {"name_p":"LIRS","buffer_size":4000,"hits":197730,"writes":91441,"time":28.721322},
    {"name_p":"LLRU","buffer_size":4000,"hits":88111,"writes":119419,"time":26.696579},
    {"name_p":"LRU","buffer_size":4000,"hits":200812,"writes":88636,"time":25.819696},
    {"name_p":"LRUK","buffer_size":4000,"hits":81657,"writes":141908,"time":158.370191},
    {"name_p":"LRUMIS","buffer_size":4000,"hits":179570,"writes":88263,"time":27.078219},
    {"name_p":"LRUWSR","buffer_size":4000,"hits":200723,"writes":88020,"time":26.898160},

    {"name_p":"MRU","buffer_size":4000,"hits":21251,"writes":179377,"time":27.278468},
    {"name_p":"SCMBP","buffer_size":4000,"hits":158360,"writes":84149,"time":166.097081},
    {"name_p":"ADLRU","buffer_size":8000,"hits":209072,"writes":77670,"time":235.633008},
    {"name_p":"AMLRU","buffer_size":8000,"hits":150652,"writes":105074,"time":51.037178},
    {"name_p":"ARC","buffer_size":8000,"hits":234224,"writes":88039,"time":266.957691},
    {"name_p":"CASA","buffer_size":8000,"hits":199714,"writes":77946,"time":49.686733},
    {"name_p":"CCCFLRU","buffer_size":8000,"hits":245309,"writes":84296,"time":49.310101},
    {"name_p":"CCFLRU","buffer_size":8000,"hits":197482,"writes":77905,"time":50.847442},
    {"name_p":"CFDC","buffer_size":8000,"hits":228829,"writes":83306,"time":57.639178},
    {"name_p":"CFLRU","buffer_size":8000,"hits":240976,"writes":86810,"time":74.795924},
    {"name_p":"CLOCK","buffer_size":8000,"hits":241473,"writes":88031,"time":50.832663},
    {"name_p":"F2Q","buffer_size":8000,"hits":246373,"writes":87929,"time":131.409407},
    {"name_p":"FBR","buffer_size":8000,"hits":260376,"writes":86185,"time":106.364096},
    {"name_p":"FIFO","buffer_size":8000,"hits":235748,"writes":88192,"time":47.638230},
    {"name_p":"GASA","buffer_size":8000,"hits":217258,"writes":78412,"time":112.870639},
    {"name_p":"GCLOCK","buffer_size":8000,"hits":241473,"writes":88031,"time":47.309555},
    {"name_p":"LFUDA","buffer_size":8000,"hits":244359,"writes":87643,"time":108.179605},
    {"name_p":"LFU","buffer_size":8000,"hits":86206,"writes":153162,"time":112.382897},
    {"name_p":"LIRS","buffer_size":8000,"hits":249392,"writes":89469,"time":49.171716},
    {"name_p":"LLRU","buffer_size":8000,"hits":140887,"writes":103120,"time":48.002000},
    {"name_p":"LRU","buffer_size":8000,"hits":244052,"writes":87976,"time":46.723501},
    {"name_p":"LRUK","buffer_size":8000,"hits":135465,"writes":133531,"time":325.142305},
    {"name_p":"LRUMIS","buffer_size":8000,"hits":241759,"writes":86926,"time":48.277073},
    {"name_p":"LRUWSR","buffer_size":8000,"hits":243783,"writes":87389,"time":48.380333},
  
    {"name_p":"MRU","buffer_size":8000,"hits":34366,"writes":178637,"time":52.244776},
    {"name_p":"SCMBP","buffer_size":8000,"hits":212639,"writes":79416,"time":330.731165},
    {"name_p":"ADLRU","buffer_size":16000,"hits":290736,"writes":67854,"time":427.556844},
    {"name_p":"AMLRU","buffer_size":16000,"hits":276589,"writes":76146,"time":93.132059},
    {"name_p":"ARC","buffer_size":16000,"hits":291532,"writes":87414,"time":544.542906},
    {"name_p":"CASA","buffer_size":16000,"hits":275585,"writes":68015,"time":89.307737},
    {"name_p":"CCCFLRU","buffer_size":16000,"hits":318904,"writes":81214,"time":88.818717},
    {"name_p":"CCFLRU","buffer_size":16000,"hits":286049,"writes":67886,"time":92.718217},
    {"name_p":"CFDC","buffer_size":16000,"hits":300242,"writes":78027,"time":107.760058},
    {"name_p":"CFLRU","buffer_size":16000,"hits":303127,"writes":85194,"time":137.597247},
    {"name_p":"CLOCK","buffer_size":16000,"hits":304252,"writes":87367,"time":91.322504},
    {"name_p":"F2Q","buffer_size":16000,"hits":353867,"writes":85342,"time":293.823981},
    {"name_p":"FBR","buffer_size":16000,"hits":345430,"writes":83625,"time":213.964546},
    {"name_p":"FIFO","buffer_size":16000,"hits":301510,"writes":87394,"time":90.179880},
    {"name_p":"GASA","buffer_size":16000,"hits":323293,"writes":69989,"time":257.433574},
    {"name_p":"GCLOCK","buffer_size":16000,"hits":304252,"writes":87367,"time":89.780890},
    {"name_p":"LFUDA","buffer_size":16000,"hits":308580,"writes":86706,"time":213.058485},
    {"name_p":"LFU","buffer_size":16000,"hits":155270,"writes":142158,"time":213.952832},
    {"name_p":"LIRS","buffer_size":16000,"hits":341659,"writes":87860,"time":93.717867},
    {"name_p":"LLRU","buffer_size":16000,"hits":249851,"writes":81834,"time":93.539056},
    {"name_p":"LRU","buffer_size":16000,"hits":305844,"writes":87342,"time":90.683700},
    {"name_p":"LRUK","buffer_size":16000,"hits":237761,"writes":121991,"time":647.543248},
    {"name_p":"LRUMIS","buffer_size":16000,"hits":334921,"writes":84791,"time":89.517089},
    {"name_p":"LRUWSR","buffer_size":16000,"hits":306120,"writes":86250,"time":90.933522},

    {"name_p":"MRU","buffer_size":16000,"hits":61087,"writes":177324,"time":97.334781},
    {"name_p":"SCMBP","buffer_size":16000,"hits":300004,"writes":70012,"time":669.733734},
    {"name_p":"ADLRU","buffer_size":32000,"hits":427833,"writes":49830,"time":803.028414},
    {"name_p":"AMLRU","buffer_size":32000,"hits":465895,"writes":67193,"time":171.939294},
    {"name_p":"ARC","buffer_size":32000,"hits":388015,"writes":86268,"time":1100.663000},
    {"name_p":"CASA","buffer_size":32000,"hits":400611,"writes":49724,"time":171.780426},
    {"name_p":"CCCFLRU","buffer_size":32000,"hits":448028,"writes":74593,"time":172.563537},
    {"name_p":"CCFLRU","buffer_size":32000,"hits":442851,"writes":49594,"time":177.919972},
    {"name_p":"CFDC","buffer_size":32000,"hits":405279,"writes":68142,"time":212.267751},
    {"name_p":"CFLRU","buffer_size":32000,"hits":412005,"writes":81737,"time":271.754250},
    {"name_p":"CLOCK","buffer_size":32000,"hits":409323,"writes":86130,"time":176.934566},
    {"name_p":"F2Q","buffer_size":32000,"hits":525945,"writes":80713,"time":596.058397},
    {"name_p":"FBR","buffer_size":32000,"hits":486450,"writes":79207,"time":413.636763},
    {"name_p":"FIFO","buffer_size":32000,"hits":404404,"writes":86205,"time":172.569831},
    {"name_p":"GASA","buffer_size":32000,"hits":498324,"writes":60118,"time":642.138362},
    {"name_p":"GCLOCK","buffer_size":32000,"hits":409323,"writes":86130,"time":174.577674},
    {"name_p":"LFUDA","buffer_size":32000,"hits":436506,"writes":83682,"time":428.581150},
    {"name_p":"LFU","buffer_size":32000,"hits":280033,"writes":129711,"time":446.698389},
    {"name_p":"LIRS","buffer_size":32000,"hits":502514,"writes":84820,"time":172.362513},
    {"name_p":"LLRU","buffer_size":32000,"hits":444000,"writes":57583,"time":173.269499},
    {"name_p":"LRU","buffer_size":32000,"hits":414023,"writes":86060,"time":175.038851},
    {"name_p":"LRUK","buffer_size":32000,"hits":408626,"writes":107292,"time":1782.281722},
    {"name_p":"LRUMIS","buffer_size":32000,"hits":492857,"writes":80744,"time":169.670793},
    {"name_p":"LRUWSR","buffer_size":32000,"hits":415168,"writes":83582,"time":175.145433},

    {"name_p":"MRU","buffer_size":32000,"hits":115296,"writes":174469,"time":184.924620},
    {"name_p":"SCMBP","buffer_size":32000,"hits":438374,"writes":52512,"time":1908.635974},
    


{"name_p":"MQ","buffer_size":1000,"hits":131279,"writes":90279,"time":9.265700},
{"name_p":"MQ","buffer_size":2000,"hits":161444,"writes":89552,"time":15.435148},
{"name_p":"MQ","buffer_size":4000,"hits":200985,"writes":88632,"time":27.530758},
{"name_p":"MQ","buffer_size":8000,"hits":244075,"writes":87975,"time":50.829910},
{"name_p":"MQ","buffer_size":16000,"hits":305885,"writes":87342,"time":100.553844},
{"name_p":"MQ","buffer_size":32000,"hits":414091,"writes":86060,"time":191.075757},


{"name_p":"BELADY",	"buffer_size":1000	,"hits":332401	,"writes":94179	,"time":345.06	},
{"name_p":"BELADY",	"buffer_size":2000	,"hits":406035	,"writes":93786	,"time":681.53	},
{"name_p":"BELADY",	"buffer_size":4000	,"hits":504758	,"writes":93123	,"time":1311.56	},
{"name_p":"BELADY",	"buffer_size":8000	,"hits":635498	,"writes":92131	,"time":2692.41	},
{"name_p":"BELADY",	"buffer_size":16000	,"hits":804927	,"writes":90400	,"time":8282.29	},
{"name_p":"BELADY",	"buffer_size":32000	,"hits":1015566	,"writes":87123	,"time":20423.73},



{"name_p":"EBRES","buffer_size":1000,"hits":127307,"writes":89141,"time":30.325047},
{"name_p":"EBRES","buffer_size":2000,"hits":149770,"writes":87511,"time":35.903865},
{"name_p":"EBRES","buffer_size":4000,"hits":179585,"writes":85112,"time":55.921222},
{"name_p":"EBRES","buffer_size":8000,"hits":225932,"writes":81090,"time":94.032043},
{"name_p":"EBRES","buffer_size":16000,"hits":316705,"writes":73455,"time":164.260812},
{"name_p":"EBRES","buffer_size":32000,"hits":485062,"writes":59687,"time":300.768736},


]
/*
This scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
LinkedIn: https://www.linkedin.com/in/akraonandula/
Updated on: 06-05-2022

*/
var b1 = document.getElementById('b1'),
    b2 = document.getElementById('b2'),
    b3 = document.getElementById('b3'),
    b4 = document.getElementById('b4'),
    b5 = document.getElementById('b5'),
    b6 = document.getElementById('b6');
b12 = new LeaderLine(b1, b2,
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x1(n)', {fontFamily: 'Arial, sans-serif'})});
b23 = new LeaderLine(b2, LeaderLine.pointAnchor(b3, {x: '0%', y: '20%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('h1(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch1', {fontFamily: 'Arial, sans-serif'})});
b34 = new LeaderLine(b3, LeaderLine.pointAnchor(b4, {x: '0%', y: '20%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('h2(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch1', {fontFamily: 'Arial, sans-serif'})});
b56 = new LeaderLine(b5, LeaderLine.pointAnchor(b6, {x: '0%', y: '20%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x2(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch2', {fontFamily: 'Arial, sans-serif'})});
b64 = new LeaderLine(b6, LeaderLine.pointAnchor(b4, {x: '0%', y: '80%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('y1(n)', {fontFamily: 'Arial, sans-serif'}),endLabel: LeaderLine.pathLabel('Ch2', {fontFamily: 'Arial, sans-serif'})});

  new PlainDraggable(b1,{
    onMove: function() { $("#s1").prop("checked",false),
    $("#sn").text("Circuit OFF"),
    $("#sn").css("background","red"),
    b12.dash = false,
    b23.dash = false,
    b34.dash = false,
    b56.dash = false,
    b64.dash = false,

    $("#grp").slideUp(),
    $("#ctl").slideUp(),
    $("#pa").slideUp(),
    ckt=0,
    plt(0),
    b12.position(); }});

  new PlainDraggable(b2, {
    onMove: function() {$("#s1").prop("checked",false),
    $("#sn").text("Circuit OFF"),
    $("#sn").css("background","red"),
    b12.dash = false,
    b23.dash = false,
    b34.dash = false,
    b56.dash = false,
    b64.dash = false,
    $("#grp").slideUp(),
    $("#ctl").slideUp(),
    $("#pa").slideUp(),
    ckt=0,
    plt(0),
    b12.position(),b23.position(); }
    });

  new PlainDraggable(b3, {
    onMove: function() { $("#s1").prop("checked",false),
    $("#sn").text("Circuit OFF"),
    $("#sn").css("background","red"),
    b12.dash = false,
    b23.dash = false,
    b34.dash = false,
    b56.dash = false,
    b64.dash = false,
    $("#grp").slideUp(),
    $("#ctl").slideUp(),
    $("#pa").slideUp(),
    ckt=0,
    plt(0),
    b23.position(),b34.position(); }
    });
    new PlainDraggable(b4, {
      onMove: function() {$("#s1").prop("checked",false),
      $("#sn").text("Circuit OFF"),
      $("#sn").css("background","red"),
      b12.dash = false,
      b23.dash = false,
      b34.dash = false,
      b56.dash = false,
      b64.dash = false,
      $("#grp").slideUp(),
      $("#ctl").slideUp(),
      $("#pa").slideUp(),
      ckt=0,
      plt(0),
      b64.position(),b43.position(); }
      });
      new PlainDraggable(b5, {
        onMove: function() {$("#s1").prop("checked",false),
        $("#sn").text("Circuit OFF"),
        $("#sn").css("background","red"),
        b12.dash = false,
        b23.dash = false,
        b34.dash = false,
        b56.dash = false,
        b64.dash = false,
        $("#grp").slideUp(),
        $("#ctl").slideUp(),
        $("#pa").slideUp(),
        ckt=0,
        plt(0),
        b56.position(); }
        });
        new PlainDraggable(b6, {
          onMove: function() {$("#s1").prop("checked",false),
          $("#sn").text("Circuit OFF"),
          $("#sn").css("background","red"),
          b12.dash = false,
          b23.dash = false,
          b34.dash = false,
          b56.dash = false,
          b64.dash = false,
          $("#grp").slideUp(),
          $("#ctl").slideUp(),
          $("#pa").slideUp(),
          ckt=0,
          plt(0),
          b64.position(),b56.position(); }
          });


  var ckt=0;
  var ch=0;
  var clp=0;
  var st=[];
  var st2=[];
  var stsa=[];
  var stsa2=[];
  var A1=0;
  var A2=0;
  var fm=0;
  var fs=0;
  var fre1=0;
  var fre2=0;
  var fre3=0;
  var stsaimp=[];
  function rng(start,len,end) {
      var ans = [];
      for (var i = start; i < len; i++) {
          ans.push(start+i/len*end);
      }
      return ans;
  };
  function po(v,x) {
              var ans = [];
              for(let i=0;v[i]!=undefined;i++)
                  {
                        ans.push(v[i]+Number(x));
                      }
              return ans;
    };
  function rngscn(a,f,x) {
      var ans = [];
        for(let i=0;x[i]!=undefined;i++)
          {
            ans.push(a*Math.sin(f*x[i]));
          }
      return ans;
  };
  function sinc(item,index) {
    st[index]=A1*Math.sin(2*Math.PI*fre1*item);
   
  };

  function sinc2(item,index) {
    st2[index]=A1*Math.sin(2*Math.PI*fre1*item);
   
  };
  
  function samp(item,index) {
    stsa[index]=A2*Math.sin(2*Math.PI*fre3*item);
    
  };
  function samp2(item,index) {
    stsa2[index]=A2*Math.sin(2*Math.PI*fre3*item);
    
  };
  function impulse(item,index)
  {
    if (item=0)
    
      stsaimp[index]=[0,0, 0, 0, 1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]
      else (item>0)
    
      stsaimp[index]=[0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
  };
  // console.log(stsaimp)
  const vec1 = [2,3,4];
  const vec2 = [1,2,3];
  const convolve = (vec1, vec2) => {
    if (vec1.length === 0 || vec2.length === 0) {
      throw new Error("Vectors can not be empty!");
    }
    const volume = vec1;
    const kernel = vec2;
    let displacement = 0;
    const convVec = [];
    
    for (let i = 0; i < volume.length; i++) {
      for (let j = 0; j < kernel.length; j++) {
        if (displacement + j !== convVec.length) {
          convVec[displacement + j] =
            convVec[displacement + j] + volume[i] * kernel[j];
           
        } else {
          convVec.push(volume[i] * kernel[j]);
        }
      }
      displacement++;
    }

    return convVec;

  };
  const vec3 =vec1+vec2

var impulseSignal = [0, 0, 0, 0, 1, 1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0, 0, 0];
  // var con=convolve(vec1, vec2);
  // console.log(con)
  
  function plt(cha){
    st=[];
    st2=[];
    stsa=[];
    var amp= $("#av").val();
    fm= $("#fv").val();
    fs= $("#fsv").val();
    var vc1= $("#vc1v").val();
    var t1= $("#t1v").val();
    var px1= $("#px1v").val();
    var py1= $("#py1v").val();
    var vc2= $("#vc2v").val();
    var t2= $("#t2v").val();
    var px2= $("#px2v").val();
    var py2= $("#py2v").val();
    var len=1024;
                A1=amp/vc1;
                A2=amp/vc2;
                fre1=fm*t1;
                fre2=fs*t2;
                fre3=fm*t2;
                var tim1= rng(0,len,1);
                var n = rng(0,fs*fm*t2,1);
                zeros = new Array(n.length).fill(0);
                tim1.forEach(sinc);
                tim1.forEach(sinc2);
                n.forEach(samp);
                n.forEach(samp2)
                st= po(st,py1);
                st1= po(st2,py1);
                stsa= po(stsa,py2);
                var ti1= po(tim1,px1);
                var ti2= po(n,px2);
                // var stsa2=stsa+stsa
                // var con=convolve(stsa, stsa2);
                // n.forEach(impulse);
                // var con1= impulse(n,len)
              //  var impulse1= impulse(0,1)
              //  console.log(impulse1)
              const dft = new DFT(len, n);
                dft.forward(st2);
                var spectrum = dft.spectrum;

               var hann = new WindowFunction(DSP.HANN);
               var spec2 = dft.forward(hann.process(st2));
               var con=convolve(stsa, stsa);
               

                //  console.log(stsa2,stsa)

                gr = document.getElementById('grph');
                var in1 = {
                  x: ti1,
                  y: st,
                  type: 'scatter',
                  name: 'Input(Vi)'
                };

                var op1 = {
                  x: ti1,
                  y:st2 ,//stsa
                  type: 'scatter',
                  name: 'Output(Vo)',
                  marker: {
                    symbol: 'circle',
                    size: 5
                  },
                  line: {width:0},
                  //hoverinfo: 'x+text', // The default configuration would print "16 +0/-16"...
                  //hovertext: y.map(Plotly.d3.format('.2 ')), // ... so we redefine the text
                  error_y: {
                    type: 'data',
                    symmetric: false,
                    array: zeros, // use zero-filled array
                    arrayminus: stsa, // re-use y values
                    width: 0 // hide cross-bars at end of error bars
                  }
                };
              
                    if(cha=='1'){
                      var data = [in1];
                      var layout={title: 'Input (Vi)', plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Amplitude Input(V)',
                          showticklabels: true,
                          autotick: true}
                      };
                    }
                    else if(cha=='2'){
                      var data = [op1];
                      // console.log(op1);
                      var layout={title: 'Linear Convolution output y(n)', plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Sample Time (s/n)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Amplitude Output (V)',
                          showticklabels: true,
                          autotick: true}
                      };
                      }
                    else if(cha=='3'){
                      var data = [in1,op1];
                      var layout={title: 'Linear Convolving a sine sequence output plot',plot_bgcolor:'black', paper_bgcolor:'black',text_color:'blue',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Sample Time (s/n)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Amplitude Vi/Vo (V)',
                          showticklabels: true,
                          autotick: true}
                      };
                      }
                    else{
                      var data = [];
                      var layout={title: 'Sampling theorem plot',plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Vi/Vo (V)',
                          showticklabels: true,
                          autotick: true}
                      };
                    }
                    var config = {responsive: true};
                    Plotly.newPlot(gr, data,layout,config);
  };

$(document).ready(function(){
    $("#ctl").slideUp();
    $("#vi").text($("#av").val());
    $("#f").text($("#fv").val());
    $("#fs").text($("#fsv").val());
    $("#vc1").text($("#vc1v").val());
    $("#t1").text($("#t1v").val());
    $("#px1").text($("#px1v").val());
    $("#py1").text($("#py1v").val());
    $("#vc2").text($("#vc2v").val());
    $("#t2").text($("#t2v").val());
    $("#px2").text($("#px2v").val());
    $("#py2").text($("#py2v").val());
    $("#s1").prop("checked",false);
    $("#sn").text("Circuit OFF");
    $("#sn").css("background","red");
    $("#grp").slideUp();
    $("#ctl").slideUp();
    $("#pa").slideUp();
    ckt=0;
    plt(0);
});

    $("#s1").click(function(){
      if(ckt==0){
      $("#sn").text("Circuit ON");
      $("#sn").css("background","green");
      $("#ctl").slideDown("slow");
      $("#grp").slideDown("slow");
      $("#pa").slideDown("slow");
        b12.dash = {animation: true};
        b23.dash = {animation: true};
        b34.dash = {animation: true};
        b56.dash = {animation: true};
        b64.dash = {animation: true};
      ckt=1;
      plt(ch);
    }
    else{
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#grp").slideUp();
      $("#ctl").slideUp();
      $("#pa").slideUp();
      b12.dash = {animation: false};
      b23.dash = {animation: false};
      b34.dash = {animation: false};
      b56.dash = {animation: false};
      b64.dash = {animation: false};
       
        b12.dash = false;
        b23.dash = false;
        b34.dash = false;
        b56.dash = false;
        b64.dash = false;
      ckt=0;
      plt(0);
    }
  });
    $("#av").change(function(){
      $("#vi").text($("#av").val());
      plt(ch);
    });
    $("#fv").change(function(){
      $("#f").text($("#fv").val());
      plt(ch);
    });
    $("#fsv").change(function(){
      $("#fs").text($("#fsv").val());
      plt(ch);
    });
    $("#vc1v").change(function(){
      $("#vc1").text($("#vc1v").val());
      plt(ch);
    });
    $("#t1v").change(function(){
      $("#t1").text($("#t1v").val());
      plt(ch);
    });
    $("#px1v").change(function(){
      $("#px1").text($("#px1v").val());
      plt(ch);
    });
    $("#py1v").change(function(){
      $("#py1").text($("#py1v").val());
      plt(ch);
    });
    $("#vc2v").change(function(){
      $("#vc2").text($("#vc2v").val());
      plt(ch);
    });
    $("#t2v").change(function(){
      $("#t2").text($("#t2v").val());
      plt(ch);
    });
    $("#px2v").change(function(){
      $("#px2").text($("#px2v").val());
      plt(ch);
    });
    $("#py2v").change(function(){
      $("#py2").text($("#py2v").val());
      plt(ch);
    });
    $("#bc1").click(function(){
      ch=1;
      plt(ch);
    });
    $("#bc2").click(function(){
      ch=2;
      plt(ch);
    });
    $("#du").click(function(){
      ch=3;
      plt(ch);
    });

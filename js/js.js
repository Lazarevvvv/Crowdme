document.getElementById('hr1').onclick=function(){
    document.getElementById('b1').style.background="#add136";
    document.getElementById('b2').style.background="#5f5f5f";
    document.getElementById('b3').style.background="#5f5f5f";
    document.getElementById('hr1').style.borderBottomColor="#add136";
    document.getElementById('hr2').style.borderBottomColor="rgb(80, 80, 80, 0.2)";
    document.getElementById('hr3').style.borderBottomColor="rgb(80, 80, 80, 0.2)";
    document.getElementById('main1').style.zIndex=3;
    document.getElementById('main2').style.zIndex=0;
    document.getElementById('main3').style.zIndex=0;
}
document.getElementById('hr2').onclick=function(){
    document.getElementById('b1').style.background="#5f5f5f";
    document.getElementById('b2').style.background="#add136";
    document.getElementById('b3').style.background="#5f5f5f";
    document.getElementById('hr1').style.borderBottomColor="rgb(80, 80, 80, 0.2)";
    document.getElementById('hr2').style.borderBottomColor="#add136";
    document.getElementById('hr3').style.borderBottomColor="rgb(80, 80, 80, 0.2)";
    document.getElementById('main1').style.zIndex=0;
    document.getElementById('main2').style.zIndex=3;
    document.getElementById('main3').style.zIndex=0;
}
document.getElementById('hr3').onclick=function(){
    document.getElementById('b1').style.background="#5f5f5f";
    document.getElementById('b2').style.background="#5f5f5f";
    document.getElementById('b3').style.background="#add136";
    document.getElementById('hr1').style.borderBottomColor="rgb(80, 80, 80, 0.2)";
    document.getElementById('hr2').style.borderBottomColor="rgb(80, 80, 80, 0.2)";
    document.getElementById('hr3').style.borderBottomColor="#add136";
    document.getElementById('main1').style.zIndex=0;
    document.getElementById('main2').style.zIndex=0;
    document.getElementById('main3').style.zIndex=3;
}

document.getElementById('log').onclick=function(){
    document.getElementById('window').style.display="block";
    document.getElementById('phon').style.display='block';
    document.getElementById('hed').style.background='linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
    document.getElementById('telo').style.background='linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), 10%)';
}

document.getElementById('but').onclick=function(){
    document.getElementById('window').style.display="none";
    document.getElementById('phon').style.display='none';
    document.getElementById('hed').style.background='white';
    document.getElementById('telo').style.background='white';
}
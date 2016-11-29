function firstEnter(){
     move('.bg1 .bg11').y(0).duration('1s').end();
     move('.bg1 .title1').set('margin-top','0px').duration('2s').end();
     move('.name').set('margin-top','0px').duration('2s').end();
     move('.picture-tou').scale(1).duration('2s').end();
}

function secondEnter(){
    move('.title-picture1').scale(1).duration('2s').end();
    move('.information-content .p11').x(0).duration('1s').end();
    move('.information-content .p2').x(0).duration('1s').end();
    move('.information-content .p3').x(0).duration('1s').end();
    move('.information-content .p4').x(0).duration('1s').end();
    move('.information-content .p5').x(0).duration('1s').end();
    move('.information-content .p6').x(0).duration('1s').end();
}

function thirdEnter(){
    move('.title-picture2').scale(1).duration('2s').end();
    move('.content-picture1').y(0).duration('1s').end(function(){
        move('.content-picture2').y(0).duration('1s').end(function(){
            move('.content-picture3').y(0).duration('1s').end();
        });
    });
}


function fourthEnter(){
    move('.title-picture3').scale(1).duration('2s').end();
    move('.content2-picture1').x(0).skew(0).duration('1s').end(function(){
        move('.content2-picture2').x(0).skew(0).duration('1s').end(function(){
            move('.content2-picture3').x(0).skew(0).duration('1s').end();
        });
    });
}

function fifthEnter(){
    move('.title-picture4').scale(1).duration('2s').end();
}

function sixthEnter(){
    move('.title-picture5').scale(1).duration('2s').end();
    move('.attitude-img').y(0).duration('2s').end();
    move('.img-picture1').y(0).duration('2s').end();
}

function seventhEnter(){
    move('.title-picture6').scale(1).duration('2s').end();
    move('.content-contact img').scale(1).duration('3s').end();
}



function firstLeave(){
    move('.bg1 .bg11').y(-200).end();
    move('.bg1 .title1').set('margin-top','-200px').end();
    move('.name').set('margin-top','300px').end();
    move('.picture-tou').scale(0).end();
    move('.content-contact img').scale(1).end();
}

function secondLeave(){
    move('.title-picture1').scale(0).end();
    move('.information-content .p11').x(-500).end();
    move('.information-content .p2').x(500).end();
    move('.information-content .p3').x(-500).end();
    move('.information-content .p4').x(500).end();
    move('.information-content .p5').x(-500).end();
    move('.information-content .p6').x(500).end();
}

function thirdLeave(){
    move('.title-picture2').scale(0).end()
    move('.content-picture1').y(800).end();
    move('.content-picture2').y(900).end();
    move('.content-picture3').y(1000).end();
}


function fourthLeave(){
    move('.title-picture3').scale(0).end();
    move('.content2-picture1').x(-500).skew(0).end();
    move('.content2-picture2').x(600).skew(0).end();
    move('.content2-picture3').x(-700).skew(0).end();
}

function fifthLeave(){
    move('.title-picture4').scale(0).end();
}

function sixthLeave(){
    move('.title-picture5').scale(0).end();
    move('.attitude-img').y(300).end();
    move('.img-picture1').y(300).end();
}

function seventhLeave(){
    move('.title-picture6').scale(0).end();
    move('.content-contact img').scale(0).end();
}




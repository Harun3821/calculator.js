function culcatTraiangle(){
    const triangIenput = document.getElementById('triangle-base');
    const triangleText = triangIenput.value
    const base = parseFloat(triangleText)
    console.log(base)

    const ttriangleHight = document.getElementById('triangle-hight');
    const ttriangletext = ttriangleHight.value
    const hight = parseFloat(ttriangletext)
    console.log(hight)

    // culculte triangle Areya

     const area = 0.5 * base * hight;
     console.log('tring area hole', area)

    //  display triangle Areya

    const triangleAreey = document.getElementById('triangle-area');
    triangleAreey.innerText = area;
}

// Rectangle

function RectangleBas(){
    const RectangleInput = document.getElementById('Rectangle-input');
    const RectangleText = RectangleInput.value;
    const baseValu = parseFloat(RectangleText);
    console.log(baseValu);

const RectangleHight = document.getElementById('Rectangle-hight');
const RectangleTexxt = RectangleHight.value
const hightValu = parseFloat(RectangleTexxt)
console.log(hightValu);


const valuearea  = 0.5 * baseValu * hightValu;
console.log('atare mane holo', valuearea)


const RectangleArry = document.getElementById('Rectangle-area');
     RectangleArry.innerHTML = valuearea;

}

//Parallelogram

function Parallelogram(){
    const Parallelogram = document.getElementById('Parallelogram-Bass');
    const ParallelogramText = Parallelogram.value;
    const Para = parseFloat(ParallelogramText);
    console.log(Para);


    const ParallelogramHight = document.getElementById('Parallelogram-hight');
    const Parallelogramtexxt = ParallelogramHight.value;
    const gram = parseFloat(Parallelogramtexxt);
    console.log(gram);

    const paraValue = 0.5 * Para * gram;
    console.log('atar man holo', paraValue);

    const ParallelogramAreey = document.getElementById('Parallelogram-Areey');
    ParallelogramAreey.innerText = paraValue;
}


function Pentagon(){
    const Pentagon = document.getElementById('Pentagon-bass');
    const PentagonText = Pentagon.value;
    const penta = parseFloat(PentagonText);
    console.log(penta);


    const PentagonHight = document.getElementById('Pentagon-Hight');
    const PentagonTexxt = PentagonHight.value;
    const gong = parseFloat(PentagonTexxt);
    console.log(gong);

    const pentaValue = 0.5 * penta * gong;
    console.log('atar man holo', pentaValue);

    const atarAreey = document.getElementById('Pentagon-area');
    atarAreey.innerText =pentaValue;
}
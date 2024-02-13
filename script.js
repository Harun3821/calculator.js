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
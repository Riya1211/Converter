document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})
document.getElementById("celciusInput").addEventListener("input", e => {
    let c = e.target.value;
    document.getElementById("fOutput").innerText = (c*1.8)+32;
})
document.getElementById("fInput").addEventListener("input", e => {
    let f = e.target.value;
    document.getElementById("kOutput").innerText = ((f-32)/1.8)+273.15 ;
})
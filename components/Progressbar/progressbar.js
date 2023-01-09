class Progressbar {
    render(){
        let htmlProgress = `
            <div class="progressbar">
                <div class="progressbar__line"> </div>
            </div>
        `
        ROOT_PROGRESS.innerHTML = htmlProgress;
    }
};
const progressSection = new Progressbar();
progressSection.render();


const progressbarLine = document.querySelector('.progressbar__line');
let fullHeight, innerHeight; 


window.addEventListener('scroll', calcProgressLine);
window.addEventListener('resize', calcProgressLine);

calcProgressLine();
function calcProgressLine(){
    fullHeight = document.body.scrollHeight;
    innerHeight = window.innerHeight;
    let allScroll = fullHeight - innerHeight;
    progressbarLine.style.width = (scrollY  * 100 / (allScroll))+'%';   
}
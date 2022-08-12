// получение элементов
const menu = document.querySelector('.f-blocks');
const fBlocks = document.querySelectorAll('.f-block');
const fMainBlocks = document.querySelectorAll ('.f-main-block');
for (elem of fMainBlocks) {
    elem.style.display = 'none';
}

fBlocks[0].style.cssText = `
    border-right : 15px solid #5dca88;
    width : 347px;
`;
fMainBlocks[0].style.display = 'inline-block';


menu.onclick = function (event) {
    let target = event.target;

    target = target.closest('.f-block');

    try    {target.style.cssText = `
    border-right : 15px solid #5dca88;
    width : 347px;
`;} catch {return}
    for (elem of fBlocks) {
        elem.style.cssText = ''
    }
    target.style.cssText = `
    border-right : 15px solid #5dca88;
    width : 347px;`;
    const data = target.dataset.action;
    let fMainBlock;
    for (elem of fMainBlocks){
        if(data == elem.dataset.action) {fMainBlock = elem; break;}
    }
    for (elem of fMainBlocks) {
        elem.style.display = 'none';
    }
    fMainBlock.style.display = 'inline-block'
}















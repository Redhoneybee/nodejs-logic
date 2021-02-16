

const lis = document.querySelectorAll('.account_wrap ul li');

const VISIBLE = "visible";
const ACTIVE = "active";

const onClick = (e) => {
    const target = e.target;
    const classNames = target.className.split(' ');

    const flag = classNames.find(className => className === ACTIVE);

    if (flag) return;

    document.querySelectorAll('.account_wrap ul li').forEach(li => li.classList.remove(ACTIVE));
    target.classList.add(ACTIVE);
    const signTarget = target.getAttribute('data-target');

    document.querySelectorAll('.sign').forEach(sign => sign.classList.remove(ACTIVE));
    document.getElementById(signTarget).classList.add('active');
}


const onFocus = (e) => {
    const label = e.target.previousSibling.previousSibling;
    label.classList.add(VISIBLE);
}

const onBlur = (e) => {
    const label = e.target.previousSibling.previousSibling;
    label.classList.remove(VISIBLE);
}

lis.forEach(li => {
    li.addEventListener("click", onClick);
})


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur);
});
const log = console.log.bind(console);

const delayUnit = 40;
const sizeUnit = '40px';

const cubeContainers = qsa('.cubes__container');
const c1 = qs(".cubes__container--1");
const c5 = qs(".cubes__container--5");
const c1s = qsa(".cube", c1);
const c5s = qsa(".cube", c5);

byId('btn-1').addEventListener('touchstart', collapse);
byId('btn-1').addEventListener('click', collapse);

byId('btn-2').addEventListener('touchstart', expand);
byId('btn-2').addEventListener('click', expand);

qs('.scene').addEventListener('touchstart', toggle);
qs('.scene').addEventListener('click', toggle);


function collapse(event) {
  event.preventDefault();
  event.stopPropagation();

  cubeContainers.forEach(c => c.classList.add('is-in'));

  c1s.map((c, i) => {
    ((c, index) => {
      setTimeout(
      // Kinda like animation delay, but using setTimeout
      // Using JS for this so I can dynamically pick any item and apply any delay I want for this prototype
      () => c.style.transform = `translateZ(${sizeUnit})`,
      index * delayUnit);

    })(c, i);
  });

  c5s.map((c, i) => {
    ((c, index) =>
    setTimeout(
    () => c.style.transform = `translateZ(-${sizeUnit})`,
    index * delayUnit))(
    c, i);
  });
}

function expand(event) {
  event.preventDefault();
  event.stopPropagation();

  cubeContainers.forEach(c => c.classList.remove('is-in'));

  c1s.map((c, i) => {
    ((c, index) =>
    setTimeout(
    () => c.style.transform = '',
    index * delayUnit))(
    c, i);
  });

  c5s.map((c, i) => {
    ((c, index) =>
    setTimeout(
    () => c.style.transform = '',
    index * delayUnit))(
    c, i);
  });
}

function toggle(event) {
  event.preventDefault();
  event.stopPropagation();

  qs('.scene').classList.toggle('toggle');
}


function qs(expr, context) {
  return (context || document).querySelector(expr);
}

function qsa(expr, context) {
  return [].slice.call((context || document).querySelectorAll(expr), 0);
}

function byId(id) {
  return document.getElementById(id);
}
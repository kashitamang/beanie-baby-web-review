export function renderBeanieBaby(beanieBaby) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    img.src = `${beanieBaby.image}`;
    h3.textContent = `${beanieBaby.title}`;
    p.textContent = `${beanieBaby.astroSign}`;

    li.classList.add('beanie-baby');
    li.append(img, h3, p);
    return li;
}

export function renderZodiacs(sign) {
    const option = document.createElement('option');
    option.value = sign.name;
    option.textContent = sign.name;
    return option;
}

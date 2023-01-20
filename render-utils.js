export function renderBeanieBaby(beanieBaby) {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = `${beanieBaby.image}`;

    li.append(img);
    return li;
}

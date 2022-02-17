const DomElement = function (selector, height, width, bg, fontSize, position, left, top) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    // this.position = position;
    // this.top = top;
    // this.left = left;


    if (selector.charAt(0) == '.') {
        let res = selector.replace(selector.charAt(0), '').trim();
        let p = document.createElement('p');

        let text = document.createTextNode(res);
        p.setAttribute("id", res);
        p.append(text);
        document.body.appendChild(p);

        p.style.cssText = `height: ${height + 'px'};
        width: ${width + 'px'};
        background-color: ${bg};
        font-size : ${fontSize + 'px'}`;   // position: ${position} margin-left: ${left} margin-top: ${top}

        // let div = document.createElement("div");
        // div.classList.add('square');
        // document.body.appendChild(div);

        // div.style.cssText = `position: ${position}
        // margin-left: ${left}
        // margin-top: ${top}`;
        // document.body.appendChild(div);
        // console.log(div);

    } else if (selector.charAt(0) == '#') {
        let res = selector.replace(selector.charAt(0), '').trim();
        let div = document.createElement('div');
        div.classList.add(res);
        let text = document.createTextNode(res);
        div.append(text);
        document.body.appendChild(div);

        div.style.cssText = `height: ${height + 'px'};
        width: ${width + 'px'};
        background-color: ${bg};
        font-size : ${fontSize + 'px'}`;  // position: ${position} margin-left: ${left + 'px'} margin-top: ${top + 'px'}

    }
    // document.addEventListener("keydown", function (event) {
    //     switch (event.key) {
    //         case 'ArrowLeft':
    //             left -= 10;
    //             break;
    //         case 'ArrowRight':
    //             left += 10;
    //             break;
    //         case 'ArrowUp':
    //             top += 10;
    //             break;
    //         case 'ArrowDown':
    //             top -= 10;
    //             break;
    //     }
    // });

};
let best = new DomElement('.best', '100', '100', 'black', '14');
// let block = new DomElement('#block', '100', '100', 'black', '14');
console.log(best);
// console.log(block);
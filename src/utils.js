
export function computeYRatio(height, max, min) {
    return (max - min) / height
}

export function computeXRatio(width, length) {
    return width / (length - 2)
}

export function toDate(timestamp, withDay) {
    const shortMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const shortDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const date = new Date(timestamp);
    if(withDay) {
        return  `${shortDays[date.getDay()]}, ${
            shortMonths[date.getMonth()]} ${date.getDate()}`
    }
    return `${shortMonths[date.getMonth()]} ${date.getDate()}`;
}

export function isOver(mouse, x, length, DPI_WIDTH) {
    if (!mouse) {
        return  false;
    }
    const width = DPI_WIDTH / length
    return Math.abs(x - mouse.x) < width / 2;
}

export function line(ctx, coords, {color, translate = 0}) {
    ctx.beginPath();
    ctx.lineWidth = 4
    ctx.strokeStyle = color;
    ctx.save();
    ctx.translate(translate, 0);
    for (const [x, y] of coords) {
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
}

export function circle(ctx, [x,y], color) {
    const CIRCLE_RADIUS = 8;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.fillStyle = "#fff";
    ctx.lineWidth = 4;
    ctx.arc(x, y, CIRCLE_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

export function boundaries ({columns , types}) {
    let min;
    let max;
    columns.forEach(col => {
        if (types[col[0]] !== "line") return;
        if (typeof min !== "number") min = col[1];
        if (typeof max !== "number") max = col[1];

        if (min > col[1]) min = col[1];
        if (max < col[1]) max = col[1];

        for (let i = 2; i < col.length; i++) {
            if (min > col[i]) min = col[i];
            if (max < col[i]) max = col[i];
        }

    });
    return [min, max];
}

export function css(el, styles = {}) {
    Object.assign(el.style, styles)
}

export function toCoords(xRatio, yRatio, DPI_HEIGHT, PADDING, yMin) {
    return (col)  => col.map((y,i) =>
        [
            Math.floor(xRatio * (i - 1)),
            Math.floor(DPI_HEIGHT - PADDING - (y - yMin) / yRatio)
        ]);
};
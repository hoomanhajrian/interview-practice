let s = 0, m = 0, h = 0, d = 0, w = 0;
const solution = (X) => {

    if (X > 60) {
        if (X >= 604800) {
            X = X - 604800;
            w++;
        }
        else if (X >= 86400) {
            X = X - 86400;
            d++;
        }
        else if (X >= 3600) {
            X = X - 3600;
            h++;
        }
        else if (X >= 60) {
            X = X - 60;
            m = m + 1;
        }
        return solution(X);
    }
    else {
        s = X;
        return `${w}w${d}d${h}h${m}m${s}s`;
    }
}

console.log(solution(7263));
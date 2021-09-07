export const colorGenerate = () => {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
};

export const caps = str => str.charAt(0).toUpperCase() + str.slice(1);

export const nthDate = (str) => {
    const nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    const input = new Date(str);
    const date = input.getDate();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][input.getMonth()];
    return `${month} ${date}${nth(date)}, ${input.getFullYear()}`
}

export const generateColorMapper = (arr) => {
    return arr.reduce((all, item) => {
        all[item.name] = colorGenerate();
        return all;
    }, {})
}
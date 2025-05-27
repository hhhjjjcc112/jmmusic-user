import {ref} from "vue";

let grayColorStyle = {
    light3: "rgb(250, 250, 250)",
    light2: "rgb(240, 240, 240)",
    light1: "rgb(211, 211, 211)",
    main_color: "rgb(175, 175, 175)",
    dark1: "rgb(126,125,125)",
    dark2: "rgb(90,90,90)",
    dark3: "rgb(58,58,58)",
}

let redColorStyle = {
    light3: "rgb(255, 229, 229)",
    light2: "rgb(255, 204, 204)",
    light1: "rgb(243,177,183)",
    main_color: "rgb(248,126,126)",
    dark1: "rgb(220, 20, 60)",
    dark2: "rgb(178, 34, 34)",
    dark3: "rgb(139, 0, 0)",
}

let blueColorStyle = {
    light3: "rgb(229, 242, 255)",
    light2: "rgb(204, 229, 255)",
    light1: "rgb(177, 217, 255)",
    main_color: "rgb(126, 188, 248)",
    dark1: "rgb(20, 60, 220)",
    dark2: "rgb(34, 178, 178)",
    dark3: "rgb(0, 139, 139)",
}

let greenColorStyle = {
    light3: "rgb(165,250,165)",
    light2: "rgb(138,253,138)",
    light1: "rgb(104,250,104)",
    main_color: "rgb(0,248,0)",
    dark1: "rgb(19,151,19)",
    dark2: "rgb(26,131,26)",
    dark3: "rgb(0,110,0)",
}

let colorStyleDict = {
    "gray": grayColorStyle,
    "red": redColorStyle,
    "blue": blueColorStyle,
    "green": greenColorStyle,
}

// 修改的不是结构体内部, 而是结构体本身, 所以使用ref
export let colorStyle = ref(redColorStyle);
// export let colorStyle = ref(grayColorStyle); // 默认使用灰色样式
// export let colorStyle = ref(blueColorStyle);
// export let colorStyle = ref(greenColorStyle);


export let darkMode = ref(false);

const setColorStyle = (colorStyleName) => {
    if (colorStyleDict[colorStyleName]) {
        colorStyle.value = colorStyleDict[colorStyleName];
    } else {
        console.warn(`Color style "${colorStyleName}" does not exist.`);
        colorStyle.value = grayColorStyle; // 恢复默认样式
    }
}

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
}

export default {
    colorStyle,
    darkMode,
    setColorStyle,
    toggleDarkMode
};

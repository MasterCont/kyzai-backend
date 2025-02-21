// Основные модули и методы для импорта
import colors from "colors";
import {date, time} from "./time.module";

const sysPrint = (value: any) => {
    console.log(`[${date().gray}] [${time().gray}] [${colors.cyan("Система")}] ${value}`);
}

const sysWarn = (value: any) => {
    console.warn(`[${date().gray}] [${time().gray}] [${colors.yellow("Система")}] ${value}`);
}

const sysError = (value: any) => {
    console.error(`[${date().gray}] [${time().gray}] [${colors.red("Система")}] ${value}`);
}

export {sysPrint, sysWarn, sysError}
// Основные модули и методы для импорта
import colors from "colors";
import {date, time} from "./time.module";


// Методы для вывода содержимого в терминал
const sysPrint = (value: any) => {
    console.log(`[${date().gray}] [${time().gray}] [${colors.cyan("Система")}] ${value}`);
}

const sysWarn = (value: any) => {
    console.warn(`[${date().gray}] [${time().gray}] [${colors.yellow("Система")}] ${value}`);
}

const sysError = (value: any) => {
    console.error(`[${date().gray}] [${time().gray}] [${colors.red("Система")}] ${value}`);
}


// Экспортируем методы
export {sysPrint, sysWarn, sysError}
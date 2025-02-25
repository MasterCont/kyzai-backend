// Основные модули и методы для импорта
import colors from "colors";
import {date, time} from "./time.module";


// Методы для вывода содержимого в терминал
const sysPrint = (value: any) => {
    console.log(`[${date().gray}] [${time().gray}] [${colors.cyan("System")}] ${value}`);
}

const sysWarn = (value: any) => {
    console.warn(`[${date().gray}] [${time().gray}] [${colors.yellow("System")}] ${value}`);
}

const sysError = (value: any) => {
    console.error(`[${date().gray}] [${time().gray}] [${colors.red("System")}] ${value}`);
}


// Экспортируем методы
export {sysPrint, sysWarn, sysError}
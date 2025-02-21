// Основной модуль для работы со временем

class TimeModule {
    Hours(): string|number{
        const Hours = new Date().getHours();
        if(Hours < 10) return `0${Hours}`
        else return Hours;
    }
    Minutes(): string|number{
        const Minutes = new Date().getMinutes();
        if(Minutes < 10) return `0${Minutes}`
        else return Minutes;
    }
    Seconds(): string|number{
        const Seconds = new Date().getSeconds();
        if(Seconds < 10) return `0${Seconds}`
        else return Seconds;
    }
    Date(): string|number{
        const date = new Date().getDate();
        if(date < 10) return `0${date}`
        else return date;
    }
    Month(): string|number{
        const Month = new Date().getMonth();
        if(Month < 10) return `0${Month}`
        else return Month;
    }
    Year(): string|number{
        const Year = new Date().getFullYear();
        return Year;
    }
}

function time(): string{
    return new Date().toLocaleTimeString("ru", {
        timeZone: "Europe/Moscow"
    });
}

function date(): string{
    return new Date().toLocaleDateString("ru", {
        timeZone: "Europe/Moscow"
    });
}

function getDateMySQL(): string{
    let new_date = date();
    let array = new_date.split(".");
    return `${array[2]}-${array[1]}-${array[0]}`;
}

export {time, date, TimeModule};
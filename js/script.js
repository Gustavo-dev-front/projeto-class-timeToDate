import TimeToDate from "./modules/timeToDate.js";

const outputs = document.querySelectorAll('[data-time]');

setInterval(() => {
    setValues();
}, 1000);


function setValues() {
    const data = new TimeToDate('12/31/2050');
    outputs.forEach((item) => {
        item.innerText = `${data.time[item.id]} ${item.id}`;
    });
}

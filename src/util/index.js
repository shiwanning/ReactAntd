
export default {
    formatDate(date){
        if (date) {
            const sysDate = new Date(date);
            return sysDate.getFullYear() + "-" +
                (sysDate.getMonth()+1) + "-" +
                sysDate.getDate() + " " +
                sysDate.getHours() + ":" +
                sysDate.getMinutes() + ":" +
                sysDate.getSeconds()
        }
        return "";
    },
}
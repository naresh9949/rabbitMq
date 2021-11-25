const storage = window.localStorage;
//{}
const setLog = (data) => {
    var storeArray = [];
    if (!storage.getItem("log")) {
        storeArray.push(data);
        storage.setItem("log", JSON.stringify(storeArray));
      } else {
        try {
          JSON.parse(storage.getItem("log")).map((itm) => storeArray.push(itm));
          storeArray.push(data);
          if (storeArray.length < 100) {
            localStorage.setItem("log", JSON.stringify(storeArray));
          } else {
            data.splice(0, 1);

            localStorage.setItem("log", JSON.stringify(storeArray));
            //console.log(arr);
          }
        } catch (e) {
          if (
            e.name === "QuotaExceededError" ||
            e.name === "QUOTA_EXCEEDED_ERR" ||
            e.name === "NS_ERROR_DOM_QUOTA_REACHED"
          ) {
            data.splice(0, 1);

            localStorage.setItem("log", JSON.stringify(storeArray));
            //console.log(arr);
          }
        }
      }
}


const getLogs = () => {
  var storeArray = [];
    if (localStorage?.getItem("log") !== "") {
        JSON.parse(localStorage.getItem("log"))?.map((itm) =>
          storeArray.push(itm)
        );
      }
      return storeArray;
}


module.exports = {setLog,getLogs}
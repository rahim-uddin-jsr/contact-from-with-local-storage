function getInputFiledValueByID(id) {
        const inputFiled = document.getElementById(id);
        const inputFiledValue = inputFiled.value;
        inputFiled.value = "";
        return inputFiledValue;
      }
      function setInputFiledDefaultValueByID(id, valueFromLocalStorage) {
        const inputFiled = document.getElementById(id);
        inputFiled.value = valueFromLocalStorage;
      }
      function showLocalStorageDataOnUI(obj) {
        setInputFiledDefaultValueByID("name-input", obj.name);
        setInputFiledDefaultValueByID("email-input", obj.email);
        setInputFiledDefaultValueByID("massage-input", obj.massage);
      }

      function sendInfo() {
        const name = getInputFiledValueByID("name-input");
        const email = getInputFiledValueByID("email-input");
        const massage = getInputFiledValueByID("massage-input");
        console.log(name, email, massage);
        const userContacts = { name, email, massage };
        setObjectToLocalStorage("userContacts", userContacts);
      }
      function setObjectToLocalStorage(key, obj) {
        const objToString = JSON.stringify(obj);
        localStorage.setItem(key, objToString);
        alert("added successfully");
      }
      function getObjectToLocalStorage(key) {
        const stringObj = localStorage.getItem(key);
        const obj = JSON.parse(stringObj);
        showLocalStorageDataOnUI(obj);
      }
      getObjectToLocalStorage("userContacts");

      function setToLocalStorage(key, id) {
        const inputFiled = document.getElementById(id);
        const inputFiledValue = inputFiled.value;
        localStorage.setItem(key, inputFiledValue);
        alert(`${key}= ${inputFiledValue} added to local storage`);
        inputFiled.value = "";
      }

      function deleteDataFromLocalStorage(key) {
        if (localStorage.getItem(key) === null) {
          alert(`already empty`);
        } else {
          localStorage.removeItem(key);
          alert(`${key} is deleted successfully from local storage`);
        }
        document.getElementById("from").addEventListener("click", (e) => {
          event.target.reset();
        });
      }
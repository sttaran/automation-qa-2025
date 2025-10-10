function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Product A" };
        console.log("Data fetched:", data);
        callback(null, data);
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        const processedData = { ...data, price: 29.99 };
        console.log("Data processed:", processedData);
        callback(null, processedData);
    }, 800);
}

function saveData(processedData, callback) {
    setTimeout(() => {
        const savedResult = { status: "success", data: processedData };
        console.log("Data saved:", savedResult);
        callback(null, savedResult);
    }, 1200);
}



// Callback Hell example
fetchData((error, data) => {
    if (error) {
        console.error("Error fetching data:", error);
        return;
    }
    processData(data, (error, processedData) => {
        if (error) {
            console.error("Error processing data:", error);
            return;
        }
        saveData(processedData, (error, savedResult) => {
            if (error) {
                console.error("Error saving data:", error);
                return;
            }
            console.log("All operations completed successfully:", savedResult);
        });
    });
});


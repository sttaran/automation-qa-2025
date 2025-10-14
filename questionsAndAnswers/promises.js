const response = await fetch("https://google.com");

// Start waiting for popup before clicking. Note no await.


// await page.getByText('open the popup').click();
// const popup = await page.waitForEvent('popup');


const popupPromise = page.waitForEvent('popup');
await page.getByText('open the popup').click();
const popup = await popupPromise;

//Created By OmriW
const { Builder, By} =require('selenium-webdriver');

async function checkboxForm () {
    let driver = new Builder().forBrowser('chrome').build();
try {
    (await driver).get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
    (await driver).findElement(By.xpath("//input[@id= 'name']")).sendKeys("My Name");
    (await driver).findElement(By.xpath("//input[@id='comment']")).sendKeys("This is my comment");
    (await driver).findElement(By.xpath("//input[@value= 'presidential-suite']/following::span")).click();
    (await driver).findElement(By.xpath("//nb-checkbox[@value= 'breakfast']/label/span")).click();
    (await driver).findElement(By.xpath("//nb-checkbox[@value= 'lunch']/label/span")).click();
    (await driver).findElement(By.xpath("//button[@id='submit']")).click();
} 
catch (error) {
    console.log(error);
    
}
}

checkboxForm();
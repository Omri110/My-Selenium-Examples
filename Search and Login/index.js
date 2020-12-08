//Created By OmriW

const { Builder, By, Key, util } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");

async function example() 
{
  let driver_face = await new Builder().forBrowser("chrome").build();
  let driver_inst = await new Builder().forBrowser("chrome").build();


  await driver_face.get("http://google.com");
  await driver_face.findElement(By.name("q")).sendKeys("Mark Zuckerberg Facebook", Key.RETURN);
  //await driver.FindElement(By.CssSelector("span:contains(Profil Renata Melster)")).Click();
  (await driver_face).findElement(By.className("LC20lb DKV0Md")).click(); 

  try {
  (await driver_face).findElement(By.css('#email')).sendKeys("test@gmail.com");
  (await driver_face).findElement(By.css('#pass')).sendKeys("testpass");
  (await driver_face).findElement(By.css('#loginbutton')).click(); 
  (await driver_face).findElement(By.xpath("//label[@id='loginbutton']/input")).click(); 
    
  } catch (error) 
  {
    console.log("Facebook Error:", error);    
  }  
  
  await driver_inst.get("http://google.com");
  await driver_inst.findElement(By.name("q")).sendKeys("Mark Zuckerberg instagram ", Key.RETURN);
  (await driver_inst).findElement(By.className("TbwUpd NJjxre")).click(); 

  try {
    (await driver_inst).findElement(By.css("span > a:nth-child(1) > button")).click(); 
        
  } 
  
  catch (error) {
    console.log("Instagram Error:", error);
    
  } 
    

}

example();







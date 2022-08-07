function getUserData({ firstName, favoriteColor = 'green' }) {
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  console.log (getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // * firstname Alejandro, favoriteColor purple  เพราะกำหนดสีในconsole
  console.log (getUserData({ firstName: 'Melissa' })); // ** firstname = Melissa , favoriteColor ,green
  console.log ( getUserData({})); // firstname จะขึ้น undefined เพราะไม่ได้ประกาศตัวแปล , favoriteColor green***
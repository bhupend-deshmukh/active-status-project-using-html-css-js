console.log("Bhupendra Deshmukh");


const fetchData =async()=>{
  const resp = await fetch("JavaScript/data.json")
  const data = await resp.json()
  return data
}

const dailyData = async ()=>{

  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.daily
  })
  const testing1 = document.querySelectorAll('.testing1')
  const testing2 = document.querySelectorAll('.testing2')
  Array.from(testing1).forEach((e, i)=>{
    e.innerHTML = `${currList[i].current}hrs`
  })
  Array.from(testing2).forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })
  // document.querySelector(".work-current").innerHTML = `${currList[0].current}hrs`
  // document.querySelector(".work-previous").innerHTML = `Last Week - ${currList[0].previous}hrs`
  // document.querySelector(".exe-current").innerHTML = `${currList[1].current}hrs`
  // document.querySelector(".exe-previous").innerHTML = `Last Week - ${currList[1].previous}hrs`
  // document.querySelector(".play-current").innerHTML = `${currList[2].current}hrs`
  // document.querySelector(".play-previous").innerHTML = `Last Week - ${currList[2].previous}hrs`
  // document.querySelector(".social-current").innerHTML = `${currList[3].current}hrs`
  // document.querySelector(".social-previous").innerHTML = `Last Week - ${currList[3].previous}hrs`
  // document.querySelector(".study-current").innerHTML = `${currList[4].current}hrs`
  // document.querySelector(".study-previous").innerHTML = `Last Week - ${currList[4].previous}hrs`
  // document.querySelector(".self-current").innerHTML = `${currList[5].current}hrs`
  // document.querySelector(".self-previous").innerHTML = `Last Week - ${currList[5].previous}hrs`
}

const weeklyData = async()=>{
  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.weekly
  })
  const testing1 = document.querySelectorAll('.testing1')
  const testing2 = document.querySelectorAll('.testing2')
  Array.from(testing1).forEach((e, i)=>{
    e.innerHTML = `${currList[i].current}hrs`
  })
  Array.from(testing2).forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })
  // document.querySelector(".work-current").innerHTML = `${currList[0].current}hrs`
  // document.querySelector(".work-previous").innerHTML = `Last Week - ${currList[0].previous}hrs`
  // document.querySelector(".exe-current").innerHTML = `${currList[1].current}hrs`
  // document.querySelector(".exe-previous").innerHTML = `Last Week - ${currList[1].previous}hrs`
  // document.querySelector(".play-current").innerHTML = `${currList[2].current}hrs`
  // document.querySelector(".play-previous").innerHTML = `Last Week - ${currList[2].previous}hrs`
  // document.querySelector(".social-current").innerHTML = `${currList[3].current}hrs`
  // document.querySelector(".social-previous").innerHTML = `Last Week - ${currList[3].previous}hrs`
  // document.querySelector(".study-current").innerHTML = `${currList[4].current}hrs`
  // document.querySelector(".study-previous").innerHTML = `Last Week - ${currList[4].previous}hrs`
  // document.querySelector(".self-current").innerHTML = `${currList[5].current}hrs`
  // document.querySelector(".self-previous").innerHTML = `Last Week - ${currList[5].previous}hrs`
}

const monthlyData = async()=>{
  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.monthly
  })
  const testing1 = document.querySelectorAll('.testing1')
  const testing2 = document.querySelectorAll('.testing2')
  Array.from(testing1).forEach((e, i)=>{
    e.innerHTML = `${currList[i].current}hrs`
  })
  Array.from(testing2).forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })
  // document.querySelector(".work-current").innerHTML = `${currList[0].current}hrs`
  // document.querySelector(".work-previous").innerHTML = `Last Week - ${currList[0].previous}hrs`
  // document.querySelector(".exe-current").innerHTML = `${currList[1].current}hrs`
  // document.querySelector(".exe-previous").innerHTML = `Last Week - ${currList[1].previous}hrs`
  // document.querySelector(".play-current").innerHTML = `${currList[2].current}hrs`
  // document.querySelector(".play-previous").innerHTML = `Last Week - ${currList[2].previous}hrs`
  // document.querySelector(".social-current").innerHTML = `${currList[3].current}hrs`
  // document.querySelector(".social-previous").innerHTML = `Last Week - ${currList[3].previous}hrs`
  // document.querySelector(".study-current").innerHTML = `${currList[4].current}hrs`
  // document.querySelector(".study-previous").innerHTML = `Last Week - ${currList[4].previous}hrs`
  // document.querySelector(".self-current").innerHTML = `${currList[5].current}hrs`
  // document.querySelector(".self-previous").innerHTML = `Last Week - ${currList[5].previous}hrs`
}
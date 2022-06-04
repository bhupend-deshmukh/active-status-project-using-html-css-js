console.log("Bhupendra Deshmukh");


const cardGroup = document.querySelectorAll('.mycardclass')
// console.log(mainCardBody)
const fetchData =async()=>{
  const resp = await fetch("JavaScript/data.json")
  // console.log(resp);
  const data = await resp.json()
  return data
}

const dailyData = async ()=>{

  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.daily
  })
  cardGroup.forEach(elem=>{
    elem.classList.remove('d-none')
  })
  const current = document.querySelectorAll('.current')
  const previous = document.querySelectorAll('.previous')

  current.forEach((e,i)=>{
    console.log(e,i,"using forEach JAVASCRIPT....");
    e.innerHTML = `${currList[i].current}hrs`   
  })
  
  previous.forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })

}


const weeklyData = async()=>{
  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.weekly
  })
  cardGroup.forEach(elem=>{
    elem.classList.remove('d-none')
  })
  const current = document.querySelectorAll('.current')
  const previous = document.querySelectorAll('.previous')

  current.forEach((e,i)=>{
    console.log(e,i,"using forEach JAVASCRIPT....");
    e.innerHTML = `${currList[i].current}hrs`
  })

  previous.forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })
}

const monthlyData = async()=>{
  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.monthly
  })
  cardGroup.forEach(elem=>{
    elem.classList.remove('d-none')
  })
  
  const current = document.querySelectorAll('.current')
  const previous = document.querySelectorAll('.previous')
  
  current.forEach((e,i)=>{
    console.log(e,i,"using forEach JAVASCRIPT....");
    e.innerHTML = `${currList[i].current}hrs`
  })

  previous.forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })
}

 
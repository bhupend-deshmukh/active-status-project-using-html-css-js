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
  
  const current = document.querySelectorAll('.current')
  const previous = document.querySelectorAll('.previous')

  current.forEach((e,i)=>{
    console.log(e,i,"using forEach JAVASCRIPT....");
    e.innerHTML = `${currList[i].current}hrs`
  })

  previous.forEach((e, i)=>{
    e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  })


  // Array.from(current).map((e, i)=>{
  //   console.log(e,"Hachhhhhhhhhhhh Hoy.............");
  //   e.innerHTML = `${currList[i].current}hrs`
  // })

}


const weeklyData = async()=>{
  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.weekly
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


  // Array.from(current).forEach((e, i)=>{
  //   e.innerHTML = `${currList[i].current}hrs`
  // })
  // Array.from(previous).forEach((e, i)=>{
  //   e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  // })
}

const monthlyData = async()=>{
  const data = await fetchData()
  const currList = data.map(content=>{
    return content.timeframes.monthly
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

  
  // Array.from(current).forEach((e, i)=>{
  //   e.innerHTML = `${currList[i].current}hrs`
  // })
  // Array.from(previous).forEach((e, i)=>{
  //   e.innerHTML = `Last Week - ${currList[i].previous}hrs`
  // })

}
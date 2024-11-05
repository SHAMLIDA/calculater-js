 const display=(content)=> {
    
    output.value+=content
}
const showResult=()=>{
  try {
    output.value=eval(output.value)
  } 
  catch {
    output.value=""
    output.placeholder="invalidvalue"
  }
  finally{
    console.log("finally block task complted");
  }

}
const removeAll=()=>{
    output.value=''
}
const removeEnd=()=>{
    output.value=output.value.slice(0,-1)
}
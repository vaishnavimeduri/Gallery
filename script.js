function selectPanel(panelNo){
  func();
  document.getElementById(panelNo).classList.add("active")
}
function func(){
    document.getElementById('panel-1').classList.remove('active')
    document.getElementById('panel-2').classList.remove('active')
    document.getElementById('panel-3').classList.remove('active')
    document.getElementById('panel-4').classList.remove('active')
    document.getElementById('panel-5').classList.remove('active')
}



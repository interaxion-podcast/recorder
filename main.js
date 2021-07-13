import Recorder from "./lib/recorder.js"

// ボタンとか取ってきてるだけ
const recordBtn = document.getElementById("recordBtn")
const stopBtn = document.getElementById("stopBtn")
stopBtn.disabled = true
const player = document.getElementById("player")
const downloadLink = document.getElementById("downloadLink")
const status = document.getElementById("recordingStatus")
const recorder = new Recorder()

// 録音ボタンがクリックされたら開始
recordBtn.addEventListener("click", () => {
  recordBtn.disabled = true
  stopBtn.disabled = false
  status.style = "display: inline;"
  downloadLink.style = "display: none;"
  player.src = ""
  recorder.start()
})

// 停止ボタンがクリックされたら停止
stopBtn.addEventListener("click", () => {
  player.src = ""
  const url = recorder.stop()
  stopBtn.disabled = true
  player.src = url
  downloadLink.href = url
  status.style = "display: none;"
  downloadLink.style = "display: inline;"
})

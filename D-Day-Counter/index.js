const dateFormMaker = function() {
    const inputYear = document.querySelector('#target-year-input').value;
    const inputMonth = document.querySelector('#target-month-input').value
    const inputDay = document.querySelector('#target-day-input').value

    
    // console.log(inputYear, inputMonth, inputDay )
    // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDay
    const dateFormat = `${inputYear}-${inputMonth}-${inputDay}` // 템플릿 리터럴 

     return dateFormat;
}

const counterMake = function() {
    const targetDateInput = dateFormMaker()
    const nowDate = new Date()
    const targetDate = new Date(targetDateInput).setHours(0,0,0,0)
    const remaining = (targetDate - nowDate) / 1000

    if(remaining <= 0) {
        // 만약 remainning이 
        console.log('타이머가 종료되었습니다.')
    } else if(isNaN(remaining)) {
        // 만약 잘못된 날짜가 들어왔다면, 유효한 시간대가 아닙니다 출력
        console.log('유효한 시간대가 아닙니다')

    }

    const remainingDate = Math.floor(remaining / 3600 / 24) 
    const remainingHour = Math.floor(remaining / 3600 ) % 24
    const remainingMin = Math.floor(remaining / 60) % 60
    const remainingSec = Math.floor(remaining) % 60

    console.log(remainingDate, remainingHour, remainingMin, remainingSec)

}

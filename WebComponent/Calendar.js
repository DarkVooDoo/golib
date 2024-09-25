class Calendar extends HTMLElement{
    constructor(){
        super()

        this.innerHTML = `
            <div class="date-time">
                <div class="calendar">
                    <input type="text" readonly id="date" class="date-input" />
                    <div class="date-option">
                        <div class="date-change">
                            <button type="button" class="date-change-btn" onclick="onChangeMonth('minus')"></button>
                            <div class="date-change-picker">
                                <div style="position: relative;">
                                    <input type="text" class="date-change-month" readonly />
                                    <div class="date-change-picker-month"></div>
                                </div>
                                <div style="position: relative;">
                                    <input type="text" class="date-change-year" readonly />
                                    <div class="date-change-picker-year"></div>
                                </div>
                            </div>
                            <button type="button" class="date-change-btn" onclick="onChangeMonth('plus')"></button>
                        </div>
                      <div class="date-calendar"></div>
                    </div>
                </div>
            </div>
        `
        const onChangeLong = (value, type)=>{
            if (type === "month"){
                renderCalendar(parseInt(dateYear.value), parseInt(value))
            }else{
                renderCalendar(parseInt(value), parseInt(dateMonth.dataset.month))
            }

        }
    }
}
customElements.define("calendar", Calendar)

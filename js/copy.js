var items = ['Комната номер: ', 'Срок аренды в часах: ', 'Сумма оплаты: ', 'Способ оплаты: '];

let CancelAllBtn = document.querySelectorAll('.phone-content-button-cancel')

let
    StartButton = document.getElementById('rent-number'),
    InfoStart = document.getElementById('info-start'),
    SdatText = document.getElementById('sdat-nomer-text'),
    SoundClick = document.getElementById('sound-click'),
    SoundMessage = document.getElementById('sound-message'),
    SoundAbort = document.getElementById('sound-abort'),
    RentForm = document.getElementById('rent-form'),
    RentRepeatForm = document.getElementById('rent-repeat-form'),
    StopRentButton = document.getElementById('stop-rent'),
    RepeatRentButton = document.getElementById('prodlit'),
    ChooseRoomText = document.getElementById('choose-room'),
    ChooseStopRent = document.getElementById('choose-stop-rent'),
    ChooseRepeatRent = document.getElementById('choose-repeat-rent'),
    CashText = document.getElementById('cash-text'),
    CardText = document.getElementById('card-pay-text'),
    CardBtn = document.getElementById('card'),
    CardPayForm = document.getElementById('card-pay-form'),
    CardPayInput = document.getElementById('card-pay-cost'),
    InputStopRent = document.getElementById('input-stop-rent'),
    InputRepeatRent = document.getElementById('input-repeat-rent'),
    ShtrafText = document.getElementById('shtraf-text'),
    ShtrafBtn = document.getElementById('shtraf'),
    ShtrafForm = document.getElementById('shtraf-form'),
    InputShtraf = document.getElementById('input-shtraf'),
    InputCash = document.getElementById('input-cash'),
    ChooseRoom20 = document.getElementById('choose-room20'),
    ChooseRoom21 = document.getElementById('choose-room21'),
    ChooseRoom22 = document.getElementById('choose-room22'),
    ChoosePayMethod = document.getElementById('choose-pay-method'),
    ChooseKaspiMethod = document.getElementById('choose-kaspi'),
    CashBtn = document.getElementById('cash'),
    CashForm = document.getElementById('cash-form'),
    CancelRoomTime = document.getElementById('cancel-choose-time'),
    startmenu = document.getElementById('phone-menu1'),
    RoomsOpen = document.getElementById('rooms'),
    N20Button = document.getElementById('n20'),
    N21Button = document.getElementById('n21'),
    N22Button = document.getElementById('n22'),
    SumInfoSpan = document.getElementById('sum-info-span'),
    RentTimeForm = document.getElementById('rent-time-form'),
    CancelAllButton = document.getElementById('refresh-btn'),
    KaspiButton = document.getElementById('kaspi-button'),
    KaspiMethodText = document.getElementById('kaspi-method-text'),
    PushButton = document.getElementById('push-send-cost'),
    RoomChoseTimeInput = document.getElementById('room-chose-time-input'),
    RentTimeCount = document.getElementById('rent-time-count'),
    RentTimeSpan = document.getElementById('rent-time-info-span'),
    CheckAllForm = document.getElementById('check-all-form'),
    CheckAllText = document.getElementById('check-all-text'),
    FinalTextSpan = document.getElementById('final-text'),
    AcceptButton = document.getElementById('accept-button'),
    OwnerInfoText = document.getElementById('owner-info-text'),
    OwnerInfoTextRentStart = document.getElementById('info-text-rent-start'),
    CountInfoText = document.getElementById('count-info-text'),
    InfoText2 = document.getElementById('final-text2'),
    HelperText = document.getElementById('info-content-helper'),
    HelperTextOwner = document.getElementById('info-helper-owner'),
    menuSdat = document.getElementById('phone-menu2');




StartButton.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'flex'
    SdatText.style.display = 'flex'
    ChooseRoomText.style.display = 'flex'
    HelperText.innerText = "Выберите номер который хотите сдать, приложение будет отображать весь список ваших номеров досутпных для сдачи"
    InfoStart.style.display = 'flex'

},)

StopRentButton.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'none'
    SdatText.style.display = 'none'
    ChooseRoomText.style.display = 'none'
    RentForm.style.display = 'flex'
    ChooseStopRent.style.display = 'flex'
    InputStopRent.style.display = 'flex'
    InfoStart.style.display = 'none'
},)


RepeatRentButton.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'none'
    SdatText.style.display = 'none'
    ChooseRoomText.style.display = 'none'
    RentRepeatForm.style.display = 'flex'
    ChooseRepeatRent.style.display = 'flex'
    InputRepeatRent.style.display = 'flex'
    InfoStart.style.display = 'none'
},)

ShtrafBtn.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'none'
    SdatText.style.display = 'none'
    ChooseRoomText.style.display = 'none'
    ShtrafForm.style.display = 'flex'
    ShtrafText.style.display = 'flex'
    InputShtraf.style.display = 'flex'
    InfoStart.style.display = 'none'
},)



KaspiButton.addEventListener('click', ()=> {
    CashForm.style.display = 'flex'
    InputCash.style.display = 'flex'
    ChooseKaspiMethod.style.display = 'flex'
    menuSdat.style.display = 'none'
    RoomsOpen.style.display = 'none'
    items[3] = String('Способ оплаты: Kaspi перевод')
    HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку"

},)

CashBtn.addEventListener('click', ()=> {
    CashForm.style.display = 'flex'
    InputCash.style.display = 'flex'
    CashText.style.display = 'flex'
    RoomsOpen.style.display = 'none'
    menuSdat.style.display = 'none'
    items[3] = String('Способ оплаты: наличные')
    HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку"
},)

CardBtn.addEventListener('click', ()=> {
    CashForm.style.display = 'flex'
    InputCash.style.display = 'flex'
    CardText.style.display = 'flex'
    RoomsOpen.style.display = 'none'
    menuSdat.style.display = 'none'
    items[3] = String('Способ оплаты: банковская карта')
    HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку"

},)






N20Button.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'none'
    RoomsOpen.style.display = 'flex'
    ChooseRoom20.style.display = 'flex'
    ChoosePayMethod.style.display = 'flex'
    items[0] = String('Комната номер: 20')
    HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика"
},)

N21Button.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'none'
    RoomsOpen.style.display = 'flex'
    ChooseRoom21.style.display = 'flex'
    ChoosePayMethod.style.display = 'flex'
    items[0] = String('Комната номер: 21')
    HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика"
},)

N22Button.addEventListener('click', () => {
    startmenu.style.display = 'none'
    menuSdat.style.display = 'none'
    RoomsOpen.style.display = 'flex'
    ChooseRoom22.style.display = 'flex'
    ChoosePayMethod.style.display = 'flex'
    items[0] = String('Комната номер: 22')
    HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика"
},)


PushButton.addEventListener('click', () => {
    CashForm.style.display = 'none'
    items[2] = items[2]+InputCash.value
    RentTimeForm.style.display = 'flex'
    SumInfoSpan.firstChild.nodeValue = "Сумма оплаты: " + InputCash.value;
    SumInfoSpan.style.display = 'flex'
    HelperText.innerText = "Впишите колличество часов, по желанию заказчика колличесвто часов можно сделать фиксированным"
    console.log(items)
},)

RentTimeCount.addEventListener('click', () => {
    CashForm.style.display = 'none'
    items[1] = items[1]+RoomChoseTimeInput.value
    RentTimeForm.style.display = 'none'
    RentTimeSpan.firstChild.nodeValue = "Срок аренды в часах: " + RoomChoseTimeInput.value;
    RentTimeSpan.style.display = 'flex'
    CheckAllForm.style.display = 'flex'
    CheckAllText.style.display = 'flex'
    FinalTextSpan.innerText = items
    FinalTextSpan.style.display = 'flex'
    HelperText.innerText = "Приложение формирует итоговый перечень, для проверки, если вы допустили ошибку нажмите кнопку -отмена операции-, если данные заполненны верно нажмите кнопку -сдать номер- "
    console.log(items)
},)

AcceptButton.addEventListener('click', () => {
    OwnerInfoText.style.display ='flex'
    OwnerInfoTextRentStart.style.display ='flex'
    CountInfoText.style.display = 'flex'
    InfoText2.style.display = 'flex'
    InfoText2.innerText = items[0] + " сдана в аренду"
    CountInfoText.innerText = "Сумма в кассе: " + InputCash.value
    OwnerInfoText.innerText = items
    HelperText.innerText = "Поздравляем! Вы успешно освоили функцию сдачи номера в приложении."
    HelperTextOwner.innerText = "Отчет о сдачи номера пришел владельцу, по желанию заказчика уведомления можно отключить"
    InfoStart.style.display = 'flex'
    CheckAllForm.style.display = 'none'
},)



CancelRoomTime.addEventListener('click', () => {
    startmenu.style.display = 'flex'
    InfoStart.style.display = 'flex'
    RentTimeForm.style.display = 'none'
    SumInfoSpan.style.display = 'none'
    SdatText.style.display = 'none'
    CardText.style.display = 'none'
    ChoosePayMethod.style.display = 'none'
    ChooseRoomText.style.display = 'none'
    ChooseRoom20.style.display = 'none'
    ChooseRoom21.style.display = 'none'
    ChooseRoom22.style.display = 'none'
    ChooseKaspiMethod.style.display = 'none'
    CashText.style.display = 'none'
    CardText.style.display = 'none'
    RentTimeSpan.style.display = 'none'
    HelperText.innerText = "Выберите действие для работы с приложением"
    InputCash.value = ''
    RoomChoseTimeInput.value = ''
    items = ['Комната номер: ', 'Срок аренды в часах: ', 'Сумма оплаты: ']

},)


for (var a = 0; a < CancelAllBtn.length; a++) {

    CancelAllBtn[a].addEventListener('click',function(){
        startmenu.style.display = 'flex'
        InfoStart.style.display = 'flex'
        menuSdat.style.display = 'none'
        RoomsOpen.style.display = 'none'
        SdatText.style.display = 'none'
        ChooseRoomText.style.display = 'none'
        ChooseRoom20.style.display = 'none'
        ChooseRoom21.style.display = 'none'
        ChooseRoom22.style.display = 'none'
        ChooseKaspiMethod.style.display = 'none'
        ChoosePayMethod.style.display = 'none'
        KaspiMethodText.style.display = 'none'
        RentForm.style.display = 'none'
        ChooseStopRent.style.display = 'none'
        InputStopRent.style.display = 'none'
        RentRepeatForm.style.display = 'none'
        InputRepeatRent.style.display = 'none'
        ChooseRepeatRent.style.display = 'none'
        ShtrafForm.style.display = 'none'
        ShtrafText.style.display = 'none'
        InputShtraf.style.display = 'none'
        CashForm.style.display = 'none'
        InputCash.style.display = 'none'
        CashText.style.display = 'none'
        CardPayForm.style.display = 'none'
        CardPayInput.style.display = 'none'
        CardText.style.display = 'none'
        ChooseRoom22.style.display = 'none'
        ChooseKaspiMethod.style.display = 'none'
        CashText.style.display = 'none'
        CardText.style.display = 'none'
        InputCash.value = ''
        HelperText.innerText = "Выберите действие для работы с приложением"
        items = ['Комната номер: ', 'Срок аренды: ', 'Сумма оплаты: ']
        OwnerInfoText.style.display ='none'
        OwnerInfoTextRentStart.style.display ='none'
        CountInfoText.style.display = 'none'
        InfoText2.style.display = 'none'
        SoundAbort.play()
    });
}


CancelAllButton.addEventListener('click', ()=> {
    startmenu.style.display = 'flex'
    InfoStart.style.display = 'flex'
    menuSdat.style.display = 'none'
    RoomsOpen.style.display = 'none'
    SdatText.style.display = 'none'
    ChooseRoomText.style.display = 'none'
    ChooseRoom20.style.display = 'none'
    ChooseRoom21.style.display = 'none'
    ChooseRoom22.style.display = 'none'
    ChooseKaspiMethod.style.display = 'none'
    ChoosePayMethod.style.display = 'none'
    KaspiMethodText.style.display = 'none'
    RentForm.style.display = 'none'
    ChooseStopRent.style.display = 'none'
    InputStopRent.style.display = 'none'
    RentRepeatForm.style.display = 'none'
    InputRepeatRent.style.display = 'none'
    ChooseRepeatRent.style.display = 'none'
    ShtrafForm.style.display = 'none'
    ShtrafText.style.display = 'none'
    InputShtraf.style.display = 'none'
    CashForm.style.display = 'none'
    InputCash.style.display = 'none'
    CashText.style.display = 'none'
    CardPayForm.style.display = 'none'
    CardPayInput.style.display = 'none'
    CardText.style.display = 'none'
    SumInfoSpan.style.display = 'none'
    RoomChoseTimeInput.style.display = 'none'
    RentTimeCount.style.display = 'none'
    RentTimeForm.style.display = 'none'
    SumInfoSpan.style.display = 'none'
    SdatText.style.display = 'none'
    CardText.style.display = 'none'
    ChoosePayMethod.style.display = 'none'
    ChooseRoomText.style.display = 'none'
    ChooseRoom20.style.display = 'none'
    ChooseRoom21.style.display = 'none'
    ChooseRoom22.style.display = 'none'
    ChooseKaspiMethod.style.display = 'none'
    CashText.style.display = 'none'
    CardText.style.display = 'none'
    InputCash.value = ''
    HelperText.innerText = "Выберите действие для работы с приложением"
    items = ['Комната номер: ', 'Срок аренды: ', 'Сумма оплаты: ']
},)


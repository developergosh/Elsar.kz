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
    ShowBTN = document.getElementById('pokaz'),
    ShowForm = document.getElementById('pokaz-form'),
    ChoseStop20 = document.getElementById('chose-stop20'),
    ChoseStop21 = document.getElementById('chose-stop21'),
    ChoseStop22 = document.getElementById('chose-stop22'),
    RepeatRentButton = document.getElementById('prodlit'),
    ChooseRoomText = document.getElementById('choose-room'),
    ChooseShtrafText = document.getElementById('Chose-Shtraf-room-text'),
    Shtraf20Text = document.getElementById('Shtraf20-text'),
    Shtraf21Text = document.getElementById('Shtraf21-text'),
    Shtraf22Text = document.getElementById('Shtraf22-text'),
    ChooseStopRent = document.getElementById('choose-stop-rent'),
    ChooseRepeatRent = document.getElementById('choose-repeat-rent'),
    CashText = document.getElementById('cash-text'),
    CardText = document.getElementById('card-pay-text'),
    CardBtn = document.getElementById('card'),
    CardPayForm = document.getElementById('card-pay-form'),
    CardPayInput = document.getElementById('card-pay-cost'),
    InputStopRent = document.getElementById('input-stop-rent'),
    TimerShowText = document.getElementById('Show-timer-text'),

    ShtrafText = document.getElementById('shtraf-text'),
    ShtrafBtn = document.getElementById('shtraf'),
    ShtrafForm = document.getElementById('shtraf-form'),
    Shtraf20Btn = document.getElementById('Shtraf20'),
    Shtraf21Btn = document.getElementById('Shtraf21'),
    Shtraf22Btn= document.getElementById('Shtraf22'),
    ShtrafPayForm = document.getElementById('shtraf-pay-form'),
    ShtrafCashMethodText = document.getElementById('Shtraf-cash-method-text'),
    ShtrafCostText = document.getElementById('Shtraf-cost-text'),
    ShtrafPushSendBtn = document.getElementById('Shtraf-push-send-cost'),
    ShtrafChechAllForm = document.getElementById('Shtraf-check-all-form'),
    ShtrafAcceptBTN = document.getElementById('Shtraf-accept-button'),
    ReasonShtrafForm = document.getElementById('reason-shtraf-form'),
    KaspiShtraf = document.getElementById('kaspi-button-shtraf'),
    CashShtraf = document.getElementById('cash-shtraf'),
    ShtrafCashForm = document.getElementById('shtraf-cash-form'),
    ShtrafInput = document.getElementById('shtraf-input'),
    ReasonShtrafInput = document.getElementById('reason-shtraf-input'),
    ReasonShtrafSendBtn = document.getElementById('Reason-shtraf-send'),
    CardShtraf = document.getElementById('card-shtraf'),
    InputShtraf = document.getElementById('input-shtraf'),
    InputCash = document.getElementById('input-cash'),
    ChooseRoom20 = document.getElementById('choose-room20'),
    ChooseRoom21 = document.getElementById('choose-room21'),
    ChooseRoom22 = document.getElementById('choose-room22'),
    Repeat20Text = document.getElementById('Repeat20-text'),
    Repeat21Text = document.getElementById('Repeat21-text'),
    Repeat22Text = document.getElementById('Repeat22-text'),
    Show20Text = document.getElementById('Show20-text'),
    Show21Text = document.getElementById('Show21-text'),
    Show22Text = document.getElementById('Show22-text'),
    Show20BTN = document.getElementById('Show20'),
    Show21BTN  = document.getElementById('Show21'),
    Show22BTN  = document.getElementById('Show22'),
    ShowText = document.getElementById('Show-text'),
    EndPokazForm = document.getElementById('end-pokaz-form'),
    ChoosePayMethod = document.getElementById('choose-pay-method'),
    ChooseRepeatRoomText = document.getElementById('Chose-repeat-room-text'),
    ChooseShowRoomText = document.getElementById('Chose-Show-room-text'),
    ChooseKaspiMethod = document.getElementById('choose-kaspi'),
    CashBtn = document.getElementById('cash'),
    CashForm = document.getElementById('cash-form'),
    CancelRoomTime = document.getElementById('cancel-choose-time'),
    startmenu = document.getElementById('phone-menu1'),
    RoomsOpen = document.getElementById('rooms'),
    N20Button = document.getElementById('n20'),
    N21Button = document.getElementById('n21'),
    N22Button = document.getElementById('n22'),
    Repeat20Btn = document.getElementById('Repeat20'),
    Repeat21Btn = document.getElementById('Repeat21'),
    Repeat22Btn = document.getElementById('Repeat22'),
    SumInfoSpan = document.getElementById('sum-info-span'),
    RentTimeForm = document.getElementById('rent-time-form'),
    CancelAllButton = document.getElementById('refresh-btn'),
    CancelAllButtonOwner = document.getElementById('refresh-btn-owner'),
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
    InfoStartShow = document.getElementById('Info-start-show'),
    OwnerInfoTextRentStart = document.getElementById('info-text-rent-start'),
    CountInfoText = document.getElementById('count-info-text'),
    InfoText2 = document.getElementById('final-text2'),
    HelperText = document.getElementById('info-content-helper'),
    HelperTextOwner = document.getElementById('info-helper-owner'),
    Stop20 = document.getElementById('Stop20'),
    Stop21 = document.getElementById('Stop21'),
    Stop22 = document.getElementById('Stop22'),
    ConfrimStopRentBtn = document.getElementById('confirm-stop-rent-btn'),
    menuSdat = document.getElementById('phone-menu2');



/*RENT BUTTONS  START */
/**/
StartButton.addEventListener('click', () => {
    SoundClick.play(),
        startmenu.style.display = 'none',
        menuSdat.style.display = 'flex',
        SdatText.style.display = 'flex',
        ChooseRoomText.style.display = 'flex',
        HelperText.innerText = "Выберите номер который хотите сдать, приложение будет отображать весь список ваших номеров досутпных для сдачи",
        InfoStart.style.display = 'flex';

},)

N20Button.addEventListener('click', () => {
    startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'flex',
        ChooseRoom20.style.display = 'flex',
        ChoosePayMethod.style.display = 'flex',
        items[0] = String('Комната номер: 20'),
        OwnerInfoTextRentStart.innerText = "Сдан номер в аренду",
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

N21Button.addEventListener('click', () => {
    startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'flex',
        ChooseRoom21.style.display = 'flex',
        ChoosePayMethod.style.display = 'flex',
        items[0] = String('Комната номер: 21'),
        OwnerInfoTextRentStart.innerText = "Сдан номер в аренду",
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

N22Button.addEventListener('click', () => {
    startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'flex',
        ChooseRoom22.style.display = 'flex',
        ChoosePayMethod.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Сдан номер в аренду",
        items[0] = String('Комната номер: 22'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)
/**/
/*RENT BUTTONS END*/



/*STOP RENT BUTTONS START*/
/**/
StopRentButton.addEventListener('click', () => {
    SoundClick.play(),
        HelperText.innerText = "Выберите номер комнаты, в которой вы хотите оставновить аренду из списка",
        startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        SdatText.style.display = 'none',
        ChooseRoomText.style.display = 'none',
        RentForm.style.display = 'flex',
        ChooseStopRent.style.display = 'flex',
        InputStopRent.style.display = 'flex',
        ConfrimStopRentBtn.style.visibility = 'hidden';
},)

Stop20.addEventListener('click', () => {
    Stop20.style.display = 'none',
    Stop21.style.display = 'none',
    Stop22.style.display = 'none',
    items[0] = String('Комната номер: 20'),
    ChoseStop20.style.display = 'flex',
    HelperText.innerText = "Перед финальным действием приложение уточняет верно ли выбрана функций, если да, нажмите - подтвердить - ",
    ConfrimStopRentBtn.style.visibility = 'visible',
    SoundClick.play();
},)

Stop21.addEventListener('click', () => {
        Stop20.style.display = 'none',
        Stop21.style.display = 'none',
        Stop22.style.display = 'none',
        items[0] = String('Комната номер: 21'),
        ChoseStop21.style.display = 'flex',
        ConfrimStopRentBtn.style.visibility = 'visible',
        HelperText.innerText = "Перед финальным действием приложение уточняет верно ли выбрана функций, если да, нажмите - подтвердить - ",
        SoundClick.play();
},)

Stop22.addEventListener('click', () => {
        Stop20.style.display = 'none',
        Stop21.style.display = 'none',
        Stop22.style.display = 'none',
        items[0] = String('Комната номер: 22'),
        ChoseStop22.style.display = 'flex',
        ConfrimStopRentBtn.style.visibility = 'visible',
        HelperText.innerText = "Перед финальным действием приложение уточняет верно ли выбрана функций, если да, нажмите - подтвердить - ",
        SoundClick.play();
},)
/**/
/*STOP RENT BUTTONS END*/




/*REPEAT RENT BUTTONS START*/
/**/
RepeatRentButton.addEventListener('click', () => {
    SoundClick.play(),
    startmenu.style.display = 'none',
    menuSdat.style.display = 'none',
    SdatText.style.display = 'none',
    ChooseRoomText.style.display = 'none',
    RentRepeatForm.style.display = 'flex',
    ChooseRepeatRent.style.display = 'flex',
    ChooseRepeatRoomText.style.display = 'flex',
    HelperText.innerText = "Выберите номер, в котором необходимо продлить аренду";
},)

Repeat20Btn.addEventListener('click', () => {
    startmenu.style.display = 'none',
        RentRepeatForm.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'flex',
        Repeat20Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Продлена аренда номера",
        items[0] = String('Комната номер: 20'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

Repeat21Btn.addEventListener('click', () => {
    startmenu.style.display = 'none',
        RentRepeatForm.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'flex',
        Repeat21Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Продлена аренда номера",
        items[0] = String('Комната номер: 21'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

Repeat22Btn.addEventListener('click', () => {
    startmenu.style.display = 'none',
        RentRepeatForm.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'flex',
        Repeat22Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Продлена аренда номера",
        items[0] = String('Комната номер: 22'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)
/**/
/*REPEAT RENT BUTTONS END */




/*SHTRAF BUTTONS START*/
/**/
ShtrafBtn.addEventListener('click', () => {
    SoundClick.play(),
        startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        SdatText.style.display = 'none',
        ChooseRoomText.style.display = 'none',
        ShtrafForm.style.display = 'flex',
        ShtrafText.style.display = 'flex',
        ChooseShtrafText.style.display = 'flex',
        InputShtraf.style.display = 'flex',
        HelperText.innerText = "Выберите номер комнаты, которую необходимо оштрафовать",
        InfoStart.style.display = 'none';

},)

Shtraf20Btn.addEventListener('click', () => {
        startmenu.style.display = 'none',
        RentRepeatForm.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'none',
        ShtrafForm.style.display = 'none',
        ShtrafPayForm.style.display = 'flex',
        Shtraf20Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Оштрафован номер",
        items[0] = String('Комната номер: 20'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

Shtraf21Btn.addEventListener('click', () => {
    startmenu.style.display = 'none',
        RentRepeatForm.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'none',
        ShtrafForm.style.display = 'none',
        ShtrafPayForm.style.display = 'flex',
        Shtraf21Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Оштрафован номер",
        items[0] = String('Комната номер: 21'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

Shtraf22Btn.addEventListener('click', () => {
    startmenu.style.display = 'none',
        RentRepeatForm.style.display = 'none',
        menuSdat.style.display = 'none',
        RoomsOpen.style.display = 'none',
        ShtrafForm.style.display = 'none',
        ShtrafPayForm.style.display = 'flex',
        Shtraf22Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Оштрафован номер",
        items[0] = String('Комната номер: 22'),
        HelperText.innerText = "Выберите способ оплаты, способ оплаты редактируется по желанию заказчика",
        SoundClick.play();
},)

CashShtraf.addEventListener('click', ()=> {
        ShtrafCashForm.style.display = 'flex',
        ShtrafInput.style.display = 'flex',
        ShtrafCashMethodText.style.display = 'flex',
        ShtrafCostText .style.display = 'flex',
        ShtrafPayForm.style.display = 'none',
        menuSdat.style.display = 'none',
        items[3] = String(' Способ оплаты: наличные'),
        HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку",
        SoundClick.play();
},)

KaspiShtraf.addEventListener('click', ()=> {
        ShtrafCashForm.style.display = 'flex',
        ShtrafInput.style.display = 'flex',
        ShtrafCashMethodText.style.display = 'flex',
        ShtrafCostText .style.display = 'flex',
        ShtrafPayForm.style.display = 'none',
        menuSdat.style.display = 'none',
        items[3] = String(' Способ оплаты: Каспий'),
        HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку",
        SoundClick.play();
},)

CardShtraf.addEventListener('click', ()=> {
        ShtrafCashForm.style.display = 'flex',
        ShtrafInput.style.display = 'flex',
        ShtrafCashMethodText.style.display = 'flex',
        ShtrafCostText .style.display = 'flex',
        ShtrafPayForm.style.display = 'none',
        menuSdat.style.display = 'none',
        items[3] = String(' Способ оплаты: банковская карта'),
        HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку",
        SoundClick.play();
},)

ShtrafPushSendBtn.addEventListener('click', () => {
        ShtrafCashForm.style.display = 'none',
        items[2] = items[2]+ShtrafInput.value,
        ReasonShtrafForm.style.display = 'flex',
        SumInfoSpan.firstChild.nodeValue = "Сумма оплаты: " + ShtrafInput.value,
        SumInfoSpan.style.display = 'flex',
        HelperText.innerText = "Укажите причину штрафа для отчетности",
        SoundClick.play();
},)

ReasonShtrafSendBtn.addEventListener('click', () => {
    ReasonShtrafForm.style.display = 'none',
    ShtrafChechAllForm.style.display = 'flex',
    OwnerInfoText.innerText = ReasonShtrafInput.value,
    HelperText.innerText = "Приложение формирует итоговый перечень, для проверки, если вы допустили ошибку нажмите кнопку -отмена операции-, если данные заполненны верно нажмите кнопку -Подтвердить- ",
    SoundClick.play();

},)


ShtrafAcceptBTN.addEventListener('click', () => {
    OwnerInfoText.style.display ='flex',
    OwnerInfoTextRentStart.style.display ='flex',
    CountInfoText.style.display = 'flex',
    OwnerInfoTextRentStart.innerText = items[0] + " Оштрафован",
    InfoText2.style.display = 'flex',
    InfoText2.innerText = items[0] + " Оштрафован",
    CountInfoText.innerText = "Сумма штрафа:  " + ShtrafInput.value  +  items[3],
    OwnerInfoText.innerText = "Причина штрафа: "  + ReasonShtrafInput.value,
    HelperText.innerText = "Поздравляем! Вы успешно освоили функцию штрафа в приложении. Для повторного обучения нажмите - ЧЕРНЫЙ КРУЖОЧЕК - на телефоне",
    HelperTextOwner.innerText = "Отчет о штрафах  пришел владельцу, по желанию заказчика уведомления можно отключить",
    InfoStart.style.display = 'flex',
    ShtrafChechAllForm.style.display = 'none',
    CancelAllButton.style.backgroundColor = 'black',
    SoundMessage.play();
},)

/*
* AcceptButton.addEventListener('click', () => {
    OwnerInfoText.style.display ='flex',
    OwnerInfoTextRentStart.style.display ='flex',
    CountInfoText.style.display = 'flex',
    InfoText2.style.display = 'flex',
    InfoText2.innerText = items[0] + " сдана в аренду",
    CountInfoText.innerText = "Сумма в кассе: " + InputCash.value,
    OwnerInfoText.innerText = items,
    HelperText.innerText = "Поздравляем! Вы успешно освоили функцию сдачи номера в приложении. Для повторного обучения нажмите - ЧЕРНЫЙ КРУЖОЧЕК - на телефоне",
    HelperTextOwner.innerText = "Отчет о сдачи номера пришел владельцу, по желанию заказчика уведомления можно отключить",
    InfoStart.style.display = 'flex',
    CheckAllForm.style.display = 'none',
    AcceptButton.style.visibility = 'hidden',
    CancelAllButton.style.backgroundColor = 'black',
    SoundMessage.play();
},)*/

/**/
/*SHTRAF BUTTONS END*/




/*SHOW ROOM START*/
/**/
ShowBTN.addEventListener('click', () => {
    SoundClick.play(),
        startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        SdatText.style.display = 'none',
        ChooseRoomText.style.display = 'none',
        ShowForm.style.display = 'flex',
        ChooseShowRoomText.style.display = 'flex',
        HelperText.innerText = "Выберите номер, который необходимо показать",
        ShowText.style.display = 'flex';

},)

Show20BTN.addEventListener('click', () => {
        startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        ShtrafForm.style.display = 'none',
        ShowForm.style.display = 'none',
        EndPokazForm.style.display = 'flex',
        Show20Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Осуществлен показ номера",
        items[0] = String('Комната номер: 20'),
        HelperText.innerText = "Нажмите кнопку - начать показ - , когда завершите показ нажмите, кнопку - завершить показ - ",
        SoundClick.play();
},)

Show21BTN.addEventListener('click', () => {
    startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        ShtrafForm.style.display = 'none',
        ShowForm.style.display = 'none',
        EndPokazForm.style.display = 'flex',
        Show21Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Осуществлен показ номера",
        items[0] = String('Комната номер: 21'),
        HelperText.innerText = "Нажмите кнопку - начать показ - , когда завершите показ нажмите, кнопку - завершить показ - ",
        SoundClick.play();
},)

Show22BTN.addEventListener('click', () => {
    startmenu.style.display = 'none',
        menuSdat.style.display = 'none',
        ShtrafForm.style.display = 'none',
        ShowForm.style.display = 'none',
        EndPokazForm.style.display = 'flex',
        Show22Text.style.display = 'flex',
        OwnerInfoTextRentStart.innerText = "Осуществлен показ номера",
        items[0] = String('Комната номер: 22'),
        HelperText.innerText = "Нажмите кнопку - начать показ - , когда завершите показ нажмите, кнопку - завершить показ - ",
        SoundClick.play();
},)




/**/
/*SHOW ROOM END*/


/*PAY METHOD BUTTONS START*/
/**/
KaspiButton.addEventListener('click', ()=> {
    CashForm.style.display = 'flex',
    InputCash.style.display = 'flex',
    ChooseKaspiMethod.style.display = 'flex',
    menuSdat.style.display = 'none',
    RoomsOpen.style.display = 'none',
    items[3] = String('Способ оплаты: Kaspi перевод'),
    HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку",
    SoundClick.play();
},)

CashBtn.addEventListener('click', ()=> {
    CashForm.style.display = 'flex',
    InputCash.style.display = 'flex',
    CashText.style.display = 'flex',
    RoomsOpen.style.display = 'none',
    menuSdat.style.display = 'none',
    items[3] = String('Способ оплаты: наличные'),
    HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку",
    SoundClick.play();
},)

CardBtn.addEventListener('click', ()=> {
    CashForm.style.display = 'flex',
    InputCash.style.display = 'flex',
    CardText.style.display = 'flex',
    RoomsOpen.style.display = 'none',
    menuSdat.style.display = 'none',
    items[3] = String('Способ оплаты: банковская карта'),
    HelperText.innerText = "Впишите сумму в окошко внизу и нажмите синюю стрелочку",
    SoundClick.play();
},)


PushButton.addEventListener('click', () => {
    CashForm.style.display = 'none',
        items[2] = items[2]+InputCash.value,
        RentTimeForm.style.display = 'flex',
        SumInfoSpan.firstChild.nodeValue = "Сумма оплаты: " + InputCash.value,
        SumInfoSpan.style.display = 'flex',
        HelperText.innerText = "Впишите колличество часов, по желанию заказчика колличесвто часов можно сделать фиксированным",
        SoundClick.play();
},)

/**/
/*PAT METHOD BUTTONS END*/








RentTimeCount.addEventListener('click', () => {
    CashForm.style.display = 'none',
    items[1] = items[1]+RoomChoseTimeInput.value,
    RentTimeForm.style.display = 'none',
    RentTimeSpan.firstChild.nodeValue = "Срок аренды в часах: " + RoomChoseTimeInput.value,
    RentTimeSpan.style.display = 'flex',
    CheckAllForm.style.display = 'flex',
    CheckAllText.style.display = 'flex',
    FinalTextSpan.innerText = items,
    FinalTextSpan.style.display = 'flex',
    HelperText.innerText = "Приложение формирует итоговый перечень, для проверки, если вы допустили ошибку нажмите кнопку -отмена операции-, если данные заполненны верно нажмите кнопку -сдать номер- ",
    AcceptButton.style.visibility = 'visible'
    SoundClick.play();

},)

AcceptButton.addEventListener('click', () => {
    OwnerInfoText.style.display ='flex',
    OwnerInfoTextRentStart.style.display ='flex',
    CountInfoText.style.display = 'flex',
    InfoText2.style.display = 'flex',
    InfoText2.innerText = items[0] + " сдана в аренду",
    CountInfoText.innerText = "Сумма в кассе: " + InputCash.value,
    OwnerInfoText.innerText = items,
    HelperText.innerText = "Поздравляем! Вы успешно освоили функцию сдачи номера в приложении. Для повторного обучения нажмите - ЧЕРНЫЙ КРУЖОЧЕК - на телефоне",
    HelperTextOwner.innerText = "Отчет о сдачи номера пришел владельцу, по желанию заказчика уведомления можно отключить",
    InfoStart.style.display = 'flex',
    CheckAllForm.style.display = 'none',
    AcceptButton.style.visibility = 'hidden',
    CancelAllButton.style.backgroundColor = 'black',
    SoundMessage.play();
},)


ConfrimStopRentBtn.addEventListener('click', () => {
        OwnerInfoText.style.display ='flex'
        OwnerInfoTextRentStart.style.display ='flex',
        InfoText2.style.display = 'flex',
        InfoText2.innerText = items[0] + " Остановлена аренда",
        OwnerInfoTextRentStart.innerText = "Закончилась аренда номера",
        OwnerInfoText.innerText = items[0],
        HelperText.innerText = "Поздравляем! Вы успешно освоили функцию отмены аренды номера в приложении. Для повторного обучения нажмите - ЧЕРНЫЙ КРУЖОЧЕК - на телефоне",
        HelperTextOwner.innerText = "Отчет о ваших действиях пришел владельцу, по желанию заказчика уведомления можно отключить",
        InfoStart.style.display = 'flex',
        CheckAllForm.style.display = 'none',
        ConfrimStopRentBtn.style.display = 'none',
        RentForm.style.display ='none',
        CancelAllButton.style.backgroundColor = 'black',
        SoundMessage.play();
},)

CancelRoomTime.addEventListener('click', () => {
    startmenu.style.display = 'flex',
    InfoStart.style.display = 'flex',
    RentTimeForm.style.display = 'none',
    SumInfoSpan.style.display = 'none',
    SdatText.style.display = 'none',
    CardText.style.display = 'none',
    ChoosePayMethod.style.display = 'none',
    ChooseRoomText.style.display = 'none',
    ChooseRoom20.style.display = 'none',
    ChooseRoom21.style.display = 'none',
    ChooseRoom22.style.display = 'none',
    ChooseKaspiMethod.style.display = 'none',
    CashText.style.display = 'none',
    CheckAllForm.style.display = 'none',
    CardText.style.display = 'none',
    RentTimeSpan.style.display = 'none',
    CheckAllText.style.display = 'none',
    HelperText.innerText = "Выберите действие для работы с приложением",
    InputCash.value = '',
    RoomChoseTimeInput.value = '',
    items = ['Комната номер: ', 'Срок аренды в часах: ', 'Сумма оплаты: '];
    SoundMessage.play();
},)


for (let a = 0; a < CancelAllBtn.length; a++) {

    CancelAllBtn[a].addEventListener('click',function(){
        SoundAbort.play(),
        location.reload();
    })
}


CancelAllButton.addEventListener('click', ()=> {
    location.reload(),
    SoundAbort.play();
},)

CancelAllButtonOwner.addEventListener('click', ()=> {
    location.reload(),
        SoundAbort.play();
},);


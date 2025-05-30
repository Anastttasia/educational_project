# Чек-лист по итоговому заданию «Тестирование ПО»
---

<table>
    <tr>
        <th>№</th>
        <th>Модуль / название раздела</th>
        <th>Описание тестируемого функционала</th>
        <th>Комментарий</th>
        <th>Ожидаемый результат</th>
        <th>Фактический результат</th>
        <th>Статус прохождения</th>
    </tr>
    <tr>
        <th>1</th>
        <th>Поле "Номер карты"</th>
        <th>Рублевый перевод. Данные карты корректны</th>
        <th>Сумма резерва не больше суммы на счету. Данные карты корректны (т.е введены 16 цифр)</th>
        <th>Поле "Номер карты" заполняется корректно</th>
        <th>Соответсвует ожидаемому</th>
        <th>done</th>
    </tr>
    <tr>
        <th>2</th>
        <th>Поле "Номер карты"</th>
        <th>Рублевый перевод. Данные карты отсутсвуют</th>
        <th>Сумма резерва не больше суммы на счету. Поле для ввода данных карты пустое</th>
        <th>Поле "Номер карты" заполняется корректно</th>
        <th>Соответсвует ожидаемому</th>
        <th>done</th>
    </tr>
    <tr>
        <th>3</th>
        <th>Поле "Номер карты"</th>
        <th>Рублевый перевод. Данные карты не корректны</th>
        <th>Сумма резерва не больше суммы на счету. Данные карты корректны (т.е введены
            <ul>
                <li>ввод от 1 до 15 цифр</li>
                <li>ввод < 16 цифр</li>
                <li>ввод > 16 цифр</li>
                <li>ввод букв</li>
                <li>ввод спец символов</li>
            </ul>
        </th>
        <th>Поле "Номер карты" заполняется только 16 цифрами</th>
        <th>В поле "Номер карты" можно внести 17 символов</th>
        <th>bag</th>
    </tr>
    <tr>
        <th>4</th>
        <th>URL</th>
        <th>Сумма резерва НЕ больше суммы на счету</th>
        <th>-</th>
        <th>Сумма "На счету" больше суммы "Резерв"</th>
        <th>Соответствует ожидаемому</th>
        <th>done</th>
    </tr>
    <tr>
        <th>5</th>
        <th>URL</th>
        <th>Сумма резерва больше суммы на счету</th>
        <th>-</th>
        <th>Сумма резерва всегда не больше суммы на счету</th>
        <th>Сумма резерва может быть больше суммы на счету</th>
        <th>bag</th>
    </tr>
    <tr>
        <th>6</th>
        <th>URL</th>
        <th>Нулевая и отрицательная сумма "На счету"</th>
        <th>Проверка тестовыми данными</th>
        <th>Передаваемое значение может быть положительным и нулевым</th>
        <th>Передаваемое значение может быть отрицательным </th>
        <th>bag</th>
    </tr>
     <tr>
        <th>7</th>
        <th>URL</th>
        <th>Нулевая и отрицательная сумма "Резерв"</th>
        <th>Проверка тестовыми данными</th>
        <th>Передаваемое значение может быть положительным и нулевым</th>
        <th>Передаваемое значение может быть отрицательным </th>
        <th>bag</th>
    </tr>
    <tr>
        <th>8</th>
        <th>URL</th>
        <th>Нулевое и отрицательное значение "На счету" и "Резерв"</th>
        <th>Проверка тестовыми данными</th>
        <th>Передаваемое значение может быть положительным и нулевым</th>
        <th>Передаваемое значение может быть отрицательным </th>
        <th>bag</th>
    </tr>
    <tr>
        <th>9</th>
        <th>Поле "Сумма перевода"</th>
        <th>Валидация поля "Сумма перевода"</th>
        <th>            
            <ul>
                <li>ввод от 1 до 9 цифр</li>
                <li>ввод < 10 цифр</li>
                <li>ввод > 10 цифр</li>
                <li>ввод букв</li>
                <li>ввод спец символов</li>
            </ul>
        </th>
        <th>Передаваемое значение только положительное числовое, есть ограничения на ввод</th>
        <th>Передаваемое значение может быть отрицательным, нет ограничений на количество цифр </th>
        <th>bag</th>
    </tr>
    <tr>
        <th>10</th>
        <th>Поле "Сумма перевода"</th>
        <th>Рублевый перевод. Достаточно средств на счету</th>
        <th>-</th>
        <th>Появляется кнопка "Перевести"</th>
        <th>Нельзя перевести сумму от 10000 при достаточном количестве средств</th>
        <th>bag</th>
    </tr>
    <tr>
        <th>11</th>
        <th>Поле "Сумма перевода"</th>
        <th>Рублевый перевод. НЕ достаточно средств на счету</th>
        <th>-</th>
        <th>Появляется нотификации "Недостаточно средств", кнопка "Перевести" отсутствует/th>
        <th>Появляется нотификации "Недостаточно средств", кнопка "Перевести" отсутствует</th>
        <th>bag</th>
    </tr>
    <tr>
        <th>12</th>
        <th>Поле "Сумма перевода"</th>
        <th>Рублевый перевод. Отрицательная сумма перевода</th>
        <th>-</th>
        <th>Можно перевести только положительную сумму/th>
        <th>Доступна кнопка "Перевести". Можно перевести отрицательную сумму без ограничений</th>
        <th>bag</th>
    </tr>
    <tr>
        <th>13</th>
        <th>Поле "Сумма перевода"</th>
        <th>Рублевый перевод. Нулевая сумма перевода</th>
        <th>-</th>
        <th>Можно перевести только положительную сумму/th>
        <th>Доступна кнопка "Перевести". Можно перевести нулевую сумму</th>
        <th>bag</th>
    </tr>
    <tr>
        <th>14</th>
        <th>Блок "Сумма перевода"</th>
        <th>Рублевый перевод. Нулевая сумма перевода</th>
        <th>            
            <ul>
                <li>сумма перевода + комиссия < на счету </li>
                <li>сумма перевода + комиссия > на счету</li>
            </ul>
        </th>
        <th>Комиссия = 10% от вводимой суммы/th>
        <th>Соответствует ожидаемому</th>
        <th>done</th>
    </tr>
</table>

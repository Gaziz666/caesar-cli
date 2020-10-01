# Caesar-cli

Утилита для шифровки и дешифровки текста по средствам [шифра Цезаря](https://en.wikipedia.org/wiki/Caesar_cipher).

## Установка

Для корректной работы приложения необходима [node.js](https://nodejs.org/en/).
Приложение разрабатывалось и тестировалось в текущей LTS версии node.js 12.18.1
Необходимо склонировать данный репозиторий и установить зависимости из package.json

для npm
`git clone https://github.com/shazzzam/caesar-cli && cd caesar-cli && npm i`

для yarn
`git clone https://github.com/shazzzam/caesar-cli && cd caesar-cli && yarn`

## Использование

Приложение запускается с помощью node.js `node caesar` и принимает следующие опции

* **-s, --shift** - целое число. Сдвиг ключа Цезаря. Обязательный параметр
* **-a, --action** - действие шифровка/разшифровка. Может принимать значения **encode/decode**. Обязательный Параметр
* **-i, --input** - файл входных данных. Строка содержащая путь к файлу с текстом для шифрования. Если данный параметр не задан, то данные беруться из входного потока stdin
* **-o, --output** - файл выходных данных. Строка содержащая путь к файлу для записи результата работы. Если данный параметр не задан, то данные выводятся в выходной поток stdout

Для завершения работы приложения в режиме работы с stdin необходимо нажать **ctrl + c**

### Примеры использования

```
node caesar -s 2 -a decode 
lorem ipsum
jmpck gnqsk
hello world
fcjjm umpjb

```

```
node caesar --shift 2 --action encode --input input.txt --output output.txt

input.txt >
abcdefghijklmnopqrstuvwxyz

output.txt >
cdefghijklmnopqrstuvwxyzab
```

```
node caesar --shift 60 -a encode -o output.txt
Victory or death
Hello

output.txt > 
Dqkbwzg wz lmibp
Pmttw
```

Приложение игнорирует и оставляет без изменения любые символы отличные от латинского алфавита
```
node caesar --shift 10 -a encode
Привет, Мир!
Привет, Мир!
```

И сохраняет регистр символов
```
node caesar --shift 5 -a decode
AbCdEf
```

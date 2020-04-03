# Brain Games

**Brain Games** это набор игр для развития способности совершать в уме различные математические операции. В набор входят следующие игры:
* Brain Calc - “Калькулятор”
* Brain Even - “Четное  ли число?”
* Brain GCD - “Наибольший общий делитель”
* Brain Prime - “Простое ли число?”
* Brain Progression - “Арифметическая прогрессия”

В каждой игре три раунда. В случае трех правильных ответов игроку засчитывается победа. Если хотя бы в одном из раундов дан неправильный ответ, игра завершается с поражением игрока.

## nodejs-package

[![Node CI](https://github.com/iuserkv/frontend-project-lvl1/workflows/CI/badge.svg)](https://github.com/iuserkv/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/0d8842f6a261e46dd2ea/maintainability)](https://codeclimate.com/github/iuserkv/frontend-project-lvl1/maintainability)

## Установка

```sh
$ make install
```

## Запуск игр

### Brain Calc - “Калькулятор”

Игроку необходимо выполнить сложение, вычитание или умножение двух целых чисел и ввести с клавиатуры полученный результат.

**Для запуска игры введите команду**:

```sh
$ brain-calc
```

[![asciicast](https://asciinema.org/a/uHv6zFm0wFxMNqibapCqbucmL.png)](https://asciinema.org/a/uHv6zFm0wFxMNqibapCqbucmL)

### Brain Even - “Четное  ли число?”

Игра предлагает целое число. В ответ, игрок должен ввести “yes”, если число четное или “no”, если нечетное. Любой другой ответ засчитывается как неверный.

Чётность - характеристика целого числа, определяющая его способность делиться нацело на два.
Чётное число - целое число, которое делится на 2 без остатка: …, −4, −2, 0, 2, 4, 6, 8, …
Нечётное число - целое число, которое не делится на 2 без остатка: …, −3, −1, 1, 3, 5, 7, 9, …

**Для запуска игры введите команду**:

```sh
$ brain-even
```

[![asciicast](https://asciinema.org/a/UZD6Od7tAgA6eiGeWvk9tPzw6.png)](https://asciinema.org/a/UZD6Od7tAgA6eiGeWvk9tPzw6)

### Brain GCD - “Наибольший общий делитель”

Программа предлагает два целых числа. Игрок должен найти наибольший общих делитель этих чисел и ввести полученное число.

Наибольшим общим делителем (НОД) для двух целых чисел m и n называется наибольший из их общих делителей. Пример: для чисел 54 и 24 наибольший общий делитель равен 6.
Наибольший общий делитель существует и однозначно определён, если хотя бы одно из чисел m или n не равно нулю.

**Для запуска игры введите команду**:

```sh
$ brain-even
```

[![asciicast](https://asciinema.org/a/z4xqprj8aKnxrHi7XUHkHkETz.png)](https://asciinema.org/a/z4xqprj8aKnxrHi7XUHkHkETz)

### Brain Prime - “Простое ли число?”

Игра предлагает целое число. Пользователю необходимо определить, является ли оно простым или нет. Если число простое, надо ввести “yes”, иначе - “no”. Любой другой ответ засчитывается как неверный.

Простое число - натуральное (целое положительное) число, имеющее ровно два различных натуральных делителя - единицу и самого себя]. Другими словами, число x является простым, если оно больше 1 и при этом делится без остатка только на 1 и на x. К примеру, 5 - простое число, а 6 является составным числом, так как, помимо 1 и 6, также делится на 2 и на 3.

**Для запуска игры введите команду**:

```sh
$ brain-prime
```

[![asciicast](https://asciinema.org/a/OSqgxPhQcP7RynFlk8eQm7IzJ.png)](https://asciinema.org/a/OSqgxPhQcP7RynFlk8eQm7IzJ)

### Brain Progression - “Арифметическая прогрессия”

Игроку предлагается указать пропущенный член арифметической прогрессии.

Арифметическая прогрессия - числовая последовательность вида
   a1 ,   a1 + d ,   a1 + 2d ,   … ,   a1 + ( n − 1 )d ,
то есть последовательность чисел (членов прогрессии), в которой каждое число, начиная со второго, получается из предыдущего добавлением к нему постоянного числа d (шага, или разности прогрессии).

**Для запуска игры введите команду**:

```sh
$ brain-progression
```

[![asciicast](https://asciinema.org/a/8DPfoTOA8Gf53DJqIMS85Jw2O.png)](https://asciinema.org/a/8DPfoTOA8Gf53DJqIMS85Jw2O)
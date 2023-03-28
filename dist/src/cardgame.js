var CardGame = /** @class */ (function () {
    function CardGame(element) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTMLElement');
        }
        this.element = element;
        this.difficulty = '';
        this.min = 0;
        this.sec = 0;
        this.levels = {
            1: 6,
            2: 12,
            3: 18,
        };
        this.start();
    }
    CardGame.prototype.start = function () {
        var _this = this;
        this.element.innerHTML = '';
        var startWindow = document.createElement('div');
        startWindow.classList.add('game__start-window');
        var header = document.createElement('h1');
        header.classList.add('game__header');
        header.textContent = 'Выбери сложность';
        var menuDifficulty = document.createElement('div');
        menuDifficulty.classList.add('game__menu-difficulty');
        for (var i = 1; i <= 3; i++) {
            var buttonDifficulty = document.createElement('button');
            buttonDifficulty.classList.add('difficulty');
            buttonDifficulty.textContent = ''.concat(i);
            buttonDifficulty.setAttribute('data-difficulty', ''.concat(i));
            menuDifficulty.appendChild(buttonDifficulty);
        }
        var buttonsDifficulty = menuDifficulty.querySelectorAll('.difficulty');
        var startButton = document.createElement('button');
        startButton.classList.add('game__button', 'game__button_start');
        startButton.textContent = 'Старт';
        var warning = document.createElement('p');
        warning.textContent = 'Выберите сложность';
        warning.classList.add('warning', 'warning_hidden');
        startWindow.appendChild(header);
        startWindow.appendChild(menuDifficulty);
        startWindow.appendChild(startButton);
        startWindow.appendChild(warning);
        this.element.appendChild(startWindow);
        menuDifficulty.addEventListener('click', function (event) {
            var target = event.target;
            _this.difficulty = target.dataset.difficulty;
            console.log(_this.difficulty);
            buttonsDifficulty.forEach(function (button) {
                if (button.dataset.difficulty == _this.difficulty) {
                    button.classList.add('difficulty_active');
                    warning.classList.add('warning_hidden');
                } else {
                    button.classList.remove('difficulty_active');
                }
            });
        });
        startButton.addEventListener('click', function () {
            if (_this.difficulty === '' || _this.difficulty === undefined) {
                warning.classList.remove('warning_hidden');
            } else {
                _this.gameWindow();
            }
        });
    };
    CardGame.prototype.gameWindow = function () {
        var _this = this;
        console.log('загрузка');
        var cardsArr = [
            '6C',
            '6D',
            '6H',
            '6S',
            '7C',
            '7D',
            '7H',
            '7S',
            '8C',
            '8D',
            '8H',
            '8S',
            '9C',
            '9D',
            '9H',
            '9S',
            'TC',
            'TD',
            'TH',
            'TS',
            'JC',
            'JD',
            'JH',
            'JS',
            'QC',
            'QD',
            'QH',
            'QS',
            'KC',
            'KD',
            'KH',
            'KS',
            'AC',
            'AD',
            'AH',
            'AS',
        ];
        var cardsInGame = [];
        this.element.innerHTML = '';
        this.element.classList.add('position-top');
        var menuGame = document.createElement('div');
        menuGame.classList.add('game__menu');
        var gameTime = document.createElement('div');
        gameTime.classList.add('game__time');
        var gameTimeTitles = document.createElement('div');
        gameTimeTitles.classList.add('game__time-titles');
        var gameTimeTitlesMin = document.createElement('div');
        gameTimeTitlesMin.classList.add(
            'game__time-title',
            'game__time-title_min'
        );
        gameTimeTitlesMin.textContent = 'min';
        var gameTimeTitlesSec = document.createElement('div');
        gameTimeTitlesSec.classList.add(
            'game__time-title',
            'game__time-title_sec'
        );
        gameTimeTitlesSec.textContent = 'sec';
        var gameTimeDigits = document.createElement('div');
        gameTimeDigits.classList.add('game__time-digits');
        var gameTimeDigitMin = document.createElement('div');
        gameTimeDigitMin.classList.add(
            'game__time-digit',
            'game__time-digit_min'
        );
        gameTimeDigitMin.textContent = '00';
        var dot = document.createElement('div');
        dot.textContent = '.';
        dot.classList.add('game__time-digit');
        var gameTimeDigitSec = document.createElement('div');
        gameTimeDigitSec.classList.add(
            'game__time-digit',
            'game__time-digit_sec'
        );
        gameTimeDigitSec.textContent = '00';
        gameTimeTitles.appendChild(gameTimeTitlesMin);
        gameTimeTitles.appendChild(gameTimeTitlesSec);
        gameTimeDigits.appendChild(gameTimeDigitMin);
        gameTimeDigits.appendChild(dot);
        gameTimeDigits.appendChild(gameTimeDigitSec);
        gameTime.appendChild(gameTimeTitles);
        gameTime.appendChild(gameTimeDigits);
        var buttonPlayAgain = document.createElement('button');
        buttonPlayAgain.classList.add(
            'game__button',
            'game__button_play-again'
        );
        buttonPlayAgain.textContent = 'Начать заново';
        menuGame.appendChild(gameTime);
        menuGame.appendChild(buttonPlayAgain);
        var cardField = document.createElement('div');
        cardField.classList.add('game__card-field');
        for (var i = 1; i <= this.levels[Number(this.difficulty)] / 2; i++) {
            var card = cardsArr[Math.floor(Math.random() * cardsArr.length)];
            cardsInGame.push(card);
        }
        cardsInGame = cardsInGame.concat(cardsInGame);
        cardsInGame = cardsInGame.sort(function () {
            return Math.random() - 0.5;
        });
        console.log(cardsInGame);
        for (var i = 0; i <= this.levels[Number(this.difficulty)] - 1; i++) {
            var card = document.createElement('div');
            card.classList.add('game__card');
            var cardBack = document.createElement('img');
            cardBack.setAttribute('src', './static/img/shirt.svg');
            cardBack.classList.add('card');
            card.appendChild(cardBack);
            cardBack.setAttribute('data-card', ''.concat(cardsInGame[i]));
            cardField.appendChild(card);
        }
        this.element.appendChild(menuGame);
        this.element.appendChild(cardField);
        var cards = document.querySelectorAll('.card');
        buttonPlayAgain.addEventListener('click', function () {
            _this.element.classList.remove('position-top');
            _this.start();
        });
        setTimeout(function () {
            cards.forEach(function (item) {
                item.setAttribute(
                    'src',
                    './static/img/'.concat(item.dataset.card, '.svg')
                );
            });
            _this.gameStart();
        }, 1000);
    };
    CardGame.prototype.gameStart = function () {
        console.log('игра');
        var cards = document.querySelectorAll('.card');
        setTimeout(function () {
            cards.forEach(function (item) {
                item.setAttribute('src', './static/img/shirt.svg');
            });
        }, 5000);
    };
    CardGame.prototype.win = function () {
        var _this = this;
        var finalWindow = document.createElement('div');
        finalWindow.classList.add('game__final-window');
        var finalImg = document.createElement('img');
        finalImg.classList.add('game__final-img');
        finalImg.setAttribute('src', './static/img/win.png');
        var header = document.createElement('h1');
        header.classList.add('game__header');
        header.textContent = 'Вы выиграли!';
        var finalTimeTitle = document.createElement('h3');
        finalTimeTitle.classList.add('game__final-time-title');
        finalTimeTitle.textContent = 'Затраченное время:';
        var minute = document.querySelector('.game__time-digit_min');
        var second = document.querySelector('.game__time-digit_sec');
        var finalTimeDigit = document.createElement('div');
        finalTimeDigit.classList.add('game__final-time-digit');
        finalTimeDigit.textContent = ''
            .concat(minute.textContent, '.')
            .concat(second.textContent, ' ');
        var finalButton = document.createElement('button');
        finalButton.classList.add('game__button', 'game__button_play-again');
        finalButton.textContent = 'Играть снова';
        finalWindow.appendChild(finalImg);
        finalWindow.appendChild(header);
        finalWindow.appendChild(finalTimeTitle);
        finalWindow.appendChild(finalTimeDigit);
        finalWindow.appendChild(finalButton);
        this.element.appendChild(finalWindow);
        finalButton.addEventListener('click', function () {
            _this.element.classList.remove('position-top');
            _this.start();
        });
        this.min = 0;
        this.sec = 0;
    };
    CardGame.prototype.lose = function () {
        var _this = this;
        var finalWindow = document.createElement('div');
        finalWindow.classList.add('game__final-window');
        var finalImg = document.createElement('img');
        finalImg.classList.add('game__final-img');
        finalImg.setAttribute('src', './static/img/lose.png');
        var header = document.createElement('h1');
        header.classList.add('game__header');
        header.textContent = 'Вы проиграли!';
        var finalTimeTitle = document.createElement('h3');
        finalTimeTitle.classList.add('game__final-time-title');
        finalTimeTitle.textContent = 'Затраченное время:';
        var finalTimeDigit = document.createElement('div');
        finalTimeDigit.classList.add('game__final-time-digit');
        finalTimeDigit.textContent = ''
            .concat(
                document.querySelector('.game__time-digit_min').textContent,
                '.'
            )
            .concat(
                document.querySelector('.game__time-digit_sec').textContent,
                ' '
            );
        var finalButton = document.createElement('button');
        finalButton.classList.add('game__button', 'game__button_play-again');
        finalButton.textContent = 'Играть снова';
        finalWindow.appendChild(finalImg);
        finalWindow.appendChild(header);
        finalWindow.appendChild(finalTimeTitle);
        finalWindow.appendChild(finalTimeDigit);
        finalWindow.appendChild(finalButton);
        this.element.appendChild(finalWindow);
        finalButton.addEventListener('click', function () {
            _this.element.classList.remove('position-top');
            _this.start();
        });
        this.min = 0;
        this.sec = 0;
    };
    return CardGame;
})();
export { CardGame };
//# sourceMappingURL=cardgame.js.map
